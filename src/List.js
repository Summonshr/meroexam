import React from 'react'
import {Link} from 'react-router-dom'
import ReactGA from 'react-ga'
import Routes from './routes'
import {Helmet} from 'react-helmet'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faLock as lock } from '@fortawesome/free-solid-svg-icons'
import { NotificationManager } from 'react-notifications';
import { mean, values } from 'lodash'
import {AES} from "crypto-js"
 
export default props=>{
    let list = Routes.children

    let {category, subcategory} = props.match.params

    if(category) {
        list = list[category].children
    }

    if(subcategory) {
        list = list[subcategory].children
    }

    ReactGA.initialize('UA-67144673-1');
    ReactGA.pageview(window.location.href);

    ReactGA.event({
        category: 'Accessed',
        action: window.location.href
    });

    let done = {}

    if(window.localStorage.getItem('done')) {
        done = JSON.parse(window.localStorage.getItem('done'))
    }

    list = Object.values(list)


    let avg = mean(values(done))

    let allowedOne = false;

    return <>
        <Helmet>
            <meta name="description" content={"Category: " + category + (subcategory ? (", Sub Category: " + subcategory) : '')}/>
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://meroexam.com/images/logo.png" />
            <meta property="og:url" content="https://meroexam.com/" />
            <meta name="description" content="Multiple choice questions practice sets for students appearing at GRE, especially from Nepal"/>
            <meta name="keywords" content={"GRE, GRE Exam from Nepal, GRE preparation nepal"}/>
            <meta property="og:site_name" content="MeroExam.com" />
            <title>MeroExam.com | List of sets at Meroexam.com</title>
        </Helmet>
        <ul className="list-reset flex flex-wrap justify-around w-full animated fadeIn container mx-auto">
            {list.map((child,i)=>{

                let shouldBeBlocked = true;

                if(done[child.route]) {
                    shouldBeBlocked = false;
                }

                if(i === 0){
                    shouldBeBlocked = false;
                }

                if(shouldBeBlocked && avg >= 70 && !allowedOne) {
                    allowedOne = true;
                    shouldBeBlocked = false;
                }
                
                if(!subcategory){
                    shouldBeBlocked = false
                }
                
                return <li key={child.title} className="w-full max-w-xs text-center p-2">
                <Link className={"block relative  p-4 flex flex-wrap  justify-center items-center w-full text-gray-100 h-40 " + (' hover:bg-color-400 relative bg-color-300'.split('color').join(child.bg))} to={shouldBeBlocked ? '#' :child.route+'?token=' + AES.encrypt('Password', child.route.split('/').reverse()[0]).toString()}>{child.img ? <img src={child.img} alt={child.title}/> : child.title }
                    {done[child.route] > 0 && <span className={"absolute rounded-full p-2 top-0 right-0 text-xs mt-2 mr-2" + (done[child.route] > 70 ? ' bg-green-900 ' : " bg-red-900 ")}>{done[child.route]}%</span>}
                    {subcategory && <span className="absolute ml-4 text-xl font-semibold pb-1"> - {child.title}</span>}
                    {shouldBeBlocked && <p data-tip="Get 70% or more on previous exam to attempt this test" onClick={()=>NotificationManager.error('Get average 70% or more on previous sets to unlock this set')} className="w-full w-full h-full absolute text-gray-100 font-bold text-right top-0 right-0 mt-2"><div className="mr-2 bg-red-700 pt-1 rounded-full w-8 hover:bg-red-900 text-center h-8 inline-block"><Icon icon={lock}/></div></p>}
                </Link>
            </li>
            })}
        </ul>
    </>
}