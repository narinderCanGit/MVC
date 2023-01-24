exports.home=(req,res)=>{
    res.render("home", {name:"Wiki Home"});
}

exports.about=(req,res)=>{
    res.render("home", {name:"Wiki About"});
}