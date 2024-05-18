/* -------------------------- Import ------------------------- */
import express from 'express'
import morgan from 'morgan';

import {join, dirname} from 'path'
import {fileURLToPath} from 'url'
import {engine} from 'express-handlebars'

/* ----------------------------- initializacion ----------------------------- */
const app = express();

/* --------------- Evitar colisiones se pone doble guion bajo variable dirname --------------- */
const __dirname = dirname(fileURLToPath(import.meta.url));

/* -------------------------------- settings -------------------------------- */
app.set('port', process.env.PORT || 3000);
app.set('views', join(__dirname, 'views'));
app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutsDir: join(app.get('views'), 'layouts'),
    partialsDir: join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine','.hbs');

/* ------------------------------- Middlewares ------------------------------ */
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

/* --------------------------------- routes --------------------------------- */
app.get('/', (req, res) => {
    res.json({"message": "Hola Mundo"})
});

/* ------------------------------ Public files ------------------------------ */
app.use(express.static(join(__dirname, 'public') ));

/* ------------------------------- Run server ------------------------------- */
app.listen(app.get('port'), () => {
    console.log('Server listening on port ', app.get('port'));
});