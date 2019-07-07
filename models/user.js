module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User',{
        Username: DataTypes.STRING,
        Password: DataTypes.STRING,
        Email: DataTypes.STRING,
        Desciption: DataTypes.STRING
    });

    return User;
};