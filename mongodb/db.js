const mongoose = require('mongoose');
const chalk = require('chalk');

//连接数据库
mongoose.connect("mongodb://localhost/feizhu",{useNewUrlParser:true,useUnifiedTopology: true,useCreateIndex:true});
mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.once('open',()=>{
	console.log(chalk.green('数据库连接成功'));
})
db.on('error',()=>{
	console.error(chalk.red('数据库连接失败'+error));
})
db.once('close',()=>{
	console.log(chalk.red('数据库连接断开，即将重新连接'));
	mongoose.connect("mongodb://localhost/feizhu",{server:{auto_reconnect:true}})
})

// export default db;
module.exports= db;