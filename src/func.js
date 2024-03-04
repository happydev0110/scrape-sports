export const isValidDate = (dateString) => {
    const dateObject = new Date(dateString);
    return !isNaN(dateObject) && dateString.trim() !== '';
}

export const formatDate = (date) => {
    var year, month, day = '';
    // if (isValidDate(date)) {
    //     return 'Valid Date.'
    // } else {
    year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();

    if (month < 10) {
        // console.log(year.toString() + '0' + month.toString() + day.toString(), 'date format')
        return(year.toString() + '0' + month.toString() + day.toString());
    } else {
        // console.log(year.toString() + month.toString() + day.toString(), 'date format')
        return(year.toString() + month.toString() + day.toString())
    }
    // }
}

export const handleScore = (playItem, dataTypeItem, score, tableIndex, prevPlayItem) => {
    let description, sequenceTime, homeScore, awayScore, textIndex = tableIndex;
    let increaseMount = dataTypeItem.Increase;

    if (dataTypeItem.Increase == -1) {
        increaseMount = prevPlayItem.scoreValue    
    }

    if (dataTypeItem.Increase) {
        score[tableIndex] = score[tableIndex] + increaseMount;
    } else {
        increaseMount = 0;
    }
    
    if (dataTypeItem.rotation) {
        tableIndex = tableIndex + 1;
        tableIndex = tableIndex % 4;
    }
    
    description = playItem.text;
    
    if(dataTypeItem.description){
        description = prevPlayItem.text;
    }
    
    sequenceTime = playItem.period.displayValue + '(' + playItem.clock.displayValue + ')';
    homeScore = playItem.homeScore;
    awayScore = playItem.awayScore;
    
    // console.log(score,'handleScore')
    return{
        textIndex,
        tableIndex,
        increaseMount,
        sequenceTime,
        score,
        description,
        homeScore,
        awayScore
    }
}