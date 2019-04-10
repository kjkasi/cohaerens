var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function(req, res) {
  async function clearAll() {
      //Принудительно удаляем все таблицы
      await models.sequelize.sync({ force: true });

      //Создаем список мест
      await models.Place.create({Name: 'Йошкар-Ола'});
      await models.Place.create({Name: 'Казань'});
      await models.Place.create({Name: 'Москва'});
      await models.Place.create({Name: 'Воронеж'});
      await models.Place.create({Name: 'Минск'});

      //Создаем список систем связи
      await models.SysCom.create({Name: 'GPS'});
      await models.SysCom.create({Name: 'GLONASS'});
      await models.SysCom.create({Name: 'Transit'});
      await models.SysCom.create({Name: 'Tsikada'});
      await models.SysCom.create({Name: 'BeiDou'});
      await models.SysCom.create({Name: 'Galileo'});
      await models.SysCom.create({Name: 'DORIS'});
      await models.SysCom.create({Name: 'IRNSS'});
      await models.SysCom.create({Name: 'QZSS'});

      await res.redirect('/');
  }
  clearAll();
});

module.exports = router;