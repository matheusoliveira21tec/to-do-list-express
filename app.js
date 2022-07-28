const express = require('express');
const path = require('path');
const methodOverride = require('method-override');

require('./config/database');
const checklistRouter = require('./src/routes/checklist');
const rootRouter = require('./src/routes/index');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(methodOverride('_method',{methods: ['POST', 'GET']}));
app.set('views', path.join(__dirname,'src/views'));
app.set('view engine', 'ejs');

app.use('/', rootRouter);
app.use('/checklists', checklistRouter);

app.listen(3000,()=>{
    console.log('Servidor foi iniciado');
})