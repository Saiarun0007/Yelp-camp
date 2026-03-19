const User = require('../models/user');

module.exports.renderRegister = (req, res) => {
    res.render('user/register')
}
module.exports.createUser = async (req, res, next) => {
    //console.log(registeredUser);
    // req.flash('success', 'Welcome to Yelp Camp!');
    // res.redirect('/campgrounds');
    try {
        const { email, username, password } = req.body;
        const user = new User({ email, username });
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            if (err) return next(err);
            req.flash('success', 'Welcome to Yelp Camp!');
            res.redirect('/campgrounds');
        })
    } catch (e) {
        req.flash('error', e.message || 'user name is already taken');
        res.redirect('/register');
    }

}

module.exports.renderLogin = (req, res) => {
    res.render('user/login')
}

module.exports.login = (req, res) => {
    req.flash('success', 'welcome back!');
    const redirectUrl = res.locals.returnTo || '/campgrounds';
    delete req.session.returnTo;

    res.redirect(redirectUrl);
}

module.exports.logout = (req, res, next) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        req.flash('success', 'Goodbye!');
        res.redirect('/');
    });
}