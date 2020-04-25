
const { getFromAPI } = require('./model')

const url = 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2017-09-01&end=2020-09-21'

const getHistory = (req, res) =>  {
    getFromAPI()
    .then(data => {
        console.log('unformatted', data)
        return JSON.parse(data) 
        })
        .then(data => {
            res.send(formatData(data.bpi))
        console.log('formatted', data)})
    .catch(err=> console.log(err))
  
    
}

const formatData = (data) => {
   const records = [];
    for(let record in data) {
       const newRecord = {date: record, value:data[record]}
       records.push(newRecord)
    }
    return records
}

module.exports = { getHistory }