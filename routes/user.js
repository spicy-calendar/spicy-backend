const userCtrl = require('../controllers/userCtrl');

module.exports = (router) => {
    router
        .route('/test')
        .get(userCtrl.test);
    router
        .route('/connect-calendar')
        .post(userCtrl.connectCalendar);
}