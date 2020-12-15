// import React, { Component } from 'react';
import {Component} from 'react';
import TopicBrowser from './components/TopicBrowser/TopicBrowser'
import EvenAndOdd from './components/Topics/EvenAndOdd'
import FilterObject from './components/Topics/FilterObject'
import FilterString from './components/Topics/FilterString'
import Palindrome from './components/Topics/Palindrome'
import Sum from './components/Topics/Sum'


class App extends Component {
  render() {
    
 

    return (
      <section>      
        <EvenAndOdd/>
        <FilterObject/>
        <FilterString/>
        <Palindrome/>
        <Sum/>
      </section>
    )
  }
}

export default App;
