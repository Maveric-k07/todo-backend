import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import todoRoutes from "./views/routes.js";

const app = express();

app.use(cors({
	origin:"https://mytodo-app-frontend.herokuapp.com/",
	credentials:true
}));

const port = process.env.PORT || 8080;
const CONNECTION_URL = 'mongodb+srv://akhil:freerunning2@cluster0.prahn.mongodb.net/?retryWrites=true&w=majority';
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', todoRoutes);

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(port, () => console.log(`Server Running on port: http://localhost:${port}`)))
    .catch((error) => console.log(`${error} did not connect`));