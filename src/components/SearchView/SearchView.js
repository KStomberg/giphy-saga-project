import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchViewItem from '../SearchViewItem/SearchViewItem';
const mapStateToProps = reduxState => ({
    reduxState,
});

class SearchView extends Component {
state = {
    newQuery: ''

}

handleSearchInput=(event)=>{
  console.log('event:', event.target.value);
    this.setState({
        newQuery: event.target.value
    })
}
addQuery=(event) =>{
    event.preventDefault();
    console.log('new query is:', this.state.newQuery);
    
    this.props.dispatch({
        type: 'FETCH_GIF',
        payload: this.state.newQuery
    })
}
render() {
    console.log('this.props.reduxState.gifList.data is:', this.props.reduxState.gifList.data);

    // let gifItems =  this.props.reduxState.gifList.data;

    // if (gifItems === undefined){

    // }


    return (
        
      <div>
        <h1>Giphy Search!</h1>

        <input placeholder="search input" onChange={this.handleSearchInput}></input><button onClick={this.addQuery}>Search</button>
           
        {this.props.reduxState.gifList.map((image, i)=>
                <SearchViewItem key={image.id} image={image} />)}
         

        {/* <p>{JSON.stringify(this.props.reduxState.gifList)}</p> */}
                {/* <p>{JSON.stringify(gifItems)}</p> */}

      </div>
    );
  }
  
}



export default connect(mapStateToProps)(SearchView);
