import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import json from './db.json';
import Displaydata from './Displaydata';
class Newsdisplay extends Component{
    constructor(){
        super();
        this.state={
                news:json
               
        }
    }
    
    render(){
        console.log(this.state.news);
        return(
            <React.Fragment>
                <Header/>
                <hr/>
                <h1>newspaper</h1>
                <hr/>
                
                <Displaydata namedata={this.state.news}/>
                 <Footer year='2021'/>
                 
                </React.Fragment>
        )
    } 
    }
    
export default Newsdisplay;
