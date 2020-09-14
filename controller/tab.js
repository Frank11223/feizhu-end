const tabModel = require('../model/tab.js');

async function tabContr(req,res,next){
	const list = await tabModel.find({},function(err,doc){
		if(err){
			console.log(err);
		}
	});
	res.send(list);
}

module.exports = tabContr;