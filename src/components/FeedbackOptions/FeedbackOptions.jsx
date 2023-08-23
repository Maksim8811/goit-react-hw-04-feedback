
import PropTypes from 'prop-types'
import "./FeedbackOptions.css"

function FeedbackOptions ({options, onLeaveFeedback}) {
        return options.map(option => (
        <button 
            className="Feedback_button_list"
            type="button"
            onClick={() => onLeaveFeedback(option)}
            key={option}>
                {option}
            </button>
            ))
      
            
    }

    FeedbackOptions.propTypes = {
        options: PropTypes.arrayOf(PropTypes.string.isRequired)
    }

export default FeedbackOptions
