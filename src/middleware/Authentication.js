
import bcrypt from 'bcrypt';


export function hashPassword(password){
  const salt = bcrypt.genSaltSync();
  const hashPassword = bcrypt.hashSync(password, salt);

  return hashPassword;
}


export function comparePassword(hashPassword, password){
  
  return bcrypt.compareSync(password, hashPassword);
}