import jwt from 'jsonwebtoken'

const secretekey = 'bXkgc2VjcmV0ZSBrZXkK';

export function generateToken(payload){
  const token = jwt.sign(payload, secretekey);
  return token;
}

export function validateToken(req, res, next){
  
  const token = req.headers.authorization.split(' ')[1];

  const validate = jwt.verify(token, secretekey, (err, payload)=>{
    req.user = payload;
    next();
  })
}