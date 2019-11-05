import './main.css';
import AW from './AW'
import Word from './Word'
import Post from './post'
import Blog from './blog'
import List from './List';
import Exam from './Exam';
import Home from './home';
import React from 'react';
import Essay from './Essay'
import Words from './Words'
import NotMatch from './404'
import AWList from './AWList'
import MathBlog from './math'
import Random from './Random'
import Menu from './menu'
import Videos from './videos'
import Universities from './universities'
import ReactGA from 'react-ga';
import {Helmet} from "react-helmet";
import ReactTooltip from 'react-tooltip'
import TenWords from './10-words-at-a-time'
import { NotificationContainer } from 'react-notifications';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

function App() {

  ReactGA.initialize('UA-67144673-1');
  ReactGA.pageview('/');
  ReactGA.event({
    category: 'Visitor',
    action: 'Accessed an site'
  });

  return <Router>
      <Helmet>
        <meta name="description" content="MeroExam.com is the simplest website intended for practicing set wise multiple choice questions from various exams like GRE, GMAT, Driving License etc"/>
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://meroexam.com/images/logo.png" />
        <meta property="og:url" content="https://meroexam.com/" />
        <meta name="description" content="Multiple choice questions practice sets for students appearing at GRE, especially from Nepal"/>
        <meta name="keywords" content="GRE, GRE Exam from Nepal, GRE preparation nepal"/>
        <meta property="og:site_name" content="MeroExam.com" />
        <title>MeroExam.com | Upgrade your score in GRE.</title>
      </Helmet>
      <div className="site text-gray-800 bg-gray-100 min-h-screen flex flex-col justify-between relative">
      <Menu/>
      <main className="flex-grow bg-gray-800 blend bg-left image flex items-center animated fadeIn">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sets/:category/" exact component={List} />
          <Route path="/sets/:category/:subcategory" exact component={List} />
          <Route path="/sets/:category/:subcategory/:set" exact component={Exam} />
          <Route path="/blog/" exact component={Blog} />
          <Route path="/blog/:title" exact component={Post} />
          <Route path="/page/10-words" exact component={TenWords}/>
          <Route path="/words/:title" exact component={Post}/>
          <Route path="/meanings/:word" exact component={Word}/>
          <Route path="/words" exact component={Words}/>
          <Route path="/math/:title" exact component={MathBlog}/>
          <Route path="/issues/:title" exact component={Essay}/>
          <Route path="/arguments/:title" exact component={Essay}/>
          <Route path="/random/:title" exact component={Random}/>
          <Route path="/analytical-writing/:title" exact component={AWList}/>
          <Route path="/analytical-writing" exact component={AW}/>
          <Route path="/videos" exact component={Videos}/>
          <Route path="/Universities" exact component={Universities}/>
          <Route path="/Universities/:scores" exact component={Universities}/>
          <Route path="/videos/:set/" exact component={Videos}/>
          <Route path="/videos/:set/:title/:videoId" exact component={Videos}/>
          <Route component={NotMatch}/>
        </Switch>
      </main>
      <div className="bg-blue-100 p-8 text-gray-800">
        <h3 className="w-full text-center font-bold">Keep in Touch</h3>
        <a href="mailto:support@meroexam.com" className="w-full block cursor-pointer text-center text-purple-800 font-bold">support@meroexam.com</a>
      </div>
    </div>
    <NotificationContainer/>
    <ReactTooltip />
  </Router>
}

export default App;