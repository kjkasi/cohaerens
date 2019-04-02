module.exports = (sequelize, DataTypes) => {
    var Place = sequelize.define('Place',{
        Name: DataTypes.STRING
    });

    return Place;
};