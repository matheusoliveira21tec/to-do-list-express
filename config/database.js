const mongoose = require('mongoose');

main().catch(err => console.log(err));
main().then(()=> console.log("Conectado ao MongodB"));

async function main() {
  await mongoose.connect('mongodb://localhost/todo-list');
}