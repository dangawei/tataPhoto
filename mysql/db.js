//创建连接
var mysql=require('mysql');
var conn=mysql.createConnection({
	host:'localhost',
	user:'root',
	'password':'',
	'database':'tata'
})
// 连接数据库
conn.connect((err)=>{
	if(err){
		console.log('连接失败');
		throw err;
	}else{
		console.log('连接成功');
	}
})
module.exports = conn;