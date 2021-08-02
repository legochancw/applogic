module.exports = {
  HOST: "34.121.36.6",
  USER: "root",
  PASSWORD: "P@ssw0rd",
  DB: "mobility",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};