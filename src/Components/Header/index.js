import React, { Component } from 'react';
import './style.css';

export default class Notification extends Component {


  render(){
      return (
          <header className = 'header clearfix'>
            <h1 className = 'start'>All Feed <i class="fa fa-caret-down" aria-hidden="true"></i></h1>
            <div className = 'end'>
                <p><i className="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i></p>
            </div>
          </header>
      )
  }
}
