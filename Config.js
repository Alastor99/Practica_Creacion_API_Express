/*2. Configura la aplicación Express creando un archivo js, importe Express
y cree una instancia de la aplicación.

3. Configure el middleware que necesite.*/

const express = require('express');
const morgan = require('morgan');

const api = express();

api.set('port', process.env.PORT || 3000);
api.set('json spaces', 2);

api.use(morgan('dev'));
api.use(express.urlencoded({extended:false}));
api.use(express.json());

api.get('/', (req, res) => {
    res.send('Practica de API express');
});

api.use(require('./Method/ClientMethod'));

api.listen(api.get('port'), () => {
  console.log(`Captando en el puerto: ${api.get('port')}...`);
});