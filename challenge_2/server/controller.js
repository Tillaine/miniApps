const { getFromAPI } = require('./model')

const getHistory = (req, res) =>  {
    getFromAPI()
    .then(data => {
        return JSON.parse(data) 
        })
        .then(data => formatData(parseData(data.bpi)))
            .then(data => {
                console.log('formatted', data)
                res.send(data)
            })
    .catch(err => console.log(err))
  
    
}


// **********************
// data formating functions
// **********************
const parseData = (data) => {
   const records = [];
    for(let record in data) {
       const newRecord = {date: record, value:data[record]}
       records.push(newRecord)
    }
    return records
}

const formatData =(data) => {
    const agDates = {}
     data.map(data => {
       let monthStr = data.date.slice(0, 7)
        if(agDates[monthStr]){
           agDates[monthStr].all.push(data.value)
        } else {
           agDates[monthStr] = {all:[data.value]}
        }
     })

     for(let month in agDates) { 
       const avg = agDates[month].all.reduce((sum, next) => sum + next)/agDates[month].all.length
       agDates[month] = Math.round(avg)
     }
     
     return agDates
}

module.exports = { getHistory }