import React, { Component } from 'react';
import './style.css';

export default class Form extends Component {

    render(){
        const { posts, loading} = this.props;
        return (
            <div>
                 <form className = 'add-post' onSubmit = {this.add}>
                       <img src = 'http://lorempixel.com/50/50' />
                       <input className = 'form-input' type = "text"  placeholder = "Start Posting Something ...." />
                       <button className = 'form-input' type ='submit'><i class="fa fa-paper-plane fa-2x" aria-hidden="true"></i> </button>
                       <div className = 'add-pic'>
                          <button>
                            <i class="fa fa-file-image-o" aria-hidden="true"></i>
                            <span> Photos</span>
                          </button>
                          <button>
                            <i class="fa fa-camera" aria-hidden="true"></i>
                            <span> Camera</span>
                          </button>
                       </div>
                  </form>
            </div>
        )
    }
}
