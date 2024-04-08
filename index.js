
//import required modules 

const joseph = require('express')

//stroing port in variable 
const port = 9000

// create an express application 
const app = joseph()

//define a route handler for the root path 

app.get('/', (req, res) =>{
    res.send('Welcome to my Adugbo')
})

app.get('/submit', (req, res) =>{
    res.send('received post request')
})

app.get('/about', (req, res) =>{
    res.send('about page')
})

app.get('/contact', (req, res) =>{
    res.send('contact page')
})

app.get('/login', (req, res) =>{
    res.send('login page')
})

app.get('/signup', (req, res) =>{
    res.send('signup page')
})
//startig the server
// to start the server you have to listen to a port
// we can de

//app.listen always comes lasts 
app.listen(port, () =>{
    console.log(`Server started successfully`)
})

