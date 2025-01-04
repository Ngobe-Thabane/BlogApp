
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
    if(token){
      return res.status(200).header("x-auth-token", token).send({username: username});
    }
  }
  return res.status(403).send();
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
