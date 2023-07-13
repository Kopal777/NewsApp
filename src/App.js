import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import About from './Components/About';
import { Routes, Route } from "react-router-dom"

export default class App extends Component {
  pageSize=6;
  render() {
    return (
      <>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={ <News key="general" pageSize ={this.pageSize} country="in" category="General"/> } />
        <Route exact path="/about" element={ <About/> } />
        <Route exact path="/business" element={ <News key="business" pageSize ={this.pageSize} country="in" category="Business"/> } />
        <Route exact path="/sports" element={ <News key="sports" pageSize ={this.pageSize} country="in" category="Sports"/> } />
        <Route exact path="/entertainment" element={ <News key="entertainment" pageSize ={this.pageSize} country="in" category="Entertainment"/> } />
        <Route exact path="/general" element={ <News key="general" pageSize ={this.pageSize} country="in" category="General"/> } />
        <Route exact path="/health" element={ <News key="health" pageSize ={this.pageSize} country="in" category="Health"/> } />
        <Route exact path="/science" element={ <News key="science" pageSize ={this.pageSize} country="in" category="Science"/> } />
        <Route exact path="/technology" element={ <News key="technology" pageSize ={this.pageSize} country="in" category="Technology"/> } />
      </Routes>
      </>
    )
  }
}
