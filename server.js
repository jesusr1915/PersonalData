const express = require('express');
const app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (request, response) => {

    const res = {

        name: 'Jesus',
        age: 28,
        status: null,
        status2: undefined,
        url: request.url
    }


    response.send(res);
});

app.listen(3000, () => console.log('Server run in port 3000'))