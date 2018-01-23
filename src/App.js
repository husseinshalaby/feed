import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Posts from './Containers/PostsContainers';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Form from './Components/PostForm';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Form />
          <Posts />
          <Footer />
      </div>
    );
  }
}

export default App;
















// <Link to={`/profile/edit`}></Link>
// <Route exact path={`/profile/edit`} exact component={UserEditForm} />


// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <h1 className="App-title">Welcome to React</h1>
// </header>
// <p className="App-intro">
//   To get started, edit <code>src/App.js</code> and save to reload.
// </p>
