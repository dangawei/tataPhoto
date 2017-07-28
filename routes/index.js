var express = require('express');
var router = express.Router();
var conn = require('../mysql/db');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/story_ContactUs',function(req,res){
    res.render('story_ContactUs', {});
});
router.get('/story_AboutUs',function(req,res){
    res.render('story_AboutUs', {});
});
router.get('/help',function(req,res){
    res.render('help', {});
});
router.get('/customer_Prise',function (req,res) {
    res.render('customer_Prise',{});
})
router.get('/video',function(req,res){
    res.render('video', {message:[
        {
            id:1,
            name:'2015洛阳他她摄影全新启幕',
            img:'http://www.lytata.com/Upload/uploadify/D_Video_Video_Img/20150709100753956424071_920_500.gif',
            video:'http://player.youku.com/player.php/sid/XMTI3OTg3MjIwOA==/v.swf'
        },
        {
            id:2,
            name:'洛阳他她摄影出品：7月预告片',
            img:'http://www.lytata.com/Upload/uploadify/D_Video_Video_Img/20150707074805077728713_920_500.jpg',
            video:'http://player.youku.com/player.php/sid/XMTI3OTQyNDQ0MA==/v.swf'
        },
        {
            id:3,
            name:'洛阳他她摄影出品：6月花语系列花絮',
            img:'http://www.lytata.com/Upload/uploadify/D_Video_Video_Img/20150707072120914073715_920_500.jpg',
            video:'http://player.youku.com/player.php/sid/XMTI3OTg3MjIwOA==/v.swf'
        },
        {
            id:4,
            name:'2015年2月洛阳他她摄影作品花絮',
            img:'http://www.lytata.com/Upload/uploadify/D_Video_Video_Img/20150709092256127127261_920_500.jpg',
            video:'http://player.youku.com/player.php/sid/XMTI3OTg3MjIwOA==/v.swf'
        },
    ]});
});

router.get('/works',function(req,res){
    conn.query('SELECT * FROM works',(err,results)=>{
        if (err) {
            next(err,req,res);
            return;
        }//返回错误页面
        res.render('works', {images:results});
    })
});
router.get('/enjoy',function(req,res){
    console.log(req.query.id)
    conn.query('SELECT * FROM enjoy',(err,results)=>{
        if (err) {
            next(err,req,res);
            return;
        }//返回错误页面
        var photoAlbum = [
            {id:1,name:'客人宁静',src:'../images/enjoy/photo-album/1.jpg'},
            {id:2,name:'客人菲菲',src:'../images/enjoy/photo-album/2.jpg'},
            {id:3,name:'客人莹',src:'../images/enjoy/photo-album/3.jpg'},
            {id:4,name:'客人小美',src:'../images/enjoy/photo-album/4.jpg'},
            {id:5,name:'客人小雨',src:'../images/enjoy/photo-album/5.jpg'},
            {id:6,name:'客人莹',src:'../images/enjoy/photo-album/6.jpg'},
            {id:7,name:'绽放',src:'../images/enjoy/photo-album/7.jpg'},
            {id:8,name:'仲夏梦',src:'../images/enjoy/photo-album/8.jpg'},
            {id:9,name:'森之迷藏',src:'../images/enjoy/photo-album/9.jpg'}
        ];
    var girlfriends = [
        {id:1,name:'sisters',src:'../images/enjoy/girlfriends/1.jpg'},
        {id:2,name:'李意蓉',src:'../images/enjoy/girlfriends/2.jpg'},
        {id:3,name:'森之密藏',src:'../images/enjoy/girlfriends/3.jpg'},
        {id:4,name:'客人田楠',src:'../images/enjoy/girlfriends/4.jpg'},
        {id:5,name:'客人小雨',src:'../images/enjoy/girlfriends/5.jpg'},
        {id:6,name:'青春与梦想',src:'../images/enjoy/girlfriends/6.jpg'},
        {id:7,name:'sisters',src:'../images/enjoy/girlfriends/7.jpg'},
        {id:8,name:'佳媛1',src:'../images/enjoy/girlfriends/8.jpg'},
        {id:9,name:'佳媛2',src:'../images/enjoy/girlfriends/9.jpg'}
    ];
    var family = [
        {id:1,name:'客人欣然',src:'../images/enjoy/family/1.jpg'},
        {id:2,name:'客人梁坤',src:'../images/enjoy/family/2.jpg'},
        {id:3,name:'客人 宝宝',src:'../images/enjoy/family/3.jpg'},
        {id:4,name:'客人程红',src:'../images/enjoy/family/4.jpg'},
        {id:5,name:'客人夏夏',src:'../images/enjoy/family/5.jpg'},
        {id:6,name:'青春 真真',src:'../images/enjoy/family/6.jpg'},
        {id:7,name:'客人琛',src:'../images/enjoy/family/7.jpg'},
        {id:8,name:'客人君君',src:'../images/enjoy/family/8.jpg'},
        {id:9,name:'客人颖颖',src:'../images/enjoy/family/9.jpg'}
    ];
        res.render('enjoy', {images:results,photoAlbum,girlfriends,family});
    })
});
router.get('/zhanshi',function(req,res,next) {
    let sql = `SELECT * FROM enjoy WHERE id= ?`;
    conn.query(sql, req.query.id, (err,results) => {
        if (err) {
            next(err, req, res);
            return;
        }
        res.render('zhanshi', {images: results});
    })
})
router.get('/theEarth',function(req,res){
    conn.query('SELECT * FROM earthin',(err,results)=>{
        if (err) {
            next(err,req,res);
            return;
        }//返回错误页面
        var imagesOut = [
            {id:1,name:'巴厘岛 齐欢',src:'../images/the-earth/Out/1.jpg'},
            {id:2,name:'巴厘岛 齐欢',src:'../images/the-earth/Out/2.jpg'},
            {id:3,name:'巴厘岛 齐欢',src:'../images/the-earth/Out/3.jpg'},
            {id:4,name:'巴厘岛齐欢',src:'../images/the-earth/Out/4.jpg'},
            {id:5,name:'巴厘岛 彭乐',src:'../images/the-earth/Out/5.jpg'},
            {id:6,name:'巴厘岛彭乐',src:'../images/the-earth/Out/6.jpg'},
            {id:7,name:'巴厘岛彭乐',src:'../images/the-earth/Out/7.jpg'},
            {id:8,name:'普吉街道篇',src:'../images/the-earth/Out/8.jpg'},
            {id:9,name:'普吉姐妹篇',src:'../images/the-earth/Out/9.jpg'}
        ]
        res.render('theEarth', {imagesIn:results,imagesOut});
    })
});
module.exports = router;
