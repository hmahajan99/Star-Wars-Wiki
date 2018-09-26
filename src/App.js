import React, { Component } from 'react';
import './App.css';
import NavBar from './components/AppBar/AppBar';
import SearchField from './components/SearchField/SearchField';
import CardList from './components/CardList/CardList';

class App extends Component {
  
  constructor() {
    super()
    this.state = {
      searchValue: '',
      searchType: 'all',
      random: true,
      cardsInfo: []         
    }
  }

  onSearchButtonClick = (selectedOption,searchField) => {

	const arr = [];

  	if(selectedOption!=='all'){

	  	fetch(`https://swapi.co/api/${selectedOption}/?search=${searchField}`)
	  	   .then(response=> response.json())
	  	   .then(data => {
	  	   		if(data.count){
	  	   			data.results.forEach( function(element) {
	  	   				arr.push({type:selectedOption , info: element})
	  	   			});
	  	   		}
  	   		    this.setState({ searchValue: searchField , searchType: selectedOption , random: false , cardsInfo: arr })
	  	   })

  	}else{

		const options = [ "films", "people", "planets", "species", "starships", "vehicles"];
		
		Promise.all(options.map( (element) => {
			return 	fetch(`https://swapi.co/api/${element}/?search=${searchField}`)
	  	   				.then(response=> response.json())
		}))
		   .then(data => {
		   		data.forEach( function(element, index) {
		   			if(element.count){
		   				element.results.forEach( function(item) {
	  	   					arr.push({type:options[index] , info: item})
	  	   				});
		   			}
		   		});
  	   		    this.setState({ searchValue: searchField , searchType: selectedOption , random: false , cardsInfo: arr })
		   })
  	}




  };

  onRandomButtonClick = () => {

	const options = [ "films", "people", "planets", "species", "starships", "vehicles"];
  	const selectedOption = options[Math.floor(Math.random() * 6 )];
  	fetch(`https://swapi.co/api/${selectedOption}/${Math.floor(Math.random() * 10 )+1}/`)
  	   .then(response=> response.json())
  	   .then(data => {
   		    this.setState({ random: true , cardsInfo: [{type:selectedOption , info: data}] }) 
  	   })

  }

  render() {

  	const {cardsInfo} = this.state;

    return (
      <div className="App">
	      <NavBar />
        <br />
	      <SearchField onSearchButtonClick={this.onSearchButtonClick} onRandomButtonClick={this.onRandomButtonClick} />
        <br />
        <br />
	      <CardList cardsInfo={cardsInfo}/>
      </div>
    );
  }
}

export default App;
