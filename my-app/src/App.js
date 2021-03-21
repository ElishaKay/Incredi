import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header'

import { getAllArticles,
          getCategoryArticles,
          getCountryArticles,
          getCountryArticlesByIP
       } from './services/ArticleService'

import { Articles } from './components/Articles'
import Select from 'react-select';

const Categories = [
  { label: 'Business', value: 'Business' },
  { label: 'Technology', value: 'Technology' },
  { label: 'Entertainment', value: 'Entertainment' },
  { label: 'Sports', value: 'Sports' },
  { label: 'Science', value: 'Science' },
  { label: 'Health', value: 'Health' },
];

const Countries = [
  { label: 'Brazil', value: 'Brazil' },
  { label: 'Israel', value: 'Israel' },
  { label: 'United States', value: 'United States' },
  { label: 'France', value: 'France' },
  { label: 'England', value: 'England' }
];

class App extends Component {

  state = {
    articles:[],
    selectedCountry: '',
    selectedCategory: '',
    ip: ''
  }

  componentDidMount(){
    getAllArticles()
      .then(articles => {
        console.log('articles', articles)
        this.setState({articles})
      });
  }

  onSelectCategory(opt){
    let category = opt.value;
    getCategoryArticles(opt.value)
      .then(articles => {
        console.log('articles', articles)
        this.setState({selectedCategory: category, selectedCountry: '', articles, ip: ''})
      });
  }

  onSelectCountry(opt){
    console.log(opt)
    getCountryArticles(opt.value)
      .then(articles => {
        console.log('articles', articles)
        this.setState({selectedCountry: opt.value, selectedCategory: '', articles, ip: ''})
      });
  }

  handleIPChange(event) {
    this.setState({ip: event.target.value});
  }

  handleIPSubmit(event){
    event.preventDefault();

    getCountryArticlesByIP(this.state.ip)
      .then(response => {
        console.log('articles', response.articles)
        this.setState({selectedCategory: '', selectedCountry: response.selectedCountry, articles: response.headlines})
      });
  }

  render() {
    let {selectedCategory, selectedCountry} = this.state;

    return (
      <div className="App">
        <Header></Header>
        <div className="row filter-options">
            <div className="col-md-2">
                Search By Category
                <Select
                  options={Categories}
                  value={selectedCategory || ''}
                  onChange={this.onSelectCategory.bind(this)}
                />  
            </div>
            <div className="col-md-2">
              Search By Country
                <Select
                  value={selectedCountry || ''}
                  options={Countries}
                  onChange={this.onSelectCountry.bind(this)}
                />  
            </div>
            <form className="col-md-2" onSubmit={this.handleIPSubmit.bind(this)}>
              <label>
                Search By IP
                <input className="form-control" 
                  type="text" 
                  value={this.state.ip}
                  onChange={this.handleIPChange.bind(this)}
                />
              </label>
              <input type="submit" value="Submit" />
            </form>
        </div>

        <center>
          <h1 className="currently-viewing">{selectedCategory || selectedCountry}</h1>
        </center>

        <div >
          <Articles articles={this.state.articles}></Articles>
        </div>

      </div>
    );
  }
}

export default App;
