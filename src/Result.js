import React, {useState} from 'react'
import {isEqual} from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner as spinner } from '@fortawesome/free-solid-svg-icons'
import ReactGA from 'react-ga'

export default ({questions, answer, onReview, next}) => {
        window.onbeforeunload = null

        let correct = questions.filter((question, index)=>{
            return isEqual(question.right, answer[index + 1])
        }).length
        
        let total = Object.values(questions).length
        let answered = Object.values(answer).filter(arr=>arr.length > 0).length
        let unanswered = Object.values(questions).length - answered
        let percentage = Math.round(100 * correct/total)

        const [Display, setDisplay] = useState(false)

        setTimeout(()=>setDisplay(true), 2000)
        
        ReactGA.initialize('UA-67144673-1');

        ReactGA.event({
            category: 'Result',
            action: 'Viewed'
        })

        let done = {}

        if(window.localStorage.getItem('done')) {
            done = JSON.parse(window.localStorage.getItem('done'))
        }

        done[window.location.pathname] = percentage

        window.localStorage.setItem('done', JSON.stringify(done))

        if(!Display) {
            return <div className="flex flex-wrap justify-center items-center w-full h-full"><FontAwesomeIcon icon={spinner} spin/> Checking Results ...</div>
        }
        
        ReactGA.event({
            category: 'Percentage',
            action: window.location.href.split('/').reverse()[0].split('?')[0],
            label: window.location.href.split('?')[0] + ' - ' + percentage.toString() + '%'
        })

        return  <table className={"w-full " + (percentage > 80 ? 'bg-green-300 text-green-800' : 'bg-red-400 text-red-800')}>
                    <thead>
                        <tr>
                            <td colSpan={2} className="border border-green-900 text-center bg-gray-300 p-2">Result</td>
                        </tr>
                    </thead>  
                    <tbody>
                        <tr>
                            <td className="border border-green-800 p-2">Total Questions</td>
                            <td className="border border-green-800 text-center p-2">{total}</td>
                        </tr>
                        <tr>
                            <td className="border border-green-800 p-2">Answered</td>
                            <td className="border border-green-800 text-center p-2">{answered}</td>
                        </tr>
                        <tr>
                            <td className="border border-green-800 p-2">Correct</td>
                            <td className="border border-green-800 text-center p-2">{correct}</td>
                        </tr>
                        <tr>
                            <td className="border border-green-800 p-2">Unanswered</td>
                            <td className="border border-green-800 text-center p-2">{unanswered}</td>
                        </tr>
                        <tr>
                            <td className="border border-green-800 p-2">Percentage</td>
                            <td className="border border-green-800 text-center p-2">{percentage}%</td>
                        </tr>
                        <tr>
                            <td colSpan={2} className="border border-green-800 p-2 text-center cursor-pointer bg-green-400 hover:bg-green-800 text-green-900 hover:text-green-100" onClick={onReview}>Review</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td className="bg-teal-200 p-2 text-center text-teal-900 hover:bg-teal-900 hover:text-teal-200 cursor-pointer" onClick={()=>window.location.href=next} colSpan="2">Practice Another Set</td>
                        </tr>
                    </tfoot>
                </table>
}