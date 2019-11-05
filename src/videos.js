import React from 'react'
import {Link} from 'react-router-dom'
import YouTube from 'react-youtube'
import {GRE as VideoRoutes} from './video-routes'
import 'katex/dist/katex.min.css'
import { kebabCase as slug, startCase, groupBy, find, filter } from 'lodash'
import { Helmet } from 'react-helmet'
import ReactGA from 'react-ga'
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, FacebookIcon,  TwitterIcon, LinkedinIcon} from 'react-share'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle as tick } from '@fortawesome/free-solid-svg-icons'

export default (props) => {

    let routes = VideoRoutes

    let videoTitle = props.match.params.title

    let videoId = props.match.params.videoId

    let title = startCase(videoTitle);
    
    let keys = Object.keys(routes)


    if(props.match.params.set) {
        routes = routes[props.match.params.set].routes
    }

    let url = Object.values(props.match.params)
    url.pop()


    let visited = JSON.parse(localStorage.getItem('visited')||'[]')
    let similar = [];
    if(videoId) {
        similar = filter(routes, {group: find(routes, {videoId: videoId}).group}).filter(v=>v.videoId !== videoId )
        url.pop()
        window.scrollTo(0, 115)
    }

    ReactGA.initialize('UA-67144673-1');

    return <div className={"w-full animated fadeIn markdown md:my-16"}>
        <Helmet>
            <title>{title || 'Best GRE videos around the internet'} | Meroexam.com</title>
            <meta name="description" content={'Best videos collected from around the internet that are best suited for students who are appearing in GRE.'}/>
        </Helmet>
        {!videoId && <div className={"flex flex-wrap md:my-16 bg-gray-300  mx-auto p-4 lg:p-16 " + (!props.match.params.set ? 'justify-around' : 'justify-between') + (videoId ? ' max-w-3xl' : ' max-w-6xl')}>
            <div className="w-full text-center border-b uppercase mb-4">Videos</div>
            {!props.match.params.set && Object.values(routes).map((v,i)=><Link to={"/videos/"+(props.match.params.set || keys[i])} className="hover:bg-blue-100 bg-blue-200 cursor-pointer shadow p-4 w-full md:w-64 mb-2"><img alt={props.match.params.set || keys[i]} className="mx-auto" src={"/images/" + (props.match.params.set || keys[i]) + '.png'}/></Link>)}
            {props.match.params.set && Object.values(groupBy(Object.values(routes), 'group')).map((routes,i) => {
                return <div className="border-b mb-4 border-blue-300">
                    <h3 className="pb-2">{routes[0].group}</h3>
                    <div className="w-full flex flex-wrap pb-2">
                        {routes.map((v)=><Link to={"/videos/"+props.match.params.set+'/' + slug(v.title) + '/' + v.videoId} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 mb-4 cursor-pointer relative">
                        {visited.includes(window.location.origin + "/videos/"+props.match.params.set+'/' + slug(v.title) + '/' + v.videoId) && <span className="absolute top-0 right-0 mr-2 mt-1">
                            <FontAwesomeIcon className="bg-green-200 rounded-full" color="green" icon={tick}/>
                        </span>}
                            <div className="text-base h-full shadow hover:bg-gray-100 p-3 bg-gray-200"><img className="mb-2 w-full" alt={v.title} src={"http://i3.ytimg.com/vi/"+v.videoId+"/hqdefault.jpg"}/><span className="mt-2">{v.title.split(v.group + ' - ').join('')}</span>
                        </div>
                    </Link>)}
                    </div>
                </div>   
            })}
        </div>} 
        {videoId && <div className={"md:mb-2 w-full bg-gray-300 mx-auto " + (videoId ? ' max-w-4xl' : ' max-w-6xl')}>
            <div className="h-32 w-full flex items-center justify-center bg-word text-4xl text-gray-100"><span className="max-w-3xl text-center mx-auto">{title}</span></div>
            <div className="p-4 md:p-16 md:pt-8">
                <h2 className="text-gray-700">{title}</h2>
                <YouTube
                videoId={videoId}
                id={videoId}
                opts={{  }}
                onReady={()=>{
                    ReactGA.event({
                        category: 'Video',
                        action: startCase(videoTitle)
                    });
                }}
                onPlay={()=>{
                    ReactGA.event({
                        category: startCase(videoTitle),
                        action: 'played',
                    });
                    setTimeout(()=>{
                        if(window.location.href.includes(videoId)) {
                            visited.push(window.location.href)
                            window.localStorage && localStorage.setItem('visited',JSON.stringify(visited))
                        }
                    }, 30*1*1000)
                }}
                onPause={()=>{
                    ReactGA.event({
                        category: startCase(videoTitle),
                        action: 'paused',
                    });
                }}
                onEnd={()=>{
                    ReactGA.event({
                        category: startCase(videoTitle),
                        action: 'finished',
                    });
                }}
                onError={()=>{

                }}
                onStateChange={()=>{

                }}
                onPlaybackRateChange={()=>{
                    ReactGA.event({
                        category: startCase(videoTitle),
                        action: 'fater',
                    });
                }}
                onPlaybackQualityChange={()=>{
                    ReactGA.event({
                        category: startCase(videoTitle),
                        action: 'changed quality',
                    });
                }}
                />
                {similar.length > 0 && <div className="w-full flex flex-wrap py-4">
                    <h3 className="w-full text-gray-700">Similar Videos</h3>   
                    {similar.map((v)=><Link to={"/videos/"+props.match.params.set+'/' + slug(v.title) + '/' + v.videoId} className="mb-4 cursor-pointer relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1">
                        {visited.includes(window.location.origin + "/videos/"+props.match.params.set+'/' + slug(v.title) + '/' + v.videoId) && <span className="absolute top-0 right-0 mr-2 mt-1">
                            <FontAwesomeIcon className="bg-green-200 rounded-full" color="green" icon={tick}/>
                        </span>}
                        <div className="text-base h-full shadow hover:bg-gray-100 p-3 bg-gray-200"><img alt={v.title} className="mb-2 w-full" src={"http://i3.ytimg.com/vi/"+v.videoId+"/hqdefault.jpg"}/><span className="mt-2">{v.title.split(v.group + ' - ').join('')}</span>
                        </div>
                    </Link>)}
                </div>}
                {props.match.params.set && <Link className="border-b border-blue-500 leading-loose" to={'/videos/'+ url.join('/')}>See more videos</Link>}
                <div className="flex flex-wrap items-center justify-left mt-4">
                    <span className="inline mr-2">Share to</span>
                    <FacebookShareButton quote={title} className="inline mr-2" url={window.location.href}><FacebookIcon size={32} round={true}/></FacebookShareButton>
                    <TwitterShareButton title={title} className="inline mr-2" url={window.location.href}><TwitterIcon size={32} round={true}/></TwitterShareButton>
                    <LinkedinShareButton className="inline mr-2" url={window.location.href}><LinkedinIcon size={32} round={true}/></LinkedinShareButton>
                </div>
            </div>
        </div>}
    </div>
    
}