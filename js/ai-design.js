// Ask user for the desired experience and fetch CSS from the local server

document.addEventListener('DOMContentLoaded', () => {
  const experience = prompt('What experience do you want? (e.g., professional, whimsical, upside down)');
  if (!experience) return;
  getDesignFromServer(experience)
    .then(css => applyDesign(css))
    .catch(err => console.error('Design generation failed:', err));
});

async function getDesignFromServer(experience) {
  const response = await fetch('/design', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ experience })
  });
  const data = await response.json();
  if (!data.css) throw new Error('No design received');
  return data.css;
}

function applyDesign(css) {
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
}
