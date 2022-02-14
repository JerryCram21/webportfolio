const config = require('./config/config');
const express = require('express'); //node's framework, eases construction in node
const app = express(); //way to call and use express
//const app = require('express')(); //shortcut, sample only, wrong practice

app.set('view engine', config.server.view);
//express.static() - loading of static resources
//app.use('/img',express.static(__dirname + '/assets/img'));


app.get('/',(req,res)=>{
    res.send('HELLO WORLD');
});


//404 - 2 types
app.use(function(req, res, next) {
    res.status(404).send("Error 404: Page Not Found!");
});
/*app.get('*', (req, res) => {
    res.status(404).send("Error 404: Page Not Found!");
	//res.status(404).render('errors/404', { title: 'Page Not Found', message: 'Error 404: Page Not Found!' });
});*/


app.listen(config.server.port, ()=> 
    console.log(`Server listening on port ${config.server.port}`)
);
