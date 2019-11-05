import React, {useState} from 'react'
import Axios from 'axios';
import Markdown from 'react-markdown';
import 'katex/dist/katex.min.css'
import {Helmet} from 'react-helmet'
import { random } from 'lodash';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, FacebookIcon,  TwitterIcon, LinkedinIcon} from 'react-share';
export default (props) => {

    const [content, setContent] = useState('')

    content === '' && Axios.get(props.match.url+'.md').then(response=>{
        setContent(response.data)
    });

    let link = ''

    if(props.match.url.indexOf('issue') > -1) {
        link ="/issues/issue-"+ random(1,124)
    }

    if(props.match.url.indexOf('argument') > -1) {
        link ="/arguments/argument-"+ random(1,124)
    }

    if(!content) return '';

    let visited = JSON.parse(localStorage.getItem('visited')||'[]')
    visited.push(window.location.href)
    window.localStorage && localStorage.setItem('visited',JSON.stringify(visited))

    let title = content.replace(/-/g,'').replace(/Argument [1-9][0-9]*[0-9]*/g,'').replace(/Issue [1-9][0-9]*[0-9]*/g,'').replace(/\*/g,'').substr(0, 130).trim()

    window.scrollTo(0, 112)

    return <div className="animated w-full relative fadeIn max-w-3xl md:my-16 bg-gray-300 p-4 md:p-16 mx-auto markdown">
        <a href={link} className="hover:bg-blue-800 hover:text-blue-200 top-0 right-0 mt-4 mr-4 md:mr-16 md:mt-16 bg-blue-300 text-blue-800 rounded px-2 py-1 absolute font-bold">Another set</a>
        <Helmet>
            <title>{title} | 3 minutes | Meroexam.com</title>
            <meta name="description" content={content.replace(/-/g,'').replace(/Issue [1-9][0-9]*[0-9]*/g,'').replace(/\*/g,'').replace(/\n/g,'').substr(0,160)}/>
        </Helmet>
        <Markdown>{content}</Markdown>
        <a href={link} className="italic text-blue-600 cursor-pointer">View another set</a>
        <div className="flex flex-wrap items-center justify-left mt-4">
            <span className="inline mr-2">Share to</span>
            <FacebookShareButton quote={title + '...'} className="inline mr-2" url={window.location.href}><FacebookIcon size={32} round={true}/></FacebookShareButton>
            <TwitterShareButton title={title + '...'} className="inline mr-2" url={window.location.href}><TwitterIcon size={32} round={true}/></TwitterShareButton>
            <LinkedinShareButton className="inline mr-2" url={window.location.href}><LinkedinIcon size={32} round={true}/></LinkedinShareButton>
        </div>
    </div>

}