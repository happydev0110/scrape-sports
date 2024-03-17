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
        return (year.toString() + '0' + month.toString() + day.toString());
    } else {
        // console.log(year.toString() + month.toString() + day.toString(), 'date format')
        return (year.toString() + month.toString() + day.toString())
    }
    // }
}

export const handleScore = (playItem, dataTypeItem, score, tableIndex, prevPlayItem, team1Name, team2Name) => {
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
    } else {

    }

    description = playItem.text;

    switch (dataTypeItem.no) {
        case 'NCAA-DS1':
            description = 'Three Point Basket!'
            break;
        case 'NCAA-DS4':
            description = 'Dunk!!!'
            break;
        case 'NCAA-DS6':
            description = 'Made Free Throw'
            break;
        case 'NCAA-DS7':
            description = 'Missed Free Throw'
            break;
        case 'NCAA-DS8':
            description = 'Missed Free Throw'
            break;
        case 'NCAA-DS10-2':
            description = 'Three Point Miss'
            break;
        case 'NCAA-DS11':
            description = 'Free Throw Made'
            break;

        // Previous 
        case 'NCAA-DS9':
            description = 'And 1 Basket!'
            break;
        case 'NCAA-DS12':
            description = 'And 1 Basket!'
            break;
        default:
            break;
    }

    if (dataTypeItem.description) {
        description = prevPlayItem.text;
    }

    console.log(description,'Func')

    sequenceTime = playItem.period.displayValue + '(' + playItem.clock.displayValue + ')';
    homeScore = playItem.homeScore;
    awayScore = playItem.awayScore;

    // console.log(score,'handleScore')
    return {
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

export const handleSoccerScore = (playItem, dataTypeItem, score, tableIndex, prevPlayItem, team1Name, team2Name) => {
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

    switch (dataTypeItem.no) {
        case 'SOCCER-DS7':
            description = 'Foul by ' + team1Name + playItem.play.participants[0].athlete.displayName
            break;
        case 'SOCCER-DS8':
            description = 'Foul by ' + team2Name + playItem.play.participants[0].athlete.displayName
            break;
        case 'SOCCER-DS9':
            description = 'Goal! ' + playItem.play.participants[0].athlete.displayName
            break;
        case 'SOCCER-DS10':
            description = 'Goal! ' + playItem.play.participants[0].athlete.displayName
            break;
        case 'SOCCER-DS11':
            description = 'Shot on target ' + playItem.play.participants[0].athlete.displayName
            break;
        case 'SOCCER-DS12':
            description = 'Shot on target ' + playItem.play.participants[0].athlete.displayName
            break;
        case 'SOCCER-DS14':
            description = team1Name + ' earns a coner'
            break;
        case 'SOCCER-DS15':
            description = team2Name + ' earns a coner'
            break;
        case 'SOCCER-DS21':
            description = playItem.play.shortText
            break;
        case 'SOCCER-DS24':
            description = 'Own Goal ' + playItem.play.participants[0].athlete.displayName
            break;
        case 'SOCCER-DS25':
            description = 'Own Goal ' + playItem.play.participants[0].athlete.displayName
            break;
        default:
            break;
    }

    if (dataTypeItem.description) {
        description = prevPlayItem.text;
    }

    sequenceTime = playItem.time.displayValue;
    // homeScore = playItem.homeScore;
    // awayScore = playItem.awayScore;

    // homeScore = 0;
    // awayScore = 0;

    // console.log(score,'handleScore')
    return {
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