import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';

class Search extends Component {
    pushToFavorite=(event)=>{
        console.log('link:', event.target.id);
      
        this.props.dispatch({
            type: 'CREATE_FAVORITE',
            payload: event.target.id
        })
      }
    render() {
        
        return (
            <div>
                <span><img src={this.props.image.images.downsized_medium.url}/></span>
                <button id={this.props.image.images.downsized_medium.url} onClick={this.pushToFavorite}>Favorite!</button>
            </div>
        );
    }
}
const mapStateToProps = (reduxState) => {
    return(
        {
            reduxState
        }
    )
}
export default connect(mapStateToProps)(Search);