const {
  index, create
} = require('../controllers/people');

 module.exports = router => {
   router.post('/people', create);
   router.get('/people', index);
 };
