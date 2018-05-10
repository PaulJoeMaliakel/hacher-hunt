import React from 'react';

class Sidebar extends React.Component{
    render(){
        return(
            <div className='sidebar'>
                <h2 className='logo'>HH</h2>
                <p className='topic'>TOPICS</p>
                <div className='item'>
                <a className='line'><img className='development'></img><p>Development</p></a>
                <a className='line'><img className='system'></img><p>System</p></a>
                <a className='line'><div className='tools'></div><p>Tools</p></a>
                <a className='line'><div className='datascience'></div><p>Data science</p></a>
                <a className='line'><div className='blockchain'></div><p>Blockchain</p></a>
                <a className='line'><div className='mobile'></div><p>Mobile</p></a>
                <a className='line'><div className='awesomelist'></div><p>Awesome list</p></a>
                <a className='line'><div className='social'></div><p>Social</p></a>
                <a className='line'><div className='visual'></div><p>Visual</p></a>
                <a className='line'><div className='opensource'></div><p>Open source</p></a>
                <a className='line'><div className='alltopics'></div><p>All topics</p></a>
                </div>
                                
               

            </div>
        )
    }
}
export default Sidebar;