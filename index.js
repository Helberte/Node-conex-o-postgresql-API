const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

// rotas
const routeBase = require('./routes/base');


// config rotas
app.use(routeBase);

app.listen(PORT, function(erro){
  if(erro){
    console.log('deu ruim');
  }else{
    console.log(`server up, port: ${PORT}`);
  }
})