const reqFilter = (req, resp, next) => {
    if (!req.query.age) {
        resp.send("Please provide your age");
    }
    else if (req.query.age<18) {    //http://127.0.0.1:5000/?age=12
        resp.send("You are under aged")
    }
    else {
        next();
    }
}

module.exports = reqFilter;