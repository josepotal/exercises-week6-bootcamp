const express = require('express');
const app = express();

var pug = require('pug');

var blogEngine = require('./app/blog');

app.set('view engine', 'pug');
//app.engine('html', hbs.__express);
//app.use(express.static('public')); //not necessary

 
app.get('/', (req, res) => {
    const title = "My Blog";
    const entries = blogEngine.getBlogEntries()
    res.render('index', { title, entries})
});
 
app.get('/about', (req, res) => {
    const title = "About Me";
    res.render('about', { title })
});
 
app.get('/article/:id', (req, res) => {
    const idPost = req.params.id;
    const post = blogEngine.getBlogEntry(idPost);
    res.render('article',{ post });
});
 
app.listen(3000, ()=> (console.log('Listening at port 3000...')));