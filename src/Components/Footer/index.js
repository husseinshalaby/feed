import React, { Component } from 'react';
import './style.css';

export default class Notification extends Component {


  render(){
      return (
          <footer className = ' footer'>
            <ul>
              <li>
                <p><i className="fa fa-home fa-2x" aria-hidden="true"></i></p>
                <span>Home</span>
              </li>
              <li>
                <p><i className="fa fa-file-text fa-2x " aria-hidden="true"></i></p>
                <span>Feed</span>
              </li>
              <li>
                <p><i className="fa fa-newspaper-o fa-2x" aria-hidden="true"></i></p>
                <span>Messages</span>
              </li>
              <li>
                <p><i className="fa fa-bell fa-2x" aria-hidden="true"></i></p>
                <span>Notifications</span>
              </li>
              <li>
                <p><i className="fa fa-bars fa-2x" aria-hidden="true"></i></p>
                <span>Menu</span>
              </li>
            </ul>
          </footer>
      )
  }
}
