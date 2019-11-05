import React, { useState } from 'react'
import Axios from 'axios';
import 'katex/dist/katex.min.css'
import { Helmet} from 'react-helmet'
import { startsWith} from 'lodash'
import { Link} from 'react-router-dom'
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, FacebookIcon,  TwitterIcon, LinkedinIcon} from 'react-share'

export default (props) => {
    let word = props.match.params.word
    
    const [content, setContent] = useState('')

    const [Words, setWords] = useState([])

    content === '' && Axios.get('/word-meanings/'+word+'.html').then(response=>{
        if(response.data.indexOf('<!doctype html>') > -1) {
            window.location.href='https://www.merriam-webster.com/dictionary/'+word
            return;
        }

        setContent(response.data)

        Words.length === 0 && Axios.get('/sets/gre/english/word-meaning.json').then(response=>{
            let resp = response.data.filter(w=>w.word !== word && startsWith(w.word, word.substr(0,3)))
            if(resp.length < 3) {
                resp = response.data.filter(w=>w.word !== word && startsWith(w.word, word.substr(0,2)))
            }
            setWords(resp)
        });
    }).catch(err=>{
        if([404,304].includes(err.response.status))
        window.location.href='https://www.merriam-webster.com/dictionary/'+word
    });

    if(!content) return '';

    return <div className="animated fadeIn max-w-4xl w-full md:my-16 bg-gray-300 mx-auto markdown">
        <Helmet>
            <title>{word} | Meroexam.com</title>
            <meta name="description" content={content.replace(/<[^>]*>?/gm, '')}/>
        </Helmet>
        <div className="h-32 md:h-64 w-full flex items-center justify-center bg-word text-4xl text-gray-100"><span className="max-w-3xl text-center mx-auto">{word}</span></div>
        <div className="p-4 md:p-16">
            <h2 className="text-blue-900 border-gray-500">{word}</h2>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
            {Words.length > 0 && <div className="pt-8">
                <h3 className="border-b border-gray-400 text-gray-700">Similar Words</h3>
                <ul className="flex flex-wrap">
                    {Words.map(w=><li key={w.word} className="w-full sm:w-1/2 md:w-1/3"><a href={"/meanings/" + w.word}>{w.word}</a></li>)}
                </ul>
            </div>}
            <Link className="text-gray-800 border-b border-blue-700 " to="/words">More Words</Link>
            <div className="flex flex-wrap items-center justify-left mt-8">
                <span className="inline mr-2">Share to</span>
                <FacebookShareButton quote={word} className="inline mr-2" url={window.location.href}><FacebookIcon size={32} round={true}/></FacebookShareButton>
                <TwitterShareButton title={word} className="inline mr-2" url={window.location.href}><TwitterIcon size={32} round={true}/></TwitterShareButton>
                <LinkedinShareButton className="inline mr-2" url={window.location.href}><LinkedinIcon size={32} round={true}/></LinkedinShareButton>
            </div>
        </div>
    </div>
}