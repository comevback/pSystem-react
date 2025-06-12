// src/services/api.js
export async function generateQuestion(code) {
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });
      return await response.json();
    } catch (error) {
      console.error('Fail to generate', error);
      return { question: 'fail to request' };
    }
}

export async function generateQuestion_mock(code) {
    try {
      const response = await fetch('https://run.mocky.io/v3/1f8c320a-7839-4391-bb59-825d40a2c75c');
      return await response.json();
    } catch (error) {
      console.error('Fail to generate', error);
      return { question: 'fail to request' };
    }
  }
  