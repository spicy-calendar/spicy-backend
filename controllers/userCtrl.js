const calendarCtrl = require('./calendarCtrl');

module.exports = {
    test: (req, res) => {
        res.send('Test');
    },
    connectCalendar: (req, res) => {
        try{
            const { access_token, refresh_token } = req.body;
            // User.save(access_token, refresh_token);

            // const calendarData = calendarCtrl.getCalendarFromGoogle(access_token, refresh_token);
            // res.status(201).send({
                // calendarData
            // });

            res.send('Test');
        }catch(err){
            // res.status(201).send({
                // err
            // });
        }
    }
}