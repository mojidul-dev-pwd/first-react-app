import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";
import Login from "./components/login";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  //liftcycle -- constructor-render-mount
  constructor(){
    super();
    console.log("App - Constructor")
  }

  componentDidMount(){
    //ajax call
    //this.setState({})
    console.log("App - Mounted")
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    console.log("App - Render")
    return (
      // <React.Fragment>
      //   <NavBar totalCounter={this.state.counters.filter(c=>c.value>0).length}/>
      //   <main className="container">
      //     <Counters
      //     counters={this.state.counters}
      //     onReset= {this.handleReset}
      //     onIncrement={this.handleIncrement}
      //     onDelete={this.handleDelete}
      //     />
      //   </main>
      // </React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="counter" element={
              <Counters
              counters={this.state.counters}
              onReset= {this.handleReset}
              onIncrement={this.handleIncrement}
              onDelete={this.handleDelete}
              />
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
