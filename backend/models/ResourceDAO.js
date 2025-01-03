
export default class ResourceDAO{
  #dbClient;
  constructor(dbClient){
    this.#dbClient = dbClient;
  }

  async saveResourse(resourceData){
    
    const savedResource = await this.#dbClient.query("INSERT INTO resources VALUES ($1, $2, $3, $4) RETURNING *", [resourceData.url, resourceData.title, resourceData.description, resourceData.username]);

    return savedResource.rows;
  }

  async findResourcesByUsername(username){
    const resources = await this.#dbClient.query('SELECT * FROM resources WHERE username = $1', [username]);
    return resources.rows;
  }
}