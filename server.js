const express = require('express');
const APP = express();
const PORT = process.env.PORT || 3000


APP.get('/personal-data', (request, response) => {

    const res = {
        name: 'Jesus',
        lastName: 'Romero',
        age: 28,
        single: true,
        mobileNumber: '5591927209',
        collegeCareer: 'Engineer in Communications and Electronics (INSTITUTO POLITECNICO NACIONAL)',
        work: 'Spotlight Santander (México) Senior Frontend',
        knowledges: 'Java, JS, TS, C#, React, React Native, Angular, NodeJS, Express, Unity, Git, Subversion, Microcontrollers, Electronic',
        git: 'https://github.com/jesusr1915',
        gitlab: 'https://gitlab.com/jesusrg',
        youtube: 'https://www.youtube.com/channel/UCsoFIUw7QudMIWgfIIj9DjA'
    }

    response.send(res);
});

APP.listen(PORT, () => console.log(`Server run in port ${PORT}`))