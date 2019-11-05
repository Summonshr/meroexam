import React, { useState } from 'react'
import { uniq } from 'lodash'
import 'katex/dist/katex.min.css'
import Latex from 'react-latex'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight as nextArrow, faArrowAltCircleLeft as previous, faCheck, faSpinner as spin } from '@fortawesome/free-solid-svg-icons'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import ReactGA from 'react-ga'
import {Link} from 'react-router-dom'


export default ({ question, page, next, compare, total, nextPage, previousPage, parent, onAnswer, review, answers }) => {

    ReactGA.initialize('UA-67144673-1');

    const [Answers, setAnswers] = useState(answers || {});

    if(!Answers[page]) {
        Answers[page] = []
    }

    const [FullView, setFullView] = useState(false);

    const [Fetching, setFetching] = useState(false);

    if(compare) {
        question.options = [
            {key: 'A', answer: 'Quantity A is greater.'},
            {key: 'B', answer: 'Quantity B is greater.'},
            {key: 'C', answer: 'The two quantities are equal.'},
            {key: 'D', answer: 'The relationship cannot be determined from the information given.'},
        ]
    }

    let gradient = 'linear-gradient(to right,  rgb(25,220,25) ' + page * 100 / total + '%, #fff ' + (100 * page/total) + '%)'
    
    return <div className={'animated max-w-4xl relative w-full bg-gray-100 flex flex-wrap justify-between fadeIn mx-auto rounded shadow mb-16 relative ' + (Answers[page].length > 0 && 'answered')}>
        <div style={{background: gradient}} className="w-full h-1"></div>
        {Fetching && <div className="w-full h-full bg-blue-300 absolute opacity-50 flex items-center justify-center">
            <FontAwesomeIcon icon={spin} spin/>
        </div>}
        <span className="absolute top-0 right-0 text-xs mr-4 text-gray-700 border-b">Question {page} out of {total}</span>
        {review &&  <Link className="mt-2 ml-2 bg-teal-300 px-4  rounded-full py-1 mb-2 hover:bg-teal-800 hover:text-teal-100" to={next}>Practice new set</Link>}
        <div className="w-full flex flex-wrap justify-between p-2 mb-2  p-4">
            {parent && !compare &&<pre onDoubleClick={()=>setFullView(!FullView)} className="mb-2 border-b-2 w-full overflow-auto"><p className={"transition parent" + (FullView ? ' h-full' : '  h-64')}>{parent}</p></pre>}
            {question.img && <div className="md:hidden w-full flex flex-wrap justify-center max-w-lg my-4">
                <img src={question.img} alt="question"/>
            </div>}
            {question.question && <p className={"w-full max-w-lg " + (question.question.length < 20 ? 'text-center' : '')}><Latex>{question.question}</Latex></p>}
            {question.compare && <div className="flex flex-wrap justify-around max-w-lg text-center w-full">
                <div className="w-1/2 p-2 text-gray-900"><span className="border-b border-green-900 px-2 leading-loose">A</span><br/><Latex>{question.first}</Latex></div>
                <div className="w-1/2 p-2"><span className="border-b border-green-900 px-2 leading-loose">B</span><br/><Latex>{question.second}</Latex></div>
            </div>}
            {question.hint && <span title={question.hint} className="bg-green-300 text-green-900 h-6 w-6 text-center rounded-full cursor-pointer italic">i</span>}
        </div>
        <div className="w-full md:w-3/5 p-0 md:p-4">
            <div className="options w-full p-2">
                {question.options.map(option => <label key={option.key} className={"w-full block p-2 shadow mb-2 bg-gray-200 cursor-pointer " + (question.multiple ? 'rounded-none' : 'rounded-lg') + ' ' + (review ? (Answers[page].includes(option.key) && (question.right.includes(option.key) ? 'right-answer animated fadeIn' : 'wrong-answer animated fadeIn')) : (Answers[page].includes(option.key) ? 'bg-gray-800 text-gray-100' : ''))}><input onClick={review? ()=>{} :() => {
                    let answers = Answers

                    if(!question.multiple) {
                        answers[page] = [];
                    }

                    if (Answers[page].includes(option.key)) {
                        answers[page] = answers[page].filter(answer => answer !== option.key)
                    } else {
                        answers[page].push(option.key)
                    }

                    answers[page] = uniq(answers[page]).sort()

                    setAnswers({...answers})

                    onAnswer(page, answers)

                }} checked={Answers[page].includes(option.key)} onChange={()=>{}} className="w-4 h-4 align-middle mr-2" type={question.multiple ? 'checkbox' : 'radio'} /><Latex>{option.answer}</Latex>{review && question.right.includes(option.key) && <div className="bg-green-300 inline rounded-full text-center p-1 px-2 text-gray-800 leading-loose ml-2"><FontAwesomeIcon icon={faCheck}/></div>}</label>)}
            </div>
            {review && question.explanation && <div className="bg-green-200 text-green-800 p-2">{question.explanation}</div>}
            <div className="w-full p-1 flex flex-wrap justify-between  p-4">
                {(page === total && !review) &&  <button disabled={Fetching} title='Confirm' className={"p-1 rounded-sm px-4 bg-green-800 text-green-100 "} onClick={()=>confirmAlert({
                    title: 'Confirm to submit',
                    message: 'Are you sure to do this.',
                    buttons: [
                        {
                        label: 'Review answers',
                        onClick: () => {
                            ReactGA.event({
                                category: 'Review',
                                action: 'Taken'
                            })
                        }
                        },
                        {
                        label: 'Submit',
                        onClick: ()=>{
                                ReactGA.event({
                                    category: 'Review',
                                    action: 'Not Taken'
                                })
                                nextPage()
                                ReactGA.event({
                                    category: 'Form',
                                    action: 'Submitted'
                                })
                            }
                        }
                    ]
                })}>Next <FontAwesomeIcon icon={nextArrow} /></button>}
                {page !== total && <button disabled={Fetching} title='Next' className={"p-1 rounded-sm px-4 text-green-100 " + (Fetching ? 'bg-green-400':'bg-green-800')} onClick={()=>{
                    setFetching(true)
                    setTimeout(()=>{
                        setFetching(false)
                        nextPage()
                        window.scrollTo(0, 112)
                        ReactGA.event({
                            category: 'Next',
                            action: 'Clicked'
                        })
                    }, Math.random() * 1000)
                }}>Next <FontAwesomeIcon icon={nextArrow} /></button>}
                {page > 1 && <button disabled={Fetching} className={"p-1 rounded-sm px-4 text-red-900 " + (Fetching ? 'bg-red-200' : 'bg-red-400')} onClick={()=>{
                    setFetching(true)
                    ReactGA.event({
                        category: 'Previous',
                        action: 'Clicked'
                    })
                    setTimeout(()=>{
                        setFetching(false)
                        window.scrollTo(0, 112)
                        previousPage()
                    }, Math.random() * 1000)
                }}>Previous <FontAwesomeIcon icon={previous} /></button>}
            </div>
        </div>
        <div className="hidden md:block w-2/5 p-2  p-4">
            {question.img && <div className="w-full flex flex-wrap justify-center max-w-lg my-4"><img alt="question" src={question.img}/></div>}
        </div>
    </div>
}