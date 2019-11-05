import React from 'react'
import Question from './question'
import Axios from 'axios'
import { random } from 'lodash'
import Completed from './images/completed.png'
import Countdown from 'react-countdown-now'
import Result from './Result'
import Logo from './images/logo.png'
import ReactGA from 'react-ga'
import convertToWordMeaning from './functions'
import { Helmet } from 'react-helmet'
import { Redirect } from 'react-router-dom'
import { parse } from 'query-string'
import CryptoJS,{ AES } from 'crypto-js'

export default class Exam extends React.Component {

    constructor(props) {
        super(props)
        this.state = { page: 1, questions: {}, review: false, startCountDown: false, answersGiven: {} }
    }

    componentDidMount() {
        Axios.get(this.props.match.params.set + '.json').then(response => {

            if (this.props.match.params.set === 'word-meaning') {
                response.data = convertToWordMeaning(response.data)
            }

            this.setState({ questions: response.data, startCountDown: true })

            window.scrollTo(0, 112)

        });

        window.onbeforeunload = function () { return false; }

        ReactGA.initialize('UA-67144673-1');

        ReactGA.event({
            category: 'Exam - '+ this.props.match.params.subcategory + ' - ' + this.props.match.params.set,
            action: 'Started'
        });
    }

    countDown({ hours, minutes, seconds, completed }) {
        return <span className={"z-20 p-2 px-3 rounded-sm" + (seconds < 3 ? ' bg-green-600 text-green-100' : ' bg-green-300 text-green-900')}><span className={seconds >= 1 ? 'animated fadeIn infinite' : ''}>{seconds < 1 ? 'Get Ready' : 'Fetching questions ...'}</span></span>
    }

    storeAnswer(question, answer) {

        this.setState({ answerGiven: answer })

        localStorage.setItem('answers', JSON.stringify(answer))
    }

    render() {

        const {set, category, subcategory} = this.props.match.params

        let token = parse(window.location.search).token;

        let url = window.location.pathname.split('/').reverse()

        url.shift()

        if(!token) {
            return <Redirect to={url.reverse().join('/')}/>
        }

        token = token.split(' ').join('+')
        
        let unencrypted = AES.decrypt(token,set).toString(CryptoJS.enc.Utf8)

        if(unencrypted !== 'Password') {
            return <Redirect to={url.reverse().join('/')}/>        
        } 

        if (!this.state.questions.questions) {
            return '';
        }

        let {questions, parent} = this.state.questions

        let question = questions[this.state.page - 1]

        let next = ('/sets/' + window.Object.values({ ...this.props.match.params, set: undefined }).join('/'))

        return <div className="min-h-screen bg-gray-800 pt-8 animated fadeIn w-full blend bg-left image">
            <Helmet>
                <title>
                    Exam of {set} of {category} of {subcategory.toUpperCase()} | Meroexam.com
                </title>
                <meta name="description" content={'Giving Exam of '+set+'of '+category+'of '+subcategory.toUpperCase() + ' gives your more boost of confidence while your preparation'} />
            </Helmet>
            <div className="flex flex-wrap justify-between items-center">
                {this.state.startCountDown && <div className="flex w-full justify-center items-center">
                    <div className="w-64 h-64 bg-green-200 flex flex-wrap flex-col justify-center items-center rounded-full relative  ">
                        <img src={Logo} className="z-10 mb-4" alt="logo" />
                        <Countdown date={Date.now() + (random(1, 5) * 1000)} onComplete={() => this.setState({ startCountDown: false })} renderer={this.countDown.bind(this)} />
                    </div>
                </div>}
                {!this.state.startCountDown && <>
                    {!question && <div className="w-full max-w-sm w-full h-64 mx-auto bg-gray-100">
                        <img className="mx-auto w-32" src={Completed} alt="Completed" />
                        <Result next={next} onReview={() => this.setState({ review: true, page: 1 })} questions={questions} answer={this.state.answerGiven} />
                    </div>}
                    {question && <Question next={next} review={this.state.review} answers={this.state.answerGiven} onAnswer={this.storeAnswer.bind(this)} compare={question.compare} parent={parent[question.parent]} page={this.state.page} nextPage={() => this.setState({ page: this.state.page + 1, fetching: false })} previousPage={() => this.setState({ page: this.state.page - 1, fetching: false })} total={questions.length} question={question} />}
                </>}
            </div>
        </div>
    }
}