const userCtrl = require('../controllers/user');

module.exports = (router) => {
    router
        .route('/test')
        .get(userCtrl.test);
}