import fav from '/fav2.png'
import './App.css'
import { Link } from "react-router-dom";
import jamsList from './jamsList'
import { useState } from 'react';
import myJson from './json/jams.json';


export default function App() {
  return (
    <div className="App">
      <div className="homeContainer">
        <div className="aside">
          <div className="asideInner">
            <div className="nameWithLogo">
              <h1>Kelly Schroeder</h1>
              <img src={fav} alt="" />
            </div>
            <p>
              Hello, I'm a software developer living in the Pacific Northwest.
              I like to make new things, fix broken things, and optimize existing things.
              Big fan of automation, integrations, scalability, modular design, and maintainability.
            </p>
            <div>
              <a href="mailto:kelly@kellyrs.com" target="_blank" rel="noopener noreferrer">Email</a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/kelly-schroeder/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div>
              <a href="https://github.com/anubiskhan" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
          </div>
        </div>
        <div className="body">
          <div className="colorBlockWrapper">
            <div className="colorBlockGreen">

            </div>
            <div className="colorBlockOrange">

            </div>
            <div className="colorBlockGray">

            </div>
            <div className="colorBlockBrown">

            </div>
          </div>
          <div className="bodyInner">
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
              <a href="https://github.com/anubiskhan/personal_site" target="_blank" rel="noopener">This site</a> is built using Vue.js. Hosted in a secure S3 and distributed via Cloudfront.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
