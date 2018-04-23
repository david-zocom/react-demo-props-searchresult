import React, { Component } from 'react';
import './App.css';
import SearchResult from './SearchResult.js';

class App extends Component {
  render() {
	  let result = {
		  title: 'Pink elephant',
		  url: 'http://wxample.com',
		  description: 'Epic description'
	  };
    return (
		<div className="App">
  	  		<SearchResult pasta={result} />
        </div>
		     /*<div className="App">
			  	<SearchResult
				 	title={'Pink elephant'}
					url={'http://exempel.com'}
					description="Description.........."
					/>
		      </div>*/
    );
  }
}

export default App;
