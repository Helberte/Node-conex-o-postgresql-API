const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
var objeto = "[";

function minhaFuncao(elemento){

  let { id, name} = elemento;

  objeto += "{ 'id': '" + id + "', ";
  objeto += "'name': '" + name + "' },";
}

async function getGenero(req, res){
  
  const generos = await prisma.genero.findMany();  

  generos.forEach(minhaFuncao);

  objeto += "]";

  res.json(objeto);
}

module.exports = { getGenero };