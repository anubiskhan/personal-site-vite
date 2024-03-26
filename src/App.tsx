import fav from '/fav2.png'
// import email from '/email-icon.png'
// import github from '/github-icon.png'
// import linkedin from '/linkedin-icon.png'
import './App.css'
// import { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import jamsList from './jamsList'


export default function App() {
  return (
    <div className="homeContainer">
      <div className="sideContainer">
        <div className="sideInnerTop">
          <h1>Kelly Schroeder</h1>
          <img src={fav} alt="" />
        </div>
        <div className="sideInnerBody">
          <p>
            Hello, I am a software developer living in the Pacific Northwest.
            I like to make new things, fix broken things, and optimize existing things.
            Big fan of automation, integrations, scalability, modular design, and maintainability.
          </p>
        <div className="iconGrid">
          <a className="iconGridItem" href="mailto:kelly@kellyrs.com" target="_blank" rel="noopener noreferrer">Email</a>
          <a className="iconGridItem" href="https://www.linkedin.com/in/kelly-schroeder/" target="_blank" rel="noopener noreferrer">Linkedin</a>
          <a className="iconGridItem" href="https://github.com/anubiskhan" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
        </div>
      </div>
      <div className="sideContainer">
        <div className="iconGrid">
          <div className="iconGridItem">
            <div className="colorBlockGreen">
          </div>
          </div>
          <div className="iconGridItem">
            <div className="colorBlockOrange">
          </div>
          </div>
          <div className="iconGridItem">
            <div className="colorBlockGray">
          </div>
          </div>
          <div className="iconGridItem">
            <div className="colorBlockBrown">
          </div>
          </div>
        </div>
        <div className="sideInnerBody">
          <p>
            For the last six I have been working extensively with Ruby on Rails, PostgreSQL, and AWS.
          </p>
          <p>
            I'm capable with Vue.js, Python, DevOps, CloudOps, project management, finance, economics, guitar, and carpentry.
          </p>
          <p>
            I'm <i>begrudingly</i> capable with Wordpress, CraftCMS, CSS, and HTML.
          </p>
          <p>
            <a href="https://github.com/anubiskhan/personal_site_vite" target="_blank" rel="noopener">This site</a> is built using React.js. Hosted in a secure S3 and distributed via Cloudfront.
          </p>
        </div>
      </div>
    </div>
  );
}
