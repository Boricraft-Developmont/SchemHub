import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    render() { 
        let image = JSON.stringify(this.props.image)
        image = image.replace(/['"]+/g, '')
        console.log(image)
        image = image.split(',');
        return ( 
            <div className="card">
                <div className="card-image">
                    <img id='card-image-dubbel' src={image[0]} alt={this.props.id}/>
                </div>
                <div className="card-content">
                    <h3>{this.props.title}</h3>
                </div>
            </div>
        );
    }
}
 
export default Card;