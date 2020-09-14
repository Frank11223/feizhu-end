const  banner = require('../model/banner.js');

async function bannerModel(req,res,next){
	// console.log("进来了",banner.find())
	const list = await banner.find({},function(err,doc){
		console.log(doc);
		if(err){
			console.log(err);
		}else{
			res.send(doc);
		}	
	});
	// console.log(list);
	// if(list.length>0){
	// 	res.send(list);
	// }
	 // res.render('index', { title: 'Express' });
	 // res.send(list);
}

module.exports = bannerModel;