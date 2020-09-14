const detalisModel = require('../model/detalis.js');

async function detalisContr(req,res,next){
	console.log("req",req.query.type);
	const list = await detalisModel.find({type:req.query.type},function(err,doc){
		if(err){
			console.log(err);
		}
		res.send(doc)
	});
	// res.send(list);
}

module.exports = detalisContr;