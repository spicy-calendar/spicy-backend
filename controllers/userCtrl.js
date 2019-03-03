const calendarCtrl = require('./calendarCtrl');
const request = require('request');


module.exports = {
    connectCalendar: async (req, res) => {
        try {
            const { access_token, refresh_token } = req.body;
            // await User.save(access_token, refresh_token);

            const calendarData = await calendarCtrl.getCalendarFromGoogle(access_token, refresh_token);

            res.status(201).send({
                calendarData
            });
        } catch (err) {
            res.status(404).send({
                err
            });
        }
    },
    test: (req, res) => {
        console.log('test');
    },
    getDailyEvents: async (req, res) => {
        try {
            // Get free times from database----
            // const bitwise = await User.get(bitwiseCalendar)

            // const events = Scrape EventBrite for events (Cheerio)
            const request = require('request');
            const cheerio = require('cheerio');

            request('https://www.eventbrite.com/', function (err, resp, html) {
                if (!err) {
                    const $ = cheerio.load(html);
                    console.log(html);
                }
            });
            // const releventEvents = events.filter(event => //does event overlap with schedule ? true : false);

            res.status(201).send({
                releventEventsß
            });
        } catch (err) {
            res.status(404).send({
                err
            });
        }
    }
}