var Sequelize = require('sequelize');

/*
var sequelize = new Sequelize ('d9uond5jp6i5gp', 'axqepdpagxkjdr', 'd9c118d867c325068171bd51d23c6fc849b24bd5aca424dd0e1c801a9da647e9', {
    dialect: 'postgres',
    host: 'ec2-54-247-85-251.eu-west-1.compute.amazonaws.com',
    port: '5432',
    ssl: true,
    sslmode='require',
});
*/

//
//process.env.DATABASE_URL

var sequelize = new Sequelize (
  'postgres://bhlninkovluwtv:d8a7796924d5d0b9be43f99f0219e9fc82401fa45042593fe32c328a0909c268@ec2-54-247-85-251.eu-west-1.compute.amazonaws.com:5432/dbviv5e4ncrt0m?ssl=true',
  {
    pool:{
      max: 20,
      idle: 30000,
      acquire: 60000,
    }
  }
  );

var models = {
  Place: sequelize.import('./place'),
  SysCom: sequelize.import('./syscom'),
  Freq: sequelize.import('./freq'),
};

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;