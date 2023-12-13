const express = require('express');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'pug');
app.use(logger);
app.use(express.urlencoded({ extended: true }));

app.get('/', logger, (req, res) => {
    res.render('index', { 'text' : 'Hello' });
});

const userRouter = require('./routes/users');

app.use('/users', userRouter);

function logger(req, res, next) {
    console.log(req.originalUrl);
        next();
}

app.listen(3000);