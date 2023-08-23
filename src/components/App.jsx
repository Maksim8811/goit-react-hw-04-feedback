import { useState } from "react"
import FeedbackOptions from "../components/FeedbackOptions/FeedbackOptions"
import Statistics from "../components/Statistics/Statistics"
import Section from "../components/Section/Section"
import Notification from "./Notification/Notification"


 function App () {
 
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


 const countTotalFeedback = () => {
    return good + neutral + bad
  }

  const countPositiveFeedbackPercentage = () => {
    const result = 100/countTotalFeedback()*good 
    return Math.round(result)
  }

  const addFeedback = ev => {
    if (ev === 'good') {
      setGood(st=> st + 1)
      }
    if (ev === 'neutral') {
      setNeutral(st=>st+1)
    }
    if (ev === 'bad') {
      setBad(st=>st+1)
    }
  }

return (
  <>
      <Section title="Please leave feedback">
      <FeedbackOptions options={['good','neutral','bad']} onLeaveFeedback={addFeedback}/>
      </Section>
      <Section title="Statistics">
       
      {good || neutral || bad ?
        (<Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()}/>) : 
        (<Notification message="There is no feedback"/>)}
      </Section>
      
    </>
)
    
  };

export default App
