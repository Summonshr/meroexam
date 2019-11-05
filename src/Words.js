import React, {useState} from 'react'
import Axios from 'axios';
import {Helmet} from 'react-helmet'
import {Link} from 'react-router-dom'

export default (props) => {
    
    const [content, setContent] = useState([])

    content.length === 0 && Axios.get('/sets/gre/english/word-meaning.json').then(response=>{
        setContent(response.data)
    });

    const[search, setSearch] = useState('')

    let words = content;

    if(search) {
        words = words.filter(text=>text.word.toLowerCase().indexOf(search.toLowerCase()) > -1)
    }

    if(content.length === 0 ) return '';

    return <div className="max-w-4xl w-full md:my-16 bg-gray-300 p-4 md:p-16 mx-auto markdown">
        <Helmet>
            <title>1500 GRE words | Meroexam.com</title>
            <meta name="description" content="Learn 10 words at each new refresh is the best around the web right now."/>
        </Helmet>
        <h2 className="pb-2 text-xs sm:text-md"><span className="hidden sm:inline">1500 GRE words </span><input value={search} onChange={event=>setSearch(event.target.value)} className="sm:w-auto p-2 text-sm bg-blue-100 text-blue-900 sm:float-right w-full sm:w-auto" placeholder="Search for word..."/></h2>
        <ul className="flex flex-wrap justify-between">
            {words.map(text=><li key={text.word} className="mb-2 w-1/2 sm:w-1/3 md:1/4 lg:w-1/5" title={text.meaning}><Link to={"/meanings/"+text.word}>{text.word}</Link></li>)}
        </ul>
    </div>
}