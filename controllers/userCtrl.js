const calendarCtrl = require('./calendarCtrl');

module.exports = {
    connectCalendar: async (req, res) => {
        try{
            const { access_token, refresh_token } = req.body;
            // await User.save(access_token, refresh_token);
    
            const calendarData = await calendarCtrl.getCalendarFromGoogle(access_token, refresh_token);

            res.status(201).send({
                calendarData
            });
        }catch(err) {
            res.status(404).send({
                err
            });
        }
    },
    test: (req, res) => {
        console.log('test');
    }
}