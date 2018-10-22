var express = require('express');
var router = express.Router();
var Product = require('../models/product');
router.get('/', function (req, res, next) {
    if(req.query.search){
        
        const regex = new RegExp(escapeRegex(req.query.search), 'gi');
    Product.find({title:regex},function (err, docs) {
        if(err){
            res.send(err);
        }       
       res.json(docs);
    console.log("hit query");
    })}else{

        Product.find(function (err, docs) {
            if(err){
                res.send(err);
            }
            
           res.json(docs);
        console.log("did not hit query");
        })}
    }
)

router.get('/pendants', function(req,res,next){
    Product.find({'type': 'pendant'},function(err,docs){
        if(err) return next(err);
        res.json(docs);
    })
})
router.get('/magnets', function(req,res,next){
    Product.find({'type': 'magnet'},function(err,docs){
        if(err) return next(err);
        res.json(docs);
    })
})
router.get('/paintings', function(req,res,next){
    Product.find({'type': 'painting'},function(err,docs){
        if(err) return next(err);
        res.json(docs);
    })
})

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

module.exports = router;
