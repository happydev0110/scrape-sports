export const isValidDate = (dateString) => {
    const dateObject = new Date(dateString);
    return !isNaN(dateObject) && dateString.trim() !== '';
}

export const changeTeamIdx = (index) => {
    let idx = index;
    idx = (index + 1) % 2;

    return idx;
}

export const getDuraton = (start, end) => {
    return new Date(end) - new Date(start)
}

export const delayTimer = (duration) => {
    const timer = new Promise(resolve => setTimeout(resolve, duration));
    // clearTimeout(timer);
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

export const findSeqIndex = (list, seq) => {
    return list.findIndex(obj => obj.sequenceNumber === seq);
}

export const reverseTime = (time, limitMinutes = 20) => {
    let minutes = parseInt(time.split(':')[0]);
    let seconds = parseInt(time.split(':')[1]);
    let result = [0, 0]
    if (seconds > 0) {
        result[0] = limitMinutes - minutes - 1;
        result[1] = 60 - seconds;

        if (result[1] < 10) {
            result[1] = '0' + result[1];
        }
    } else {
        result[0] = limitMinutes - minutes;
        result[1] = '00';
    }

    return result.join(':')
}

export const handleScore = (playItem, dataTypeItem, score, tableIndex, prevPlayItem, team1Name, team2Name, sportCategory) => {
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
        case 'NBA-DS1':
            description = 'Three!!! '
            break;
        case 'NCAA-DS1':
            description = 'Three Point Basket!'
            break;
        case 'NCAA-DS2':
            description = 'Foul. Rotate Turns'
            break;
        case 'NCAA-DS3':
            description = 'Foul. Rotate Turns'
            break;
        case 'NCAA-DS3-2':
            description = 'Foul. Rotate Turns'
            break;
        case 'NCAA-DS4':
            description = 'Dunk!!!'
            break;
        case 'NCAA-DS5':
            description = 'Turnover'
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
            description = 'Made Free Throw'
            break;
        case 'NCAA-DS12':
            description = 'And 1 Basket!'
            break;
        case 'NCAA-DS13':
            description = 'Foul Rotate Turns'
            break;

        // Previous 
        case 'NCAA-DS9':
            description = 'And 1 Basket!'
            break;
        case 'NCAA-DS12':
            description = 'And 1 Basket!'
            break;

        // NHL
        case 'NHL-DS2':
            description = playItem.text + ' Ends Turn'
            break;

        // NHL2 
        case 'NHL2-DS1-2':
            description = 'Wins Faceoff'
            break;
        case 'NHL2-DS2':
            description = 'Stoppage. Faceoff'
            break;
        case 'NHL2-DS2-2':
            description = 'Lost Faceoff. Rotate'
            break;
        case 'NHL2-DS2-3':
            description = 'End of Period'
            break;
        case 'NHL2-DS2-4':
            description = 'Lost Faceoff. Rotate'
            break;
        case 'NHL2-DS3':
            description = 'Shot!! ' + playItem.participants
            [0].athlete.shortName
            break;
        case 'NHL2-DS5':
            if (playItem.participants) {
                description = playItem.type.text + " " + playItem.participants[0].athlete.shortName
            } else {
                description = playItem.type.text
            }
            break;
        case 'NHL2-DS7':
            description = "Goal!!! " + playItem.participants
            [0].athlete.shortName
            break;
        case 'NHL2-DS8':
            description = "Goal!!! " + playItem.participants
            [0].athlete.shortName
            break;
        case 'NHL2-DS9':
            description = "End of Period"
            break;
        case 'NHL2-DS11':
            description = "Game Over. Thanks For Playing"
            break;

        // NBA2
        case 'NBA2-DS1':
            description = 'Three!!! '
            break;
        case 'NBA2-DS7':
            description = playItem.type.text
            break;
        case 'NBA2-DS7-2':
            description = playItem.type.text
            break;
        case 'NBA2-DS30':
            description = 'And 1 Basket!!!'
            break;
        case 'NBA2-DS30-2':
            description = 'And 1 Foul!'
            break;
        case 'NBA2-DS45':
            description = 'Offensive Foul'
            break;
        case 'NBA2-DS61':
            description = playItem.text
            break;
        case 'NBA2-DS63':
            description = playItem.text
            break;
        default:
            break;
    }

    // Previous Text
    if (dataTypeItem.description) {
        description = prevPlayItem.text;
    }

    // console.log(description,'Func')
    let timeDisplay = playItem.clock.displayValue;
    if (sportCategory == 'NHL' || sportCategory == 'NHL2') {
        timeDisplay = reverseTime(timeDisplay);
    }

    sequenceTime = playItem.period.displayValue + '(' + timeDisplay + ')';
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