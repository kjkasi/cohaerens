var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(__filename);
//var db        = {};

var sequelize = new Sequelize ('d9uond5jp6i5gp', 'axqepdpagxkjdr', 'd9c118d867c325068171bd51d23c6fc849b24bd5aca424dd0e1c801a9da647e9', {
    dialect: 'postgres',
    host: 'ec2-54-247-85-251.eu-west-1.compute.amazonaws.com',
    port: '5432',
});

var models = {
  Place: sequelize.import('./place'),
};

/*
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
*/

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;