import React, {useState} from 'react'
import Axios from 'axios';
import Markdown from 'react-markdown';
import 'katex/dist/katex.min.css'
import { Helmet } from 'react-helmet'
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, FacebookIcon,  TwitterIcon, LinkedinIcon} from 'react-share'

export default (props) => {

    const [content, setContent] = useState('')

    content === '' && Axios.get(props.match.url+'.md').then(response=>{
        setContent(response.data)
    });

    if(!content) return '';

    let title = props.match.params.title.split('-').join(' ').toUpperCase();
    
    window.scrollTo(0, 112)

    return <div className="animated fadeIn max-w-5xl w-full bg-gray-300 mx-auto markdown lg:my-16">
        <Helmet>
            <title>{title} | Meroexam.com</title>
            <meta name="description" content={content.substring(0, 200).split('#').join('').split('\n').join(' ')}/>
        </Helmet>
        <div className="h-64 w-full flex items-center justify-center bg-blog text-4xl text-gray-100"><span className="max-w-3xl text-center mx-auto">{title}</span></div>
        <div className="p-4 md:p-16 max-w-3xl text-xl mx-auto"> 
            <Markdown>{content}</Markdown>
            <div className="flex flex-wrap items-center justify-left">
                <span className="inline mr-2">Share to</span>
                <FacebookShareButton quote={title} className="inline mr-2" url={window.location.href}><FacebookIcon size={32} round={true}/></FacebookShareButton>
                <TwitterShareButton title={title} className="inline mr-2" url={window.location.href}><TwitterIcon size={32} round={true}/></TwitterShareButton>
                <LinkedinShareButton className="inline mr-2" url={window.location.href}><LinkedinIcon size={32} round={true}/></LinkedinShareButton>
            </div>
        </div>
        
    </div>
    
}