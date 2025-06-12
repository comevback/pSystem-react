// src/pages/QuizPage.jsx
import { useState } from 'react';
import { generateQuestion } from '../services/api';
import CodeInput from '../components/CodeInput';
import QuestionDisplay from '../components/QuestionDisplay';

function QuizPage() {
  const [code, setCode] = useState('');
  const [question, setQuestion] = useState('');

  const handleGenerate = async () => {
    const res = await generateQuestion(code);
    setQuestion(res.question || 'Failed to generate question');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Programming Quiz Generator</h1>
      <CodeInput code={code} setCode={setCode} />
      <button onClick={handleGenerate}>Generate</button>
      <QuestionDisplay question={question} />
    </div>
  );
}

export default QuizPage;
