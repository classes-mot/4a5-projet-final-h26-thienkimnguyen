import express from 'express';
import avisRoutes from './routes/avis-routes.js';
import usersRoutes from './routes/users-routes.js';
import errorHandler from './handler/error-handler.js';
import { connectDB } from './util/bd.js';

await connectDB();

const app = express();
app.use(express.json());

app.use('/api/avis', avisRoutes);
app.use('/api/users', usersRoutes);

app.use((req, res, next) => {
    const error = new Error("La route n'est pas trouvée..");
    error.code = 404;
    next(error);
})

app.use(errorHandler);

app.listen(5000, () => {
    console.log("Le serveur écoute au", `http://localhost:5000`);
})