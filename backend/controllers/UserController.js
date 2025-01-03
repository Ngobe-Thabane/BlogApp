
import { createUser, logIn, saveResourse, getResources } from "../services/User.js";

export async function createAccount(req, res){

  const {username, password} = req.body;
  const user = createUser(username, password);

  return res.status(200).send(user);
}

export async function login(req, res){

  const {username, password} = req.body;

  if(username !== "" && password !== ""){

    const token = await logIn(username, password);
    if(token !== false){
      res.appendHeader("Token", token);
      return res.status(200).send('loggen in');
    }
  }

  return res.status(403).send('Password or Username Incorect');
}


export async function saveResources(req, res) {

  const {url} = req.body;
  const {username} = req.user;

  if (url !== ''){
    const result = await saveResourse(url, username);
    return res.status(200).send(result);
  }
  return res.status(500).send('resource not saved');
}

export async function getUserResources(req, res) {

  const {username} = req.user;
  const resources = await getResources(username);
  res.status(200).send(resources);

}
