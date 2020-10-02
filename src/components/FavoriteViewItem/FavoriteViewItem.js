import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';

    let str;
    
class Favorite extends Component {
    
    removeObject=(object)=>{
        let str = object
        str = str.replace(/[{}]/g, '');
        console.log(str);
        return str;
      }

    render() {
        
        return (
            <div>
                <span><img src={this.removeObject(this.props.image.url)}/></span>
        <p>{JSON.stringify(this.props.image.url)}</p>
        <p>{this.removeObject(this.props.image.url)}</p>
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
export default connect(mapStateToProps)(Favorite);