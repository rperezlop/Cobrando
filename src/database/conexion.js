const Sequelize = require('sequelize');
//Conexión con la db que está en el contenedor de docker 
const sequelize = new Sequelize(
  'cobrando',//bd
  'root',//user
  'admin',//pss
  {
    host: 'localhost',
    dialect: 'postgres',
    port: 5435,
    logging: false
  }
)
//Comprobar si la conexión es correcta 
sequelize.authenticate()
  .then(() => {
    console.log(`✔ conexión a base de datos...`)
  })
  .catch(err => {
    console.log(`Error de conexión con base de datos...${err}`)
  })

module.exports = sequelize;


