module.exports.home = function (req, res) {
    console.log('I am getting');
    return res.render("home", {
        title: "Home"
    })
}