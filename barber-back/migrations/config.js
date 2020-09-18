const env = process.env.NODE_ENV || 'development';
const dialect = 'mysql'; // Or your dialect name

module.exports = {
  [env]: {
    dialect,
    url: 'mysql://root:123456@localhost:3306/barber_back',
    migrationStorageTableName: '_migrations'
  }
};
