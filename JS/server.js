const fileData = require('fs');
const Express = require('express');
const bcrypt = require('bcrypt');
const axios = require('axios');
const cherio = require('cheerio');

const server = Express();
server.use(Express.json());
const PORT = 9000;

const user_file = fileData.readFileSync('./Users.json', 'utf8');
const file_data = JSON.parse(user_file);


server.post('/login', (req, res) => {
  file_data.users.forEach((user)=>{

    if (user.name === req.body.name){
      if (bcrypt.compareSync(req.body.password, user.password)){
        return res.status(200).send('logged in');
      }
    }
  });
  
  return res.status(403).send('Username or Password Incorect');
})

server.post('/register', (req, res)=>{
  
  bcrypt.genSalt(10, (err, salt)=>{

    if(err) res.status(500).send('Server error while generating salt');

    bcrypt.hash(req.body.password, salt, (err, hash)=>{
      
      if(err) res.status(400).send('Error while hashing password');

      req.body.password = hash;
      file_data.users.push(req.body);
      fileData.writeFileSync('./Users.json', JSON.stringify(file_data, null, 2), 'utf-8');
      res.status(200).send('Registration succeful');
      
    })    
  });
})

server.get('/my-resources', (req, res) =>{
  file_data.users.forEach((user) =>{
      if(user.username === "Linda"){
        return res.status(200).send(user.resources);
      }
  })
})

server.post('/save-site', (req, res) =>{
  scrapeHTML(req.body.url);
  return res.status(200).send('Resource saved');
})

server.listen(PORT, ()=> {
  console.log(`Server is running on port ${PORT}`);
});


async function scrapeHTML(website_url) {

  const {data} = await axios.get(website_url);
  const $ = cherio.load(data);

  const extracted_data = {};

  extracted_data.url = website_url;
  extracted_data.title = $('title').text();
  extracted_data.description = $('meta[name = "description"]').attr('content');

  file_data.users.forEach((user) =>{
    if(user.username === "Linda"){
      user.resources.push(extracted_data);
    }
  })

  fileData.writeFileSync('./Users.json', JSON.stringify(file_data, null, 2), 'utf-8');
}