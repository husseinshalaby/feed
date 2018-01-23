import React, { Component } from 'react';
import './style.css'
export default class Post extends Component {
    render(){

        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth()+1; //January is 0!
        let yyyy = today.getFullYear();
        if(dd<10) {
            dd = '0'+dd
        }

        if(mm<10) {
            mm = '0'+mm
        }

        today = mm + '/' + dd + '/' + yyyy;

        return (
          <div className = 'post'>
            <header className = 'clearfix'>
                <p className = 'post-image start'> <img src = 'http://lorempixel.com/60/60' /> </p>
                <div className = 'post-title start'>
                  <p className = ''>{this.props.post.title}</p>
                  <span className = 'post-date'> {today}</span>
                </div>
                <div className = 'dots end'>
                  <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                </div>
            </header>
            <div className = 'clearfix'>
                <p className = 'post-body'>{this.props.post.body}</p>
                <p className = 'post-reactions start'>
                  <ul >
                    <li className = 'reaction'><span>4 </span><i className="fa fa-thumbs-up" aria-hidden="true"></i></li>
                    <li className = 'reaction'><span>2 </span><i className="fa fa-heart" aria-hidden="true"></i></li>
                    <li className = 'add-reaction'><button>+</button></li>
                  </ul>
                </p>
            </div>
            <div className = 'post-comments'>
              <form>
                <input type = 'text' />
                <button><i className="fa fa-reply" aria-hidden="true"></i> Reply</button>
              </form>
            </div>
          </div>
        )
    }
}
