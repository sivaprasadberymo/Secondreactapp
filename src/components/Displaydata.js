import React from 'react';
import ReactDom from 'react-dom';
const Displaydata=(props)=>{
   const renderinglist=props.namedata.map((data) =>{
             return(
                 <div>
                    <div/> {data.id}

                    <div/> {data.name}
                     <div/>{data.value}
                 </div>
             )
   })
    return(
        <h1>{renderinglist}</h1>
    )
}
export default Displaydata;