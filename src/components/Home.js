import React from 'react';
import ReactDom from 'react-dom';
import Header from './Header';
import Footer from './Footer';
const Display = () =>{
    return(
        <React.Fragment>
            <Header/>
            <h1>React App</h1>
             <hr/>
             <Footer/>
            </React.Fragment>
    )
}
export default Display;
