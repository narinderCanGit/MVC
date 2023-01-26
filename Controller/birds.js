exports.home=(req,res)=>{
    res.render("home", {name:"Birds Home"});
}

exports.about=(req,res)=>{
    res.render("about", {name:"Birds About"});
}