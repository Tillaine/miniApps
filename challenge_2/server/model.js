const request = require('request');
const getFromAPI = () => {
    let options = {
        url: 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2017-09-01&end=2020-09-21',
        headers: {
          'User-Agent': 'request'
        }
      };

      return new Promise((resolve, reject) => {
        request.get(options, (err, response, body)=> {
          if (err) { reject(console.log(err)) }
          else {resolve(body)}
        })
      })
}

module.exports = {getFromAPI }