module.exports = (sequelize, DataTypes) => {
    var Freq = sequelize.define('Freq',{
        Name: DataTypes.STRING,
        Desciption: DataTypes.STRING,
        //Range: DataTypes.INTEGER
        Start: DataTypes.BIGINT,
        End: DataTypes.BIGINT
    });

    return Freq;
};