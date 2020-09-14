const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 声明一个数据集 对象
var tabSchema = new Schema({
	id: String,
	title: String,
	nav: String,
	subTil: String
});
var tabModel = mongoose.model('Tab', tabSchema); //可以对这个实例化

// 将数据模型暴露出去
module.exports = tabModel;
