const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 声明一个数据集 对象
var bannerSchema = new Schema({
	id:String,
	name: {
		type: String,
	},
	url: {
		type: String
	},
});
var banner = mongoose.model('Banner', bannerSchema); //可以对这个实例化

// 将数据模型暴露出去
module.exports = banner;
