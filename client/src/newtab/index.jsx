import React from 'react';
import ReactDOM from 'react-dom';
import FortuneCookie from './components/FortuneCookie.jsx';
import AddFortune from './components/AddFortune.jsx';
import './newTab.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.openCookie = this.openCookie.bind(this);
    this.addFortune = this.addFortune.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = { 
      cookieOpened: false,
      cookieImg: "./fortune-cookie-unopened.jpg",
      name: "",
      fortunes: [
        "Be at peace with yourself.", 
        "Everything will work out for the best",
        "An exciting adventure awaits you"
      ],
      currentFortune: "",
      userInput: ""
    }
  }

  componentDidMount(){
    console.log("component mounted")
  }

  openCookie() {
    console.log("cookieOpened");
    const newfortune = this.state.fortunes[Math.floor(Math.random()*this.state.fortunes.length)];
    this.setState({
      cookieOpened: true,
      cookieImg: "./fortune-cookie-opened.jpg",
      currentFortune: newfortune
    })
  }

  addFortune() {
    this.setState({ fortunes: [...this.state.fortunes, this.state.userInput] })
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    })
  }

  render () {
    return (<div className="welcome">
      <h1>Welcome {this.state.name}</h1>
      <FortuneCookie 
        cookieImg={this.state.cookieImg} 
        currentFortune={this.state.currentFortune}
      />
      <button onClick={this.openCookie.bind(this)}> Open Cookie </button>
      <AddFortune addFortune={this.addFortune}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));