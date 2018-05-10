import React from 'react';

class Otherside extends React.Component{
    render(){
        return(
            <div className='otherside'>
              <h3>Get high on categorized Show HN submissions.</h3>
              <p>We know the struggle. A lot of great stuff on Hacker News gets lost in the </p>
              <p>Get the weekly top Show HN picks in your inbox!</p>
              
              <input type='text'className='submit'></input>
              <br/>
              <input type='submit' value='Subscribe'className="button"/>
            
              <p>Proudly brought to you by <span>Finch.io</span></p>
            </div>
        )
    }
}
export default Otherside;