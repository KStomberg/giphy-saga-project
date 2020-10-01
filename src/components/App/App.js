import React, { Component } from 'react';
import SearchView from '../SearchView/SearchView';
import FavoritesView from '../FavoritesView/FavoritesView';

class App extends Component {

  render() {
    return (
      <div>
        <SearchView/>
        <FavoritesView/>
      </div>
    );
  }
  
}

export default App;
