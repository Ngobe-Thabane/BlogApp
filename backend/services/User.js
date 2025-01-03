import { hashPassword, comparePassword } from "../middleware/Authentication.js";
import { generateToken } from "../middleware/jwtUtilis.js";
import DataBase from "../models/DataBase.js";

import axios from 'axios';
import {load} from 'cheerio';


const db = new DataBase();

export async function createUser(username, password){

  const user = {username: username, password: hashPassword(password)};

  return db.getUserDAO().create(user);

}

export async function logIn(username, password) {

  try{

    const user = await db.getUserDAO().findByUsername(username);
    if(comparePassword(user.password, password)){
      return generateToken(user);
    }

    return false;

  }catch(err){
    console.log(err)
    return false;
  }
}

export async function saveResourse(url, username){

  const results =  await scrapTheWebpage(url);
  
  if(results !== false){
    results.username = username;
    return await db.getProjectResourceDAO().saveResourse(results);
  }

  return false;
}

export async function getResources(username) {
  const resources = await db.getProjectResourceDAO().findResourcesByUsername(username);
  return resources;
}

async function scrapTheWebpage(url){

  try{

    const {data} = await axios.get(url);
    const $ = load(data);
    const title = $('title').text();
    const description = $('meta[name=description]').attr('content');

    return {url: url,title:title, description: description};

  }
  catch(err){
    return false;
  }
}