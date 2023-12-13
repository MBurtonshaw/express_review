const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('User List');
});

router.get('/new', (req, res) => {
    res.render('users/new');
});

router.post('/', (req, res) => {
    const isValid = true;
    if (isValid) {
        users.push({ firstName : req.body.firstName });
        res.redirect(`/users/${users.length - 1}`, {firstName});
    } else {
        consoole.log('error');
        res.render('users/new', { firstName: req.body.firstName });
    }
});

router
    .route('/:id')
        .get((req, res) => {
            console.log(req.user);
            res.send(`Find user with id ${req.params.id}`);
        })
        .put((req, res) => {
            res.send(`Edit user with id ${req.params.id}`);
        })
        .delete((req, res) => {
            res.send(`Delete user with id ${req.params.id}`);
        })

        const users = [{name: 'Kyle'}, {name: 'Sally'}];
        router.param('id', (req, res, next, id) => {
            req.user = users[id];
            next();
        })

module.exports = router;