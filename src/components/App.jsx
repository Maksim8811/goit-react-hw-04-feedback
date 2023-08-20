import React, { Component } from "react"
import FeedbackOptions from "../components/FeedbackOptions/FeedbackOptions"
import Statistics from "../components/Statistics/Statistics"
import Section from "../components/Section/Section"
import Notification from "./Notification/Notification"

 class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback = () => {
    const values = Object.values(this.state)
    let total = 0
    for(const value of values) {
        total+=value
    }
    return total
  }

  countPositiveFeedbackPercentage = () => {
    const result = 100/this.countTotalFeedback()*this.state.good 
    return Math.round(result)
  }

  addFeedback = option => {
    this.setState(state => ({
      [option]: state[option] + 1,
    }))
  }

  render () {
    const {good,neutral,bad} = this.state
return (
  <>
      <Section title="Please leave feedback">
      <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.addFeedback}/>
      </Section>
      <Section title="Statistics">
      {this.state.good || this.state.neutral || this.state.bad ?
        (<Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>) : 
        (<Notification message="There is no feedback"/>)}
      </Section>
      
    </>
)
    
  }
  
};

export default App
