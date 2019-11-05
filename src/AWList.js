import React from 'react'
import {Link} from 'react-router-dom'
import {range} from 'lodash'
import {Helmet} from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle as tick } from '@fortawesome/free-solid-svg-icons'

export default (props) => {
    const list = {
        issues: '/issues/issue-',
        arguments: '/arguments/argument-'
    }

    const title = {
        issues: 'Issue',
        arguments: 'Argument'
    }

    let visited = JSON.parse(localStorage.getItem('visited')||'[]')

    return <div className="animated p-4 fadeIn max-w-3xl md:my-16 mx-auto flex flex-wrap justify-center w-full">
        <Helmet>
            <title>
                Analytical Wrting - {title[props.match.params.title]}s | Meroexam.com
            </title>
            <meta name="description" content={'Students practice from here for their best of their examination in GRE exams'} />
        </Helmet>
        {range(1,124).map(e=><div key={e} className={"cursor-pointer w-32 h-16 m-2 flex items-center justify-center relative" + (visited.includes(window.location.origin + list[props.match.params.title]+e) ? ' bg-green-700 hover:bg-green-400 hover:text-green-800 text-green-200' : ' bg-blue-200 hover:bg-blue-700 hover:text-blue-100 text-blue-900')}>
            {visited.includes(window.location.origin + list[props.match.params.title]+e) && <span className="absolute right-0 top-0 pr-1 pt-1">
                <FontAwesomeIcon color="white" icon={tick}/>
            </span>}
            <Link className="block w-full h-full flex items-center justify-center p-2" to={list[props.match.params.title]+e}>{title[props.match.params.title]} {e}</Link>
        </div>)}
    </div>
}