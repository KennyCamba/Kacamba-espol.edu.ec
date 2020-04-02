const express = require("express");
var path = require("path");

const app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname + ''));
/* console.log(path.join(__dirname, "./")); */

app.get('/', (req, res) => {
    res.render("index");
});


var port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listen in port ${port}`);
})