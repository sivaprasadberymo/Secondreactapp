import React from 'react';
import ReactDom from 'react-dom';
const footer=(props)=>{
    return(
        <footer>
        <center>
            <hr/>
        <div>&copy;developer.org,{props.year}</div>
        </center>
        About
        <div>help</div>
        <div>Developer option</div>
        </footer>
    );
}
export default footer;