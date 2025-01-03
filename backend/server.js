import App, { json } from 'express';
import { createAccount, login, saveResources, getUserResources } from './controllers/UserController.js';
import cors from 'cors';
import { validateToken } from './middleware/jwtUtilis.js';
import DataBase from './models/DataBase.js';


const SERVER = App();
// SERVER.use(cors());
// SERVER.use(json());

// const PORT = 9000;

// SERVER.post('/createAccount',createAccount);
// SERVER.post('/logIn', login);
// SERVER.post('/saveResource', validateToken, saveResources);
// SERVER.get('/resources', validateToken, getUserResources );

const db = new DataBase();

// SERVER.listen(PORT, ()=>{
//   console.log("Server is running");
// });