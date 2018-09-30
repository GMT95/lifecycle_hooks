import React, { Component } from 'react';
import Kid from './Components/Kid/Kid';
import Teacher from './Components/Teacher/Teacher'
import Judges from './Components/Judge/Judge';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.updateSteps = this.updateSteps.bind(this)
	}


	static getDerivedStateFromProps() {
		return {volume: 5}
	}

	//Task4
	updateSteps(furtherSteps) {
		this.setState({furtherSteps})
	}
	//Task4

	//Task5
updateEmotions() {
	this.setState({emotion: 'happy'})
	console.log('Update Emotions:',this.state.emotion)
}
	//Task5

  	render() {
		const {volume,furtherSteps} = this.state;
		console.log("Volume___",this.state.volume)
		console.log("Further Steps___",this.state.furtherSteps) 
	 
		return (
			<div>
			  <h1>Kid</h1><br/>	 	  	
			  <Kid dressColor="green" furtherSteps={furtherSteps} emotion={this.state.emotion}/>
			  <hr/>
			  <h1>Teacher</h1><br/>
			  <Teacher updateSteps={this.updateSteps}/>
			  <hr/>
			  <h1>Judges</h1><br/>
			  <Judges updateEmotions={this.updateEmotions.bind(this)}/>
			</div>
		  );
	}


}

export default App;
