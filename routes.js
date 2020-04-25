var express = require('express'),
router = express.Router(),
itemCtrl = require('./Controllers/catalog-controller');

router.post('/items', itemCtrl.createItem);
router.get('/items', itemCtrl.getItems);
router.get('/items/:_id', itemCtrl.getItem);
router.delete('/items/:_id', itemCtrl.deleteItem);
router.put('/items/:_id', itemCtrl.updateItem);

module.exports = router;
