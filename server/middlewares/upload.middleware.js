import client from "../configs/db.config.js";

class UploadManager {
  constructor() {
    this.dbClient = client;
  }

  async uploadFile(fileName, fileExtension, location) {
    const query = `
      INSERT INTO smartfs.public.files(fileName, fileExtension, location)
      VALUES($1, $2, $3)
      RETURNING *;
    `;

    const values = [fileName, fileExtension, location];

    try {
      console.log("Executing query:", query, "with values:", values);
      const result = await this.dbClient.query(query, values);
      console.log("File insertion complete");
      return result.rows[0];
    } catch (err) {
      console.error("Error in inserting data:", err);
      throw err;
    }
  }
}

export default UploadManager;
