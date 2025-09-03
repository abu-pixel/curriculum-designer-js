function generateCurriculum() {
  const input = document.getElementById('goals').value;
  const output = document.getElementById('output');

  const topics = extractTopics(input);
  const weeks = 10;
  const curriculum = [];

  for (let i = 0; i < weeks; i++) {
    const topic = topics[i % topics.length];
    curriculum.push(`Week ${i + 1}: Focus on ${topic}`);
  }

  output.textContent = curriculum.join('\n');
}

function extractTopics(text) {
  const keywords = ['linear equations', 'graphing', 'word problems'];
  const found = [];

  for (let word of keywords) {
    if (text.toLowerCase().includes(word)) {
      found.push(word);
    }
  }

  return found.length ? found : ['general review'];
}
