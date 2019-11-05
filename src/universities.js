import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, FacebookIcon,  TwitterIcon, LinkedinIcon} from 'react-share'
import Universities from './scores'
import {map} from 'lodash'

let title = 'Best Universities according to their GRE score';

export default (props) => {
    let urlScore = props.match.params.scores
    let scores = map(Universities,'score')

    let universities = [];

    Universities.map(list=>{
        universities = universities.concat(list.universities)
        return list;
    });

    const [search, setSearch] = useState('')
    const [count, setCount] = useState(12)

    let numbers = ''

    if(urlScore) {
        title = title + ' ' + urlScore;

        numbers = urlScore.split('-').map(Number)

        if(numbers.length > 0) {
            
            universities = []

            Universities.filter(list=>{
                if(list.score.min === numbers[0] && list.score.max === numbers[1]) {
                    universities = universities.concat(list.universities)
                }
                return list;
            })
            
        }   
    }
    let total = universities.length;
    
    universities = universities.filter(university=>{
        return search.length < 3 || university.name.toLowerCase().split(' ').join().indexOf(search.toLowerCase().split(' ').join()) > -1
    }).slice(0,count)

    return <div className={"w-full animated fadeIn md:my-16 bg-gray-300 p-4 md:p-16 mx-auto max-w-6xl" }>
        <Helmet>
            <title>{title} | Meroexam.com</title>
            <meta name="description" content={'Best universities collected from around the internet that are best suited for students who have appeared in GRE with scores from ' + (urlScore ? urlScore.split('-').join(' to ') : ' all category')}/>
        </Helmet>
        <h2 className="flex flex-wrap items-end justify-between mb-2 border-b pb-2 uppercase font-bold text-blue-800 border-blue-800">
            <span>Universities <span className="text-xs text-gray-700">- based upon GRE Score</span></span>
            <input className="p-2 bg-blue-100 w-full sm:w-auto mt-2" onChange={event=>setSearch(event.target.value)} placeholder="Search ..."/>
        </h2>
        <div className="mb-4">
            <ul className="flex flex-wrap">
                <li className={"mr-1 hover:rounded hover:bg-blue-800 hover:text-blue-200 cursor-pointer bg-blue-300 font-bold mb-2 " + (urlScore ? "text-blue-800 " : "bg-blue-800 text-blue-200 rounded")}><Link className="block p-2 px-6" to="/universities">All</Link></li>
                {scores.reverse().map(({min, max})=><li key={min.toString()+max.toString()} className={"mr-1 hover:rounded mb-2 hover:bg-blue-800 hover:text-blue-200 cursor-pointer bg-blue-300 font-bold " + (urlScore === min+"-"+max ? " bg-blue-800 text-blue-200" : " text-blue-800 rounded" )}>
                    <Link onClick={()=>setCount(12)} className="p-2 block" to={"/universities/" + min + '-'+ max}>{min} - {max}</Link></li>)}
            </ul>
        </div>
        <div>
            <ul className="flex flex-wrap">
            {universities.map((university,i)=><li className="sm:w-1/2 md:w-1/3 lg:w-64 p-4 w-full" key={university.site + i}>
                <div className="animated fadeIn w-full h-full block cursor-pointer" href="/#away" onClick={()=>window.open(university.site,'_blank')}>
                    <img alt={university.name} src={"/universities/"+university.site.split('.')[1]+'.jpg'}/>
                    <span>{university.name}</span>
                </div>
            </li>)}
            </ul>
            {count < total && <div className="p-2">
                <button disabled={count>total} className="bg-blue-300 text-blue-800 p-2 rounded hover:bg-blue-800 hover:text-blue-200" onClick={()=>setCount(count + 8)}>Load More</button>
            </div>}
            {total === 0 && <div className="bg-red-200 text-red-800 p-2 shadow max-w-sm">Nothing found.</div>}
        </div>
        <div className="flex flex-wrap items-center justify-left mt-4">
            <span className="inline mr-2">Share to</span>
            <FacebookShareButton quote={title} className="inline mr-2" url={window.location.href}><FacebookIcon size={32} round={true}/></FacebookShareButton>
            <TwitterShareButton title={title} className="inline mr-2" url={window.location.href}><TwitterIcon size={32} round={true}/></TwitterShareButton>
            <LinkedinShareButton className="inline mr-2" url={window.location.href}><LinkedinIcon size={32} round={true}/></LinkedinShareButton>
        </div>
    </div>
    
}