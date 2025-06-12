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