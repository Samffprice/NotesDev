const data = {
    text: 'Your text here\nThis is a new line\nThis is another new line\nThis is the last line\n'
};

fetch('http://localhost:4000/text', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
        console.error('Error:', error);
    });