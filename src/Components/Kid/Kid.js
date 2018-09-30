import React from 'react';
export default class Kid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emotion: 'nervous', danceSteps: [], currentStepIndex: 0,
      startedPerforming: false, showJudges: false
    };
  }

  qualified() {
    this.setState({ startedPerforming: false })
  }

  componentDidMount() {
     this.setState({danceSteps: ['step1','step2']})
  }

  //Task 7
  // componentDidUpdate() {
  //   // console.log('Component Did Update Prev State',prevState);
  //   // console.log('Component Did Update Current State',this.state);
  //   const { startedPerforming } = this.props;
  //   console.log('Kid ComponentDidUpdate',startedPerforming)
  //   if(startedPerforming) {
  //     this.qualified.bind(this);
  //   }
  // }
  //Task 7

  static getDerivedStateFromProps(props,state) {
    // const oldSteps = state.danceSteps;
    // const newSteps = props.furtherSteps;
    // const allSteps = oldSteps.concat(newSteps)
    // return {danceSteps: allSteps} 
    console.log('Kid G D S F P',props)
    const danceStepsSpread =  [...state.danceSteps, ...props.furtherSteps]
    return {
      danceSteps: state.danceSteps.length < 5 ? danceStepsSpread : state.danceSteps,
      startedPerforming: state.danceSteps.length >= 5 ? props.getStars ? false : true : false,
      emotion: props.emotion === 'happy' ? props.emotion : 'nervous' 
    }
  }

  componentWillUnmount() {
    const {showJudges} = this.state
    this.props.goodByeJudges(showJudges)
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
