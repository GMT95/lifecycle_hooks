import React, { Component } from 'react';
import Kid from './Components/Kid/Kid';
import Teacher from './Components/Teacher/Teacher'
import Judges from './Components/Judge/Judge';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {showKidComponent : true, showJudges: true}

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

	//Task7
	childQualifiedByJudges(stars) {
		this.setState({stars})
	} 
	//Task7

	goodByeJudges(showJudges) {
		this.setState({showJudges})
	}

  	render() {
		const {volume,furtherSteps,stars,showKidComponent,showJudges} = this.state;
		console.log("Volume___",this.state.volume)
		console.log("Further Steps___",this.state.furtherSteps) 
	 
		return (
			<div>
			  {showKidComponent && <h1>Kid</h1>}
			  <br/>	 	  	
			  {showKidComponent && <Kid dressColor="green" furtherSteps={furtherSteps} emotion={this.state.emotion} getStars={this.state.stars} goodByeJudges={this.goodByeJudges.bind(this)}/>}
			  {showKidComponent && stars && <button onClick={() => this.setState({showKidComponent: false})}>Ask Kid to Leave</button>}
			  <hr/>
			  <h1>Teacher</h1><br/>
			  <Teacher updateSteps={this.updateSteps}/>
			  <hr/>
			  {showJudges && 
			  <div>
			  <h1>Judges</h1><br/>
			  <Judges updateEmotions={this.updateEmotions.bind(this)} childQualifiedByJudges={this.childQualifiedByJudges.bind(this)} />
			  </div>}	
			</div>
		  );
	}


}

export default App;
