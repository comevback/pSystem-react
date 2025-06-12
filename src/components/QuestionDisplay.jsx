import './QuestionDisplay.module.css';

function QuestionDisplay({ question }) {
  if (!question) return null;

  const [prompt, ...codeLines] = question.split('\n');
  const code = codeLines.join('\n');

  return (
    <div className="question-container">
      <h3 className="title">🧠 Generated Question</h3>
      <p className="prompt">{prompt}</p>
      <pre className="code-block">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default QuestionDisplay;
