const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

const stuffCtrl = require('../controllers/stuff');

router.get('/', auth, stuffCtrl.getAllThings);
router.post('/', auth, stuffCtrl.createThing);
router.get('/:id', auth, stuffCtrl.getOneThing);
router.put('/:id', auth, stuffCtrl.modifyThings);
router.delete('/:id', auth, stuffCtrl.createThing);

module.exports = router;