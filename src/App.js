import React from 'react';
import './App.css';
import DogFilter from './components/DogFilter';
import DogBar from './containers/DogBar';
import DogContainer from './containers/DogContainer';

class App extends React.Component {
  state = {
    pups: [],
    pup: '',
    toggle: false
  }

  componentDidMount() {
    fetch('http://localhost:3000/pups')
    .then(resp => resp.json())
    .then(pups => this.setState({ pups: pups }));
  }

  handleFilter = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  }

  handlePup = (pup) => {
    this.setState({
      pup: pup
    });
  }

  handleUpdate = (id) => {
    // set timeout to deal with the javascript async
    setTimeout(() => {
      this.setState({
        pup: {
          ...this.state.pup,
          isGoodDog: !this.state.pup.isGoodDog
        }
      });

      let updatedPups = [...this.state.pups];
      let idx = updatedPups.findIndex(pup => pup.id === id);
      updatedPups[idx] = this.state.pup;
      this.setState({
        pups: [...updatedPups]
      });      

      let options = {
        method: 'PATCH',      
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(this.state.pup),
      }
      fetch(`http://localhost:3000/pups/${id}`, options)
      .then(resp => resp.json())
      .then(pup => console.log(`${pup.name} updated!`))
    }, 100);
  }

  render(){
    const pups = this.state.pups.filter(pup => pup.isGoodDog === this.state.toggle);
    return (
      <div className="App">
        <DogFilter toggle={this.state.toggle} handleFilter={this.handleFilter} />
        <DogBar pups={pups} handlePup={this.handlePup}/>
        <DogContainer pup={this.state.pup} handleUpdate={this.handleUpdate} />
      </div>
    );    
  }
}

export default App;
