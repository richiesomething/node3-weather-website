const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=9f01eed927974e7614029c36b905f353&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '&units=f'
    request({url, json: true}, (error, { body }) => {
    if (error) {
        callback('unable to connect to location services', undefined)
    }
    else if (body.error) {
        callback('unable to find location try another search', undefined)
    }
    else {
        callback(
            undefined,
            body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature +
            " degrees out, but it feels like " + body.current.feelslike + " degrees. The humidity is " + body.current.humidity + "%."
        )
    }
})

}

module.exports = forecast