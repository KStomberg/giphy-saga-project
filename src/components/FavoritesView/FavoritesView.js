import React, { Component } from 'react';
import { connect } from 'react-redux';
import FavoriteViewItem from '../FavoriteViewItem/FavoriteViewItem'
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
      {/* <p>{JSON.stringify(this.props.reduxState.favoriteList)}</p> */}
          {this.props.reduxState.favoriteList.map((image, i) => 
            <FavoriteViewItem key={image.id} image={image} />)}
  
  
        </div>
      );
    }
    
  }
  
  export default connect(mapStateToProps)(FavoritesView);