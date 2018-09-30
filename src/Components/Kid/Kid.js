import React from 'react';
export default class Kid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emotion: 'nervous', danceSteps: [], currentStepIndex: 0,
      startedPerforming: false
    };
  }

  qualified() {
    this.setState({ startedPerforming: false })
  }

  componentDidMount() {
     this.setState({danceSteps: ['step1','step2']})
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component Did Update Prev State',prevState);
    console.log('Component Did Update Current State',this.state);
  }

  static getDerivedStateFromProps(props,state) {
    // const oldSteps = state.danceSteps;
    // const newSteps = props.furtherSteps;
    // const allSteps = oldSteps.concat(newSteps)
    // return {danceSteps: allSteps} 
    console.log('Kid G D S F P',props)
    const danceStepsSpread =  [...state.danceSteps, ...props.furtherSteps]
    return {
      danceSteps: state.danceSteps.length < 5 ? danceStepsSpread : state.danceSteps,
      startedPerforming: state.danceSteps.length >= 5,
      emotion: props.emotion === 'happy' ? props.emotion : 'nervous' 
    }
  }

  render() {
    const { dressColor } = this.props;
    const { danceSteps, emotion, startedPerforming, currentStepIndex } = this.state;

    console.log('dance Steps from Kid',danceSteps)
    return (
      <div>
        <div>dressColor: {dressColor}</div>
        <div style={{
          backgroundColor: dressColor, width: 50, height:50
        }}></div>
        <div>Emotion: {emotion}</div>
        {startedPerforming &&
          <div>
            <div>Current Step: {danceSteps[currentStepIndex]}</div>
            <button onClick={() => this.setState({
              currentStepIndex:
                currentStepIndex + 1
            })}>Perform Next Step</button>
          </div>}
      </div>
    );
  }
}
Kid.defaultProps = { dressColor: 'red', applaud: false, furtherSteps: [] };
