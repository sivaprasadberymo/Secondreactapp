//import React from 'react';
import React,{Component} from 'react';
import './App.css';
class Page extends React.Component{
    render()
    {
        
        return(
            <React.Fragment>
                <header>
                    
            <center>
                <div class='logo'>
             Berymo App
             </div>
               <input/>
               
             <div style={{color:'white'}}>user text editer</div>
             
             <button color='red'>
               enter
             </button>
             <hr/>
            </center>
            </header>
            </React.Fragment>
        );
    }
}
export default Page;
