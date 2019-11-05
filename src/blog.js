import React, {useState} from 'react'
import 'katex/dist/katex.min.css'
import {Helmet} from 'react-helmet'
import routes from './blog-routes'
import {uniq} from 'lodash'
import {Link} from 'react-router-dom'

let groups = ['All']

routes.map(r=>(groups = groups.concat(r.tags)))

groups = uniq(groups)


export default (props) => {

    let [filter, setFilter] = useState('All')

    return <div className="animated fadeIn max-w-3xl w-full md:my-16 bg-gray-300 p-4 md:p-16 mx-auto">
        <Helmet>
            <title>Blogs | Meroexam.com</title>
            <meta name="description" content={"Various contents from blogs of meroexam.com helps students to get to point exactly"}/>
        </Helmet>
        <div className="w-full mb-8">
            {groups.map((g,i)=><span key={i} onClick={()=>setFilter(g)} className={"px-4 py-2 mr-4 cursor-pointer " + (g===filter ? 'bg-blue-700 text-blue-100' : 'bg-blue-200')}>{g}</span>)}
        </div>
        <ul>
            {routes.filter(r=>filter === 'All' || r.tags.includes(filter)).map(page=><li key={page.url} className="border-b border-dashed border-gray-600 mb-8 pb-2 text-blue-800"><Link to={page.url}>{page.title}</Link><span className="text-xs text-gray-600"> - {page.time}</span></li>)}
        </ul>
    </div>
}