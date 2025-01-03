
export default class UserDAO{

  #dbClient;
  constructor(dbClient){
    this.#dbClient = dbClient;
  }

  async findByUsername(username) {
        
    const res = await this.#dbClient.query('SELECT * FROM users WHERE username = $1', [username]);
    return res.rows[0];
  }

  async create(data) {

    const { username, password} = data;
    const res = await this.#dbClient.query(
      'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *',
      [username, password]
    );
    return res.rows[0];
  }
}