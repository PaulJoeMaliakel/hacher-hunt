import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import Otherside from './components/otherside';
import Newsitem from './components/newsitem';

class App extends Component {

  state = {
    hits:[]
  }
  
  componentWillMount=async()=> {
   
      const api_call = await fetch("https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=6091f90c94704d51be71db772727c24c");
    const data = await api_call.json();
    console.log(data);
    this.setState({hits:data.articles})
    console.log(this.state.hits);
  }





  render() {
    return (
      <div className='full'>
      <div className='app'>
        <Sidebar className='sidebar'/>
        <Newsitem hits={this.state.hits} className='newsitem'/>
        <Otherside getInfo={this.getInfo} className='otherside'/>

        
      </div>
      </div>
    );
  }
}

export default App;
