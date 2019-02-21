import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Movies from "./components/movies";
import MovieForm from "./components/movieForm";
//import Counters from "./components/counters";
//import Navbar from "./components/navBar";
import NavBar from "./components/common/navBar";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import Notfound from "./components/not-found";
import LoginForm from "./components/loginForm";
import "./App.css";

class App extends Component {
  // state = {
  //   counters: [
  //     { id: 1, value: 4 },
  //     { id: 2, value: 0 },
  //     { id: 3, value: 0 },
  //     { id: 4, value: 0 }
  //   ]
  // };

  // constructor(props) {
  //   super(props);
  //   console.log("App - Constructor", this.props);
  // }

  // componentDidMount() {
  //   // Best place to call Ajax func
  //   console.log("App - mount");
  // }

  // handleIncrement = counter => {
  //   const counters = [...this.state.counters];
  //   const index = counters.indexOf(counter);
  //   counters[index] = { ...counter };
  //   counters[index].value++;
  //   this.setState({ counters: counters });
  //   //console.log("clicked", this.state.counters[index]);
  //   //this.setState({ value: this.state.counters.value + 1 });
  // };

  // handleDecrement = counter => {
  //   const counters = [...this.state.counters];
  //   const index = counters.indexOf(counter);
  //   counters[index] = { ...counter };
  //   counters[index].value--;
  //   this.setState({ counters: counters });
  //   //console.log("clicked", this.state.counters[index]);
  //   //this.setState({ value: this.state.counters.value + 1 });
  // };

  // handleDelete = counterId => {
  //   //console.log("delete clicked", counterId);
  //   const counters = this.state.counters.filter(c => c.id !== counterId);
  //   this.setState({ counters: counters });
  // };

  // handleReset = () => {
  //   const counters = this.state.counters.map(c => {
  //     c.value = 0;
  //     return c;
  //   });
  //   this.setState({ counters });
  // };

  render() {
    return (
      <React.Fragment>
        {/* <Navbar
           totalCounters={this.state.counters.filter(c => c.value > 0).length}
        /> */}
        <NavBar />
        <main role="main" className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/Movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={Notfound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
          {/* <Movies /> */}
          {/* <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          /> */}
        </main>
      </React.Fragment>
    );
  }
}

export default App;
