//import React from 'react';
import React,{Component} from 'react';
import './App.css';
import json from './db.json';
class Page extends React.Component{
    constructor (){
        super();
        this.state={
               
               demo:'Berymo App',
               new:json,
               keyword:'user text'
        }
    }
    handleChange=(event)=>{
        console.log(event.target.value);
        this.setState({keyword:event.target.value?event.target.value:'user text'})
    }
    render()
    {
        
        return(
            <React.Fragment>
                <header>
                <div className='logo'>
                 {this.state.demo}
               </div>
               <center>
                   <input onChange={this.handleChange}/>
                   <div style={{color:'white'}}>{this.state.keyword}</div>
                   </center>
               </header>
            </React.Fragment>
        );
    }
}
export default Page;
