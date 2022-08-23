var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
var campgrounds = [
    {name: 'Salmon Creek', image: 'https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg'},
    {name: 'Granite Hill', image: 'https://farm5.staticflickr.com/4016/4270995674_9fd4546267.jpg'},
    {name: 'Mountain Goat\'s rest', image: 'https://farm1.staticflickr.com/130/321487195_ff34bde2f5.jpg'},
    {name: 'Lynnwood', image: 'https://farm5.staticflickr.com/4548/26736400859_b652c36b2b.jpg'}
];
app.get('/', function(req, res){
    res.render('landing');
})

app.get('/campgrounds', function(req, res){
    
    res.render('campgrounds', {campgrounds:campgrounds})
})
app.post('/campgrounds', function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampgrond = {name:name, image:image}
    campgrounds.push(newCampgrond);
    //redirect back to campgrounds
    res.redirect('/campgrounds')
})

app.get('/campgrounds/new', function(req, res){
    res.render('new')
})

app.listen(3001, function(){
    console.log('it is running fine');
})