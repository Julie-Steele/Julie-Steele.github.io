// Ask user for the desired experience and fetch CSS from an AI model

document.addEventListener('DOMContentLoaded', () => {
  const experience = prompt('What experience do you want? (e.g., professional, whimsical, upside down)');
  if (!experience) return;
  getDesignFromAI(experience).then(css => applyDesign(css)).catch(err => console.error('Design generation failed:', err));
});

async function getDesignFromAI(experience) {
  const apiKey = '';
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + apiKey
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful designer that outputs CSS for the website.' },
        { role: 'user', content: `Create CSS to style the webpage in a ${experience} theme.` }
      ]
    })
  });
  const data = await response.json();
  if (!data.choices || !data.choices.length) throw new Error('No design received');
  return data.choices[0].message.content;
}

function applyDesign(css) {
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
}
