import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './components/Card.jsx';
import {getPosts} from 'schemwrap'
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      posts: []
    }
  }

  async componentDidMount() {
    const response = await getPosts();
    await this.setState({ posts: response, isLoading: false });
  }

  render() {
    if (this.state.isLoading) {
      return <p>Loading...</p>
    }else{
      return (
        <div className="App">
          <div className="row row-cols-2">
            {this.state.posts.data.map(post => {
              return <Card key={post.id} title={post.title} image={post.images} /> 
            })}
          </div>
        </div>
      );
    }
      
  }
    
}


  // ========================================
  
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('root')
  );
  