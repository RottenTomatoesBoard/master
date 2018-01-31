//This is the Sequelize model for the comments database

const Sequelize = require('sequelize');

class Comments{
  constructor(conString, tableName){
    this.tableName = tableName;
    this.sequelize = this.init(conString),
    this.model = this.createModel(this.tableName);
    this.authenticate = this.authenticate();
  }

  init(conString){
    return new Sequelize(conString);
  }

  authenticate(){
    this.model.sync();
      this.sequelize.authenticate()
    .then(() => {
      console.log('Connection to comments table has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });
  }

  createModel(tablename){
  console.log('creating comments table with '+ tablename);
  return this.sequelize.define(tablename, {
    body: Sequelize.STRING,
    user: Sequelize.STRING,
   movieId: Sequelize.STRING},
  {freezeTableName: true});
}

  getAll(cb){
    this.model.sync();
    this.model.findAll().then(function(rows) {
       var data = [];
       for(var i = 0; i < rows.length; i++) {
         data.unshift(rows[i].dataValues);
       }
       return cb(data);
    });
  }

  insertIntoTable(values, callback){
    var tableRef = this.model;
    this.model.sync().then(function(){
      tableRef.create(values);
      callback();
    });
  }

  findById(id, cb){
    console.log('passed id ' +id);
    this.model.findAll({
      where: {
        owner: id
      }
    }).then(function(rows) {
       var data = [];
       for(var i = 0; i < rows.length; i++) {
         data.push(rows[i].dataValues);
       }
       console.log(rows.length);
       return cb(data);
    });
  }

  findByTag(tag, cb){
    console.log('passed tag ' +tag);
    this.model.findAll({
      where: {
        tags: {ilike: '%'+tag+'%'}
      }
    }).then(function(rows) {
       var data = [];
       for(var i = 0; i < rows.length; i++) {
         data.push(rows[i].dataValues);
       }
       console.log(rows.length);
       return cb(data);
    });
  }

  global(id, cb){
    console.log('passed id ' +id);
    this.model.findAll({
      where: {
        id: id
      }
    }).then(function(rows) {
       var data = [];
       for(var i = 0; i < rows.length; i++) {
         data.push(rows[i].dataValues);
       }
       console.log(rows.length);
       return cb(data);
    });
  }

  editDesc(id, desc,tag, cb){
    var tableRef = this.model;
    this.model.findOne({
      where: {
        id: id
      }
    })
    .then(function(rows){
      console.log(tableRef);
      tableRef.update({
          description: desc,
          tags:tag

        }, {where: {id:id}});
    })
    cb();
  };


  deleteOne(id,cb){
    this.model.destroy({
    where: {
        id:id
      }
    })
    cb();
  }


  getUserByUsername(username, callback){
    this.model.findAll({
      where: {
        username: username
      }
    })

    .then(function(rows) {
       var data = [];
       for(var i = 0; i < rows.length; i++) {
         data.push(rows[i].dataValues);
       }

       //console.log(data);
       return callback(data);
    })
  }
}




// export Table class
module.exports = Comments;

//
