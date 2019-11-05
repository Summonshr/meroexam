import React, {useState} from 'react'
import Axios from 'axios';
import {random} from 'lodash'
import 'katex/dist/katex.min.css'
import {Redirect} from 'react-router-dom'

export default (props) => {
    const [content, setContent] = useState('')

    const list = {
        arguments: '/arguments/argument-',
        issues: '/issues/issue-'
    }

    content === '' && Axios.get(list[props.match.params.title] + '-'+ random(1,124) + '.md').then(response=>{
        setContent(response.data)
    });

    return <Redirect to={list[props.match.params.title] + random(1,124)}/>
}