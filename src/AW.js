import React from 'react'
import IssueImg from './images/issue.png'
import ArgumentImg from './images/arguments.png'
import {Link} from 'react-router-dom'
import {Helmet} from 'react-helmet'

export default (props) => {

    return <div className="animated fadeIn max-w-3xl md:my-16 mx-auto flex flex-wrap justify-around w-full">
        <Helmet>
            <title>
                Analytical Wrting - GRE | Meroexam.com
            </title>
            <meta name="description" content={'Following section offers insight on analytical writing section of GRE'} />
        </Helmet>
        <div className="w-48 h-24 bg-gray-200 mb-4"><Link className="block flex items-center w-full h-full" to="/analytical-writing/issues" ><img src={IssueImg} alt="Issue Writing"/></Link></div>
        <div className="w-48 h-24 bg-teal-900 mb-4"><Link className="block flex items-center w-full h-full" to="/analytical-writing/arguments" ><img src={ArgumentImg} alt="Argument Writing"/></Link></div>
    </div>
}