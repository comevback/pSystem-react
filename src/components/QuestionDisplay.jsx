// src/components/QuestionDisplay.jsx
function QuestionDisplay({ question }) {
    return (
      <div style={{ marginTop: '1rem' }}>
        <h3>Generated question: </h3>
        <pre>{question}</pre>
      </div>
    );
}

export default QuestionDisplay;
  