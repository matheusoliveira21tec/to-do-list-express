const express = require('express');
require('./config/database');
const checklistRouter = require('./src/routes/checklist');
const app = express();
app.use(express.json());
app.use('/checklist', checklistRouter);

app.listen(3000,()=>{
    console.log('Servidor foi iniciado');
})