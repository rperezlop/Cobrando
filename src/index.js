const app = require('./server/app');
require('dotenv').config()

function main() {
      const port = process.env.PORT || 1234;
      app.set('port', port);

      app.listen(port, () => {
            console.log(`✔ Servidor corriendo en el puerto ${port}`);
      });
}
main();
