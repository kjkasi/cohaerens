var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const Place = mongoose.model('Place');
const SysCom = mongoose.model('SysCom');
const Freq = mongoose.model('Freq');
const User = mongoose.model('User');
const Recv = mongoose.model('Recv');

const passport = require('passport');
var Ensure = require('connect-ensure-login');

router.get('/', Ensure.ensureLoggedIn(), function(req, res) {
  async function clearAll() {
      //Принудительно удаляем все таблицы
      await Place.deleteMany();
      await SysCom.deleteMany();
      await Freq.deleteMany();
      await User.deleteMany();

      //Создаем список мест
      await Place.create({Name: 'Йошкар-Ола'});
      await Place.create({Name: 'Казань'});
      await Place.create({Name: 'Москва'});
      await Place.create({Name: 'Воронеж'});
      await Place.create({Name: 'Минск'});

      //Создаем список систем связи
      await SysCom.create({Name: 'GPS'});
      await SysCom.create({Name: 'GLONASS'});
      await SysCom.create({Name: 'Transit'});
      await SysCom.create({Name: 'Tsikada'});
      await SysCom.create({Name: 'BeiDou'});
      await SysCom.create({Name: 'Galileo'});
      await SysCom.create({Name: 'DORIS'});
      await SysCom.create({Name: 'IRNSS'});
      await SysCom.create({Name: 'QZSS'});

      //Создаем список частот
      await Freq.create({Name: 'L', Start: 1452000000, End: 1550000000});
      await Freq.create({Name: 'S', Start: 1930000000, End: 2700000000});
      await Freq.create({Name: 'C', Start: 3400000000, End: 5250000000});
      await Freq.create({Name: 'C', Start: 5725000000, End: 7075000000});
      await Freq.create({Name: 'X', Start: 7255000000, End: 8400000000});
      await Freq.create({Name: 'Ku', Start: 10700000000, End: 12750000000});
      await Freq.create({Name: 'Ku', Start: 12750000000, End: 14800000000});
      await Freq.create({Name: 'Ka', Start: 15400000000, End: 26500000000});
      await Freq.create({Name: 'Ka', Start: 27000000000, End: 30200000000});

      //Создаем список приёмников
      await Recv.create({Name: 'Javad'});
      await Recv.create({Name: 'Leyca'});
      await Recv.create({Name: 'Spectra'});
      await Recv.create({Name: 'Trible'});
      await Recv.create({Name: 'South'});

      //Создаем администратора
      await User.create({username: 'admin', password: 'admin', Email: 'admin@localhost.localdomain'});

      await res.redirect('/');
  }
  clearAll();
});

module.exports = router;