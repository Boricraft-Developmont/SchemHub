import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Main(){
    return (
      <div className="wrapper">
        <Card />
      </div>
    );
  }

function Card(props){
  return (
    <div className="card" >
      <div className="card_body">
        <img src={props.img} />
        <h2 className="card_title">{props.title}</h2>
        <p className="card_desc">{props.desc}</p>

      </div>
    </div>
  )
}
  
  
  // ========================================
  
  ReactDOM.render(
    <Main />,
    document.getElementById('root')
  );
  