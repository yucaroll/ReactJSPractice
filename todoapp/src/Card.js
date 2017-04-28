import React, { Component } from 'react';
import CheckList from './CheckList';
import './App.css'

class Card extends Component{
    constructor(props){
        super(props);
        
        this.state={
            showDetails: false
        };
    }
    
    toogleDetails(){
        this.setState({showDetails: !this.state.showDetails});
    }
    
    render(){
        let cardDetails;
        if (this.state.showDetails){
            cardDetails = (
                <div className="card_details">
                    {this.props.description}
                    <CheckList cardId={this.props.id} tasks={this.props.tasks} />
                </div>
            );
        }
        
        return(
            <div className="card">
                <div className="card_title" onMouseEnter={this.toogleDetails.bind(this)}>
                    {this.props.title}
                </div>
                {cardDetails}
            </div>
        );
    }
}

export default Card;