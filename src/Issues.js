import React, {useState} from 'react'
import Axios from 'axios';
import Markdown from 'react-markdown';
import 'katex/dist/katex.min.css'
import {Helmet} from 'react-helmet'

export default (props) => {
    const [content, setContent] = useState('')

    content === '' && Axios.get(props.match.url+'.md').then(response=>{
        setContent(response.data)
    });
    
    if(!content) return '';

    return <div className="animated fadeIn max-w-3xl md:my-16 bg-gray-300 p-4 md:p-16 mx-auto markdown">
        <Helmet>
            <title>{props.match.params.title.split('-').join(' ').toUpperCase()} | Meroexam.com</title>
            <meta name="description" content={content.substring(0, 200).split('#').join('').split('\n').join(' ')}/>
        </Helmet>
        <Markdown>{content}</Markdown>
    </div>
}