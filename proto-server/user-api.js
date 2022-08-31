const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const _ = require('lodash');

const app = express()
const port = 4000;

// dummy data
let users = [
    {
        avatar: '0024',
        name: 'Fenwick Cannonier',
        power: 'alter',
        lightsaber: 'lightblue',
        side: 'dark',
        id: 'user_0',
        dateAdded: Date.now()
    },
    {
        avatar: '0010',
        name: 'Kim Wexler',
        power: 'force',
        lightsaber: 'gold',
        side: 'light',
        id: 'user_02',
        dateAdded: Date.now()
    },
    {
        avatar: '0001',
        name: 'Darth Magul',
        power: 'sense',
        lightsaber: 'green',
        side: 'dark',
        id: 'user_03',
        dateAdded: Date.now()
    },
    {
        avatar: '0022',
        name: 'Benjamin',
        power: 'alter',
        lightsaber: 'blue',
        side: 'light',
        id: 'user_04',
        dateAdded: Date.now()
    },
    {
        avatar: '0013',
        name: 'Kim Wexler',
        power: 'force',
        lightsaber: 'gold',
        side: 'light',
        id: 'user_05',
        dateAdded: Date.now()
    },
    {
        avatar: '0023',
        name: 'Darth Odin',
        power: 'sense',
        lightsaber: 'green',
        side: 'dark',
        id: 'user_06',
        dateAdded: Date.now()
    }
]

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//1. ID should be enereated on the backend 

app.post('/user', (req, res) => {
    const user = req.body;

    // create id for the user
    const id = _.uniqueId("user_");
    const dateAdded = Date.now();
    user.id = id;
    user.dateAdded = dateAdded;


    // Output the book to the console for debugging
    console.log(user);
    users.push(user);

    res.send('User is added to the database');
 });

app.get('/users', (req, res) => {
    res.json(users);
})

app.get('/users/:id', (req, res) => {
    // Reading isbn from the URL
    const id = req.params.id;

    // Searching books for the isbn
    for (let user of users) {
        if (user.id === id) {
            res.json(user);
            return;
        }
    }

        // Sending 404 when not found something is a good practise
        //https://expressjs.com/en/starter/faq.html
        res.status(404).send('User not founded');   
})

app.delete('/user/:id', (req, res) => {
// reading id from the url
    const id = req.params.id;

    // Remove item from the books array
    users = users.filter((user) => {
        return user.id !== id
        // return book.isbn !== isbn;
        // if (book.isbn !== isbn) {
        //     return true;
        // }
        // return false;
    })

    res.send('User is deleted')

})

//put
app.put('/user/:id', (req, res) => {
    console.log('hi');
    // Reading isbn from the URL
    const id = req.params.id;
    const updatedUser = req.body;

    console.log(id, updatedUser);

    // Remove item from the books array
    for (let i = 0; i < users.length; i++) {
        let user = users[i]
        if(user.id === id) {
            users[i] = updatedUser;
        }
    }

    res.send('User is edited!');
})

// launching our server
app.listen(port, () => {
    console.log(`Hello world app listening on port ${port}!`);
});