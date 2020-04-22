import React from 'react'


const Event = (props) => {
    const { date, description, lang, category1, granularity} = props.event;
    const category2 = props.event.category2 ? props.event.category2 : null;

    return (
        <div className='eventContainer'>

            <h2>{formatCategory(category1, category2)}</h2>
            <p>{formatDate(date)}</p>
            <p>{description}</p>
            <button className='editButton'>Edit</button>
             
        </div>
    )
}
const formatDate = (date) => {
    if(date[0] === '-'){
        return `${date.slice(1, date.length)} BC` 
    } else if (date.length < 5){
      return `${date} CE`
    } else {
      return date;
    }

}

const formatCategory = (category1, category2) => {
    if(category1.includes('by') && category2){
        return category2;
    } else {
        return 'Too cool for lables'
    }

}




export default Event

