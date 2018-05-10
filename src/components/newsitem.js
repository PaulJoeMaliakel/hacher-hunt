import React from 'react';

class Newsitem extends React.Component{
    render(){
        return(
            <div className='newsitem'>
                <input type="text" placeholder="Search..." className='search' />
              <div className="head">
                  <p>A FEW SECONDS AGO</p>
                  <a>POPULAR</a>
              </div>
              {this.props.hits.map((hit,index)=>{
                  
                  return (
                      
                     <div className='news'>
                     <a href={hit.url} className='urltitle'> <h3 className='title'>{hit.title}</h3></a>
                      <p className='desc'>{hit.description}</p>
                      <a href={hit.url} className='url'>{hit.url}</a>
                      
                      </div>
                        
                  );
              })}

            </div>
        )
    }
}
export default Newsitem;