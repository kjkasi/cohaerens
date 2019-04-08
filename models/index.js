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

var sequelize = new Sequelize ('postgres://axqepdpagxkjdr:d9c118d867c325068171bd51d23c6fc849b24bd5aca424dd0e1c801a9da647e9@ec2-54-247-85-251.eu-west-1.compute.amazonaws.com:5432/d9uond5jp6i5gp?ssl=true');

var models = {
  Place: sequelize.import('./place'),
  SysCom: sequelize.import('./syscom'),
};

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;