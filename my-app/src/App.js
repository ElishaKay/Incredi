import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header'

import {  getPercentageDifferences,
          getSumsPerParentPerYear
       } from './services/Stats'

import { SumStats } from './components/SumStats'


class App extends Component {

  state = {
    sumStats:[],
    percentageStats:[]
  }

  componentDidMount(){
    getSumsPerParentPerYear()
      .then(sumStats => {
        console.log('sum stats', sumStats)
        this.setState({sumStats})
      });

    getPercentageDifferences()
      .then(percentageStats => {
        console.log('percentage stats', percentageStats)
        this.setState({percentageStats})
      });  
  }

  render() {

    return (
      <div className="App">
        <Header></Header>
        
        <div >
          <SumStats sumStats={this.state.sumStats}></SumStats>
        </div>

      </div>
    );
  }
}

export default App;
