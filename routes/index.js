var express = require('express');
var router = express.Router();
const banner = require('../controller/banner.js');
const tab = require('../controller/tab.js');
const detalis = require('../controller/detalis.js');

/* 首页相关接口*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//轮播图接口
router.get('/getBanner', banner);

//tab数据接口
router.get('/getTab',tab);

//detalis数据接口
router.get('/getDetalis',detalis);
module.exports = router;
