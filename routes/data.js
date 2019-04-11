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

      //Создаем список частот
      await models.Freq.create({Name: 'L', Start: 1452000000, End: 1550000000});
      await models.Freq.create({Name: 'S', Start: 1930000000, End: 2700000000});
      await models.Freq.create({Name: 'C', Start: 3400000000, End: 5250000000});
      await models.Freq.create({Name: 'C', Start: 5725000000, End: 7075000000});
      await models.Freq.create({Name: 'X', Start: 7255000000, End: 8400000000});
      await models.Freq.create({Name: 'Ku', Start: 10700000000, End: 12750000000});
      await models.Freq.create({Name: 'Ku', Start: 12750000000, End: 14800000000});
      await models.Freq.create({Name: 'Ka', Start: 15400000000, End: 26500000000});
      await models.Freq.create({Name: 'Ka', Start: 27000000000, End: 30200000000});

      await res.redirect('/');
  }
  clearAll();
});

module.exports = router;