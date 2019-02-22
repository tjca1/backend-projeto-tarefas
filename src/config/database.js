const mongoose = require('mongoose')
mongoose.Promise = global.Promise
//module.exports = mongoose.connect('mongodb://linux/todo')


  const opts = {
    keepAlive: true,
    keepAliveInitialDelay: 300000,
    socketTimeoutMS: 30000,
    poolSize: 50,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    autoReconnect: true,
    useNewUrlParser: true,
    dbName: "todo",
  };
 
  //return mongoose.connect('mongodb://linux:27017/mongo_para_node', opts);
  //'mongodb://mongo:mongo@mongodb:27017/mongo_para_node', opts
  
 //return module.exports = mongoose.connect('mongodb://linux/todo')

module.exports = mongoose.connect('mongo:mongo@linux:27017/', opts);

//module.exports = mongoose.connect('mongodb://linux:27017/todo')





