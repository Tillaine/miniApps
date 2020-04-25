const request = require('request');
const getFromAPI = () => {
    const { end, start } = getDate();
    let options = {
        url: `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start}&end=${end}`,
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

const getDate =() => {
    const d = new Date()
    const dtf = new Intl.DateTimeFormat('en', { year: 'numeric', month: '2-digit', day: '2-digit' }) 
    const [{ value: mo },,{ value: da },,{ value: ye }] = dtf.formatToParts(d) 
    return({end: `${ye}-${mo}-${da}`, start:`2016-${mo}-${da}` })
}

module.exports = {getFromAPI }