module.exports = (sequelize, DataTypes) => {
    var SysCom = sequelize.define('SysCom',{
        Name: DataTypes.STRING,
        Desciption: DataTypes.STRING
    });

    return SysCom;
};