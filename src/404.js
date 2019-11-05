import React from 'react'
import ReactGA from 'react-ga'
import IMG404 from './images/404.jpg'

export default (props) => {
  ReactGA.initialize('UA-67144673-1');

  ReactGA.event({
    category: 'Accessed',
    action: 'Not Found',
    label: window.location.href
  });

  return <div className="max-w-3xl w-full md:my-16  p-4 md:p-16 mx-auto markdown">
    <img alt="404 page not found" src={IMG404} />
  </div>
}