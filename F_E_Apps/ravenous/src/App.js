import React from 'react';

import BusinessList from './components/BusinessList/BusinessList'
import SearchBar from './components/SearchBar/SearchBar'
import './App.css';


const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};/*this object will eventually be imported from the Yelp API*/

const businesses = [business, business, business, business, business, business]

class App extends React.Component {

  searchYelp(term, location, sortBy){
    console.log(`searching Yelp with ${term}, ${location}, ${sortBy}.`);
  }

  render() {
    return (
      <div class="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses={businesses} />
      </div>
    );
  }
}

export default App;