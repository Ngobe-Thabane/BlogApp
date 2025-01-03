import pg from 'pg';
import UserDAO from './UserDAO.js';
import ResourceDAO from './ResourceDAO.js';

export default class DataBase{
  
  #configs = {
    host:"172.17.0.1",
    database: "postgres",
    user: "postgres",
    password: "mysecretpassword",
    port: 5432
  }

  #pocketDb;
  #userDAO;
  #projectResources;
  
  constructor(){
    const {Pool} = pg;
    this.#pocketDb = new Pool(this.#configs);
    this.#pocketDb.connect();    
    this.#userDAO = new UserDAO(this.#pocketDb);
    this.#projectResources = new ResourceDAO(this.#pocketDb);
  }
  
  getUserDAO(){
    return this.#userDAO;
  }

  getProjectResourceDAO(){
    return this.#projectResources;
  }
  
};
