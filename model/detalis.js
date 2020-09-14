const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 声明一个数据集 对象
var detalisSchema = new Schema({
	url: String,
	title: String,
	des: String,
	subTil: String,
	price: String,
	buyed: String
});
var detailsModel = mongoose.model('Detail', detalisSchema); //可以对这个实例化

// 将数据模型暴露出去
module.exports = detailsModel;
