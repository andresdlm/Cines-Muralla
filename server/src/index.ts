import express, { Application } from "express";
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from "./routes/indexRoutes";
import moviesRoutes from "./routes/moviesRoutes";
import sedesRoutes from "./routes/sedesRoutes"
import salasRoutes from "./routes/salasRoutes";

class Server {

    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000); // Define el puerto del servidor
        this.app.use(morgan('dev')); // Imprime todas los request del servidor en consola
        this.app.use(cors()); // Hace que Angular pueda pedir datos al servidor
        this.app.use(express.json()); // Acepta y entiende formatos Json de aplicaciones cliente
        this.app.use(express.urlencoded({extended: false})); // Enviar desde un formulario HTML
    }

    routes(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/movies', moviesRoutes);
        this.app.use('/api/sedes', sedesRoutes);
        this.app.use('/api/salas', salasRoutes);
    }

    // Configura el puerto al que va a responder el servidor
    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'))
        })
    }
}

const server = new Server();
server.start();