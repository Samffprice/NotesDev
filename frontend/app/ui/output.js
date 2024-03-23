

const url = 'http://localhost:4000/routes/text'
const textData = 'Some text to send to the backend';


fetch('http://localhost4000/routes/text', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        body: JSON.stringify({ text: 'asdfasdfasdf' }),
    },
    body: JSON.stringify({ text: textData }),
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
        console.error('Error:', error);
    });
