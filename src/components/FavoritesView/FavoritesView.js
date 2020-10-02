import React, { Component } from 'react';
import { connect } from 'react-redux';
const mapStateToProps = reduxState => ({
  reduxState,
});

class FavoritesView extends Component {

componentDidMount() {
  this.fetchFavorite();
}

fetchFavorite=(event)=>{
    this.props.dispatch({
      type: 'FETCH_FAVORITE',
    })
}
    render() {
      return (
        <div>
          <h1>Favorites</h1>
      <p>{JSON.stringify(this.props)}</p>
  
  
        </div>
      );
    }
    
  }
  
  export default connect(mapStateToProps)(FavoritesView);