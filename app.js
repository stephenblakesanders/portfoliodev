// imports
const express = require('express')
const app = express()
const port = 3000


// static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

// set views
app.set('views', './views')
app.set('view engine', 'ejs')

// page routes
app.get('/', (req, res, next) => {
    res.render('index', { page:'Home', menuId:'home' })
})

app.get('/about', (req, res, next) => {
    res.render('about', { page: 'About', menuId:'about' })
})

app.get('/contact', (req, res, next) => {
    res.render('contact', { page: 'Contact', menuId:'contact' })
})

// listen on port 3000
app.listen(port, console.info('listening on port 3000'))
console.info(process.pid)