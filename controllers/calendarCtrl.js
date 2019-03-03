module.exports = {
    getCalendar: async (req, res) => {
        try {
            // Get tokens from User
            // const { access_token, refresh_token } = User...

            const calendarData = await getCalendarFromGoogle(access_token, refresh_token);

            res.status(200).send(calendarData);
        }catch(err) {
            res.status(404).send({
                err
            });
        }

    },
    updateCalendar: (req, res) => {
        const updates = req.body;
        // Push to Google Calendar

        calculateBitwiseCalendar()
    },

    // Helper methods
    getCalendarFromGoogle: async (accessToken, refreshToken) => {
        try{
            // const calendarData = await Get Calendar from Google(accessToken)
            if(!calendarData) {
                // Maybe do this later if you have time----
                // Use refresh token to get new access_token
                // accessToken = GoogleAPi(refreshToken)
                // Store new accessToken in User----
                // await User.save(accessToken)

                // const calendarData = await Get Calendar from Google(accessToken)
            }
            // return calendarData;
        }catch(err) {
            // Return nothing
        }

    },
    calculateBitwiseCalendar: async (calendarObj) => {
        // Convert calendarObj to bits
        // Save to User.bitwiseCalendar
        // await User.save()...
    }
}