const fileData = require('fs');
const Express = require('express');
const bcrypt = require('bcrypt');

const server = Express();
server.use(Express.json());
const PORT = 9000;

const user_file = fileData.readFileSync('./Users.json', 'utf8');
const file_data = JSON.parse(user_file);

server.get('/users', (req, res)=>{
  res.status(200);
  res.send(file_data.users);
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

server.listen(PORT, ()=> {
  console.log(`Server is running on port ${PORT}`);
});