import React from 'react';
export default class Judge extends React.Component {
  constructor() {
    super();

    this.state = { stars: 0, available: false }
    this.provideStars = this.provideStars.bind(this)
    this.applaud = this.applaud.bind(this)
  }
  applaud() {
    //Send this applaud status to Kid.js
    this.props.updateEmotions();
  }
  provideStars() {
    const { stars } = this.state;
    if(stars === 4) {
      this.props.childQualifiedByJudges(stars + 1)
    }
    this.setState({ stars: ++this.state.stars })
    
  }

  shouldComponentUpdate(nextProps,nextState) {
    return nextState.stars <= 5 
  }

  render() {
    const { stars, available } = this.state;
    return (
      <div>
        <button type="button" onClick={this.applaud}>
          Appreciate performance
        </button>
        <button type="button" onClick={this.provideStars}>
          Provide stars
        </button>
        Kid is available: {available}
        Stars gained: {stars}
      </div>
    );
  }
}