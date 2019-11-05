import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import ets from './images/ets.png';
import a from './images/a.jpg'
import b from './images/b.png'
import c from './images/c.jpg'
import d from './images/d.jpg'
import e from './images/e.jpg'
import f from './images/f.jpg'
import g from './images/g.jpg'
import h from './images/h.jpg'
import i from './images/i.jpg'
import { faAirFreshener as free, faList as list, faInfoCircle as Info, faSmileWink as hint } from '@fortawesome/free-solid-svg-icons'

export default () => <>
        <div className="blend bg-left image bg-blue-900 w-full animated fadeIn">
          <div className="container mx-auto flex flex-wrap justify-between">
            <div className="p-4 lg:w-1/2 md:p-16 m-auto py-12 text-gray-100 md:max-w-3xl ">
                <h3 className="mb-4 text-4xl md:text-5xl leading-tight font-bold md:w-full">Don't stress, Do your <span className="text-orange-600">best</span><br/> Forget the rest</h3>
                <p className="mb-6 text-blue-200 font-semibold leading-normal text-lg">MeroExam.com is continuous evolving websites for practicing multiple choice questions.</p>
                <Link to={'/sets/GRE'} className=" mb-6 font-bold bg-green-200 rounded hover:bg-green-900 hover:text-green-100 text-green-700 px-4 py-2 text-xs sm:text-base">Practice Sets</Link>
                <Link to={'/videos'} className=" mb-6 font-bold bg-blue-200 rounded hover:bg-blue-900 hover:text-blue-100 text-blue-700 px-4 py-2 ml-4 text-xs sm:text-base">Videos</Link>
                <Link to={'/words'} className=" mb-6 font-bold bg-red-200 rounded hover:bg-red-900 hover:text-red-100 text-red-700 px-4 py-2 ml-4 text-xs sm:text-base">Words</Link>
            </div>
            <div className="lg:w-1/2 md:p-16 w-full">
              <img src={ets} height="496" width="364" className="w-full max-w-2xl mx-auto bg-gray-200 p-2" alt=""/>
            </div>
          </div>
          <div className="p-4 bg-blue-100 md:p-16 border-background">
            <h4 className="hidden sm:block text-4xl text-center mb-8 text-blue-800"><span className="border-b-2 leading-loose pb-2 border-gray-500 px-16">Our Commitment</span></h4>
            <ul className="container mx-auto md:flex md:flex-wrap md:justify-around font-semibold">
              <li className="relative w-full md:max-w-xs mx-auto bg-green-200 border-l-2 border-dotted p-4 py-8 my-4 text-green-600 border-green-700"><h3 className="inline font-semibold  pr-8  border-green-600 pb-2 leading-loose border-b ">Always Free <Icon className="absolute top-0 right-0 mr-8 mt-8" size="lg" icon={free}/></h3><p className="text-blue-900 mt-4">All subjects, all categories, all sets are collected from internet, facebook, pdf materials and provided here for free of costs. Website has no intention to collect any sort of payments from these contents.</p></li>
              <li className="relative w-full md:max-w-xs mx-auto md:text-left bg-purple-200 border-r-2 md:border-l-2 md:border-r-0 border-dotted p-4 py-8 my-4 text-purple-600 border-purple-700"><h3 className="text-right md:text-left font-semibold pb-2"><span className="leading-loose pb-2 border-b border-purple-700 pl-8 md:pr-8 md:pl-0">No Information Collection</span></h3><Icon className="absolute hidden md:inline md:top-0 md:right-0 md:mr-8 md:mt-8" size="lg" icon={Info}/><Icon className="absolute md:hidden inline top-0 left-0 ml-8 mt-8" size="lg" icon={Info}/><p className="text-blue-900 mt-4 w-full block">Website stores information on your browser only and are not shared anywhere else. Website does not collect any sort of information from the users.</p></li>
              <li className="relative w-full md:max-w-xs mx-auto bg-blue-200 border-l-2 border-dotted p-4 py-8 my-4 text-blue-600 border-blue-700"><h3  className="font-semibold pb-2"><span className="leading-loose pb-2 border-blue-600 pr-8 border-b">Suggested by students</span><Icon className="absolute top-0 right-0 mr-8 mt-8" size="lg" icon={hint}/></h3><p className="text-blue-900 mt-4 w-full block">Most of these questions has been added or corrected as per the suggestions provided by the students who have given exams in the website. Any new suggestions are highly appreciated and will be implemented if possible.</p></li>
            </ul>
          </div>
          <div className="bg-blue-900 text-blue-900">
            <ul className="flex flex-wrap">
              <li className="px-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 leading-loose bg-left blend image h-100 bg-teal-500 hover:bg-teal-900 text-teal-100 hover:text-teal-100 text-shadow flex flex-wrap items-center text-xl"><Link className="w-full h-full flex items-center" to="/blog/10-ways-to-raise-your-score-in-GRE">10 ways to raise your score in GRE</Link></li>
              <li className="px-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 leading-loose bg-center blend image-2 h-100 bg-gray-700 hover:bg-orange-900 text-orange-100 hover:text-orange-100 text-shadow flex flex-wrap items-center text-xl"><Link className="w-full h-full flex items-center" to="/blog/what-kind-of-questions-are-on-the-GRE-test">What kind of question are on the GRE test?</Link></li>
              <li className="px-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 leading-loose bg-center blend image-3 h-100 bg-blue-900 hover:bg-blue-700 text-blue-100 hover:text-blue-100 text-shadow flex flex-wrap items-center text-xl"><Link className="w-full h-full flex items-center" to="/blog/10-strategies-before-appearing-in-GRE">10 strategies before appearing in GRE</Link></li>
              <li className="px-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 leading-loose bg-left blend image-4 h-100 bg-green-700 hover:bg-green-900 text-green-100 hover:text-green-100 text-shadow flex flex-wrap items-center text-xl flex-grow"><Link className="w-full h-full flex items-center" to="/blog/six-tips-on-saving-time-in-GRE">Six tips on saving time in GRE</Link></li>
              <li className="px-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 leading-loose bg-center blend image-5 h-100 bg-red-800 hover:bg-red-900 text-red-100 hover:text-red-100 text-shadow flex flex-wrap items-center text-xl"><Link className="w-full h-full flex items-center" to="/blog/tips-for-essay-writing-in-gre">Tips on essay writing in GRE</Link></li>
              <li className="px-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 leading-loose h-100 bg-yellow-800 hover:bg-yellow-900 text-yellow-100 hover:text-yellow-100 text-shadow flex flex-wrap items-center text-xl image blend bg-left"><Link className="w-full h-full flex items-center" to="/page/10-words">Ten words at a time</Link></li>
              <li className="px-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 leading-loose bg-left blend coming-soon-image h-100 bg-indigo-800 hover:bg-indigo-900 text-indigo-100 hover:text-indigo-100 text-shadow flex flex-wrap items-center text-xl flex-grow"><Link className="w-full h-full flex items-center" to="/blog">More...</Link></li>
            </ul>
          </div>
          <div className=" bg-custom-green md:p-16">
            <div className="mx-auto container pt-8">
              <div className="flex flex-wrap p-4 lg:px-8">
                <div className="flex items-center justify-left ">
                  <Icon icon={list} size="3x" color="#56b2c4"/>
                </div>
                <div className="md:pl-8 max-w-2xl">
                  <h3 className="text-3xl font-bold mb-2 text-blue-200">Focusing on Words</h3>  
                  <p className="text-lg leading-normal text-blue-300">Choose any section and learn about most noted words in GRE. Learning these words will boosts your morale as it contains more than just meanings.</p>
                </div>
              </div>
              <div className="flex md:py-8">
                <ul className="flex flex-wrap list-reset w-full">
                  <li className="w-full md:w-1/2 lg:w-1/3  p-4 block">
                      <div className="">
                        <img src={a} className="rounded-t-lg h-64 w-full" alt=""/>
                      </div>
                      <div className="p-4 pb-6 bg-gray-200 w-full rounded-b">
                        <p className="text-gray-900 text-xl mb-6 h-16">Negation Words and Misleading Roots</p>
                        <Link to="/words/most-difficult-words-negation-words-misleading-roots-gre" className="p-2 rounded bg-orange-500 hover:bg-orange-900 hover:text-orange-200  text-orange-900 font-bold">Learn More</Link>  
                      </div>
                  </li>
                  <li className="w-full md:w-1/2 lg:w-1/3  p-4 block">
                      <div className="">
                        <img src={b} className="rounded-t-lg h-64 w-full" alt=""/>
                      </div>
                      <div className="p-4 pb-6 bg-gray-200 w-full rounded-b">
                        <p className="text-gray-900 text-xl mb-6 h-16">Common words that student always gets wrong</p>
                        <Link to="/words/common-words-that-students-always-gets-wrong" className="p-2 rounded bg-orange-500 hover:bg-orange-900 hover:text-orange-200  text-orange-900 font-bold">Learn More</Link>  
                      </div>
                  </li>
                  <li className="w-full md:w-1/2 lg:w-1/3  p-4 block">
                      <div className="">
                        <img src={g} className="rounded-t-lg h-64 w-full" alt=""/>
                      </div>
                      <div className="p-4 pb-6 bg-gray-200 w-full rounded-b">
                        <p className="text-gray-900 text-xl mb-6 h-16">Commonly confused Words in GRE</p>
                        <Link to="/words/commonly-confused-words-in-GRE" className="p-2 rounded bg-orange-500 hover:bg-orange-900 hover:text-orange-200  text-orange-900 font-bold">Learn More</Link>  
                      </div>
                  </li>
                  <li className="w-full md:w-1/2 lg:w-1/3  p-4 block">
                      <div className="">
                        <img src={e} className="rounded-t-lg h-64 w-full" alt=""/>
                      </div>
                      <div className="p-4 pb-6 bg-gray-200 w-full rounded-b">
                        <p className="text-gray-900 text-xl mb-6 h-16">Halloween Vocabulary</p>
                        <Link to="/words/halloween-vocabulary" className="p-2 rounded bg-orange-500 hover:bg-orange-900 hover:text-orange-200  text-orange-900 font-bold">Learn More</Link>  
                      </div>
                  </li>
                  <li className="w-full md:w-1/2 lg:w-1/3  p-4 block">
                      <div className="">
                        <img src={f} className="rounded-t-lg h-64 w-full" alt=""/>
                      </div>
                      <div className="p-4 pb-6 bg-gray-200 w-full rounded-b">
                        <p className="text-gray-900 text-xl mb-6 h-16">Tricky words with multiple meanings</p>
                        <Link to="/words/tricky-words-with-multiple-meanings" className="p-2 rounded bg-orange-500 hover:bg-orange-900 hover:text-orange-200  text-orange-900 font-bold">Learn More</Link>  
                      </div>
                  </li>
                  <li className="w-full md:w-1/2 lg:w-1/3  p-4 block">
                      <div className="">
                        <img src={d} className="rounded-t-lg h-64 w-full" alt=""/>
                      </div>
                      <div className="p-4 pb-6 bg-gray-200 w-full rounded-b">
                        <p className="text-gray-900 text-xl mb-6 h-16">F-words in GRE</p>
                        <Link to="/words/f-words-in-GRE" className="p-2 rounded bg-orange-500 hover:bg-orange-900 hover:text-orange-200  text-orange-900 font-bold">Learn More</Link>  
                      </div>
                  </li>
                  <li className="w-full md:w-1/2 lg:w-1/3  p-4 block">
                      <div className="">
                        <img src={c} className="rounded-t-lg h-64 w-full" alt=""/>
                      </div>
                      <div className="p-4 pb-6 bg-gray-200 w-full rounded-b">
                        <p className="text-gray-900 text-xl mb-6 h-16">Difficult words that GRE loves to Use</p>
                        <Link to="/words/difficult-words-that-gre-loves-to-use" className="p-2 rounded bg-orange-500 hover:bg-orange-900 hover:text-orange-200  text-orange-900 font-bold">Learn More</Link>  
                      </div>
                  </li>
                  <li className="w-full md:w-1/2 lg:w-1/3  p-4 block">
                      <div className="">
                        <img src={h} className="rounded-t-lg h-64 w-full" alt=""/>
                      </div>
                      <div className="p-4 pb-6 bg-gray-200 w-full rounded-b">
                        <p className="text-gray-900 text-xl mb-6 h-16">Vicious pairs of V</p>
                        <Link to="/words/vicious-pairs-of-v" className="p-2 rounded bg-orange-500 hover:bg-orange-900 hover:text-orange-200  text-orange-900 font-bold">Learn More</Link>  
                      </div>
                  </li>
                  <li className="w-full md:w-1/2 lg:w-1/3  p-4 block">
                      <div className="">
                        <img src={i} className="rounded-t-lg h-64 w-full" alt=""/>
                      </div>
                      <div className="p-4 pb-6 bg-gray-200 w-full rounded-b">
                        <p className="text-gray-900 text-xl mb-6 h-16">Talkative Words</p>
                        <Link to="/words/talkative-words" className="p-2 rounded bg-orange-500 hover:bg-orange-900 hover:text-orange-200  text-orange-900 font-bold">Learn More</Link>  
                      </div>
                  </li>
                </ul>
              </div>
            </div>    
          </div> 
        </div>
      </>