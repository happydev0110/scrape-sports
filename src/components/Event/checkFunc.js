/*
 Status
    false: yes          (continue)
    true: No Check      (no continue)
*/
export const checkFunc = (dataTypeItem, currentPlayItem, prevPlayItem, team1Id, team2Id, matchTeamId, PREV_NHL_DS2, PREV_NHL_DS5) => {
    let status = false;

    // teamId
    if (dataTypeItem.teamId !== -1) {
        if (currentPlayItem.team === undefined) {
            status = true;
        }

        if (dataTypeItem.teamId) {
            matchTeamId = team2Id;
        }

        if (currentPlayItem.team && (currentPlayItem.team.id != matchTeamId)) {
            status = true;
        }
    }

    // typeId
    if (dataTypeItem.typeId) {
        if (currentPlayItem.type === undefined) status = true;
        if (currentPlayItem.type.id != dataTypeItem.typeId) status = true;
    }

    // scoreValue
    if (dataTypeItem.scoreValue != -1) {
        if (currentPlayItem.scoreValue === undefined) status = true;
        if (currentPlayItem.scoreValue != dataTypeItem.scoreValue) status = true;
    }

    // scoringPlay
    if (dataTypeItem.scoringPlayStatus) {
        if (currentPlayItem.scoringPlay != dataTypeItem.scoringPlay) {
            status = true;
        }
    }

    // Special DS
    // DS3-NCAA
    if (dataTypeItem.no === 'NCAA-DS3') {
        if (prevPlayItem === undefined || prevPlayItem.scoreValue === undefined || prevPlayItem.scoreValue != 0 || prevPlayItem.clock.displayValue == currentPlayItem.clock.displayValue) status = true;
    }

    // NCAA-DS3-2
    if (dataTypeItem.no === 'NCAA-DS3-2') {
        if (prevPlayItem === undefined) {
            status = true;
        } else {
            if (prevPlayItem.clock.displayValue != currentPlayItem.clock.displayValue || prevPlayItem.scoringPlay === undefined || prevPlayItem.scoringPlay === true) status = true;
        }
    }

    // DS9-NCAA
    if (dataTypeItem.no === 'NCAA-DS9') {
        if (prevPlayItem === undefined || currentPlayItem.clock === undefined || prevPlayItem.clock === undefined || prevPlayItem.scoreValue === undefined) {
            status = true
        } else {
            if (currentPlayItem.clock.displayValue !== prevPlayItem.clock.displayValue || prevPlayItem.type.id == 574 || prevPlayItem.scoreValue != 2) {
                status = true;
            }
        };
    }

    // NCAA-DS10
    if (dataTypeItem.no === 'NCAA-DS10') {
        if (prevPlayItem === undefined || currentPlayItem.clock === undefined || prevPlayItem.clock === undefined || prevPlayItem.scoreValue === undefined) {
            status = true;
        } else {
            if (currentPlayItem.clock.displayValue !== prevPlayItem.clock.displayValue || prevPlayItem.scoreValue != 3) {
                status = true;
            }
        }
    }

    // NCAA-DS12
    if (dataTypeItem.no === 'NCAA-DS12') {
        if (prevPlayItem === undefined || prevPlayItem.clock === undefined) {
            status = true;
        } else {
            if (currentPlayItem.clock.displayValue !== prevPlayItem.clock.displayValue || prevPlayItem.type.id != 574) {
                status = true;
            }
        }
    }

    // NCAA-DS13
    if (dataTypeItem.no === 'NCAA-DS13') {
        if (prevPlayItem === undefined || prevPlayItem.clock === undefined || prevPlayItem.scoringPlay === undefined) {
            status = true;
        } else {
            if (!prevPlayItem.scoringPlay || currentPlayItem.clock.displayValue === prevPlayItem.clock.displayValue) {
                status = true;
            }
        }
    }

    // DS30-NBA
    if (dataTypeItem.no === 'NBA-DS30') {
        if (prevPlayItem === undefined || prevPlayItem.clock === undefined || prevPlayItem.scoringPlay === undefined || prevPlayItem.team === undefined) {
            status = true;
        } else {
            if (currentPlayItem.clock.displayValue !== prevPlayItem.clock.displayValue || prevPlayItem.scoreValue != 2 || prevPlayItem.team.id == matchTeamId || dataTypeItem.noMatchList.indexOf(prevPlayItem.type.id) !== -1) {
                status = true;
            }
        }
    }

    // DS48-NBA
    if (dataTypeItem.no === 'NBA-DS48') {
        if (prevPlayItem === undefined || prevPlayItem.clock === undefined) {
            status = true;
        } else {
            if (currentPlayItem.clock.displayValue === prevPlayItem.clock.displayValue) {
                status = true;
            }
        }
    }

    // NHL-DS2
    if (dataTypeItem.no === 'NHL-DS2') {
        if (currentPlayItem === undefined || currentPlayItem.text === undefined) {
            status = true;
        } else {
            if (currentPlayItem.text.toLowerCase().includes('timeout') || currentPlayItem.text.toLowerCase().includes('official') || currentPlayItem.text.toLowerCase().includes('challenge') || currentPlayItem.text.toLowerCase().includes('review')) {
                status = true;
            }
        }
    }

    // NHL-DS4
    if (dataTypeItem.no === 'NHL-DS4') {
        if (prevPlayItem === undefined || prevPlayItem.clock === undefined || prevPlayItem.scoringPlay === undefined || prevPlayItem.team === undefined) {
            status = true;
        } else {
            if (currentPlayItem.clock.displayValue !== prevPlayItem.clock.displayValue || !currentPlayItem.text.includes('Fighting') || !prevPlayItem.text.includes('Fighting') || currentPlayItem.team.id !== prevPlayItem.team.id) {
                status = true;
            }
        }
    }

    // NHL-DS5
    if (dataTypeItem.no === 'NHL-DS5') {
        if (PREV_NHL_DS5 === undefined || PREV_NHL_DS5.clock === undefined) {
            status = true;
        } else {
            if (currentPlayItem.text.includes('served by') || PREV_NHL_DS5.clock.displayValue === currentPlayItem.clock.displayValue) {
                status = true;
            }
        }
    }

    // NHL-DS5-1
    if (dataTypeItem.no === 'NHL-DS5-1') {
        if (PREV_NHL_DS5 === undefined || PREV_NHL_DS5.clock === undefined) {
            status = true;
        } else {
            // console.log(currentPlayItem, PREV_NHL_DS5,'PREV_NHL_DS5')
            if (currentPlayItem.text.includes('served by') || PREV_NHL_DS5.clock.displayValue !== currentPlayItem.clock.displayValue) {
                status = true;
            }
        }
    }

    // NHL-DS6 
    if (dataTypeItem.no === 'NHL-DS6') {
        if (prevPlayItem === undefined || currentPlayItem.text === undefined) {
            status = true;
        } else {
            if (currentPlayItem.text.includes('served by')) {
                status = true;
            }
        }
    }

    // NHL2-DS2
    if (dataTypeItem.no === 'NHL2-DS2') {
        if (PREV_NHL_DS2.teamId != team1Id) {
            status = true;
        }
    }

    // NHL2-DS2-1
    if (dataTypeItem.no === 'NHL2-DS2-1') {
        if (PREV_NHL_DS2.teamId != team1Id) {
            status = true;
        }
    }

    // NHL2-DS2-2
    if (dataTypeItem.no === 'NHL2-DS2-2') {
        if (PREV_NHL_DS2.teamId != team2Id) {
            status = true;
        }
    }

    // NHL2-DS2-3
    if (dataTypeItem.no === 'NHL2-DS2-3') {
        if (PREV_NHL_DS2.teamId != team1Id) {
            status = true;
        }
    }

    // NHL2-DS2-4
    if (dataTypeItem.no === 'NHL2-DS2-4') {
        if (PREV_NHL_DS2.teamId != team2Id) {
            status = true;
        }
    }

    // NBA2-DS1-2
    if (dataTypeItem.no === 'NBA2-DS1-2') {
        if (!currentPlayItem.text.includes('three point')) {
            status = true;
        }
    }

    // NBA2-DS1-3
    if (dataTypeItem.no === 'NBA2-DS1-3') {
        if (currentPlayItem.text.includes('three point') || !currentPlayItem.text.includes('misses 22-foot')) {
            status = true;
        }
    }

    // NBA2-DS1-4
    if (dataTypeItem.no === 'NBA2-DS1-4') {
        if (currentPlayItem.text.includes('three point') || !currentPlayItem.text.includes('misses 23-foot')) {
            status = true;
        }
    }

    // NBA2-DS1-5
    if (dataTypeItem.no === 'NBA2-DS1-5') {
        if (currentPlayItem.text.includes('three point') || !currentPlayItem.text.includes('misses 24-foot')) {
            status = true;
        }
    }

    // NBA2-DS1-6
    if (dataTypeItem.no === 'NBA2-DS1-6') {
        if (currentPlayItem.text.includes('three point') || !currentPlayItem.text.includes('misses 25-foot')) {
            status = true;
        }
    }

    // NBA2-DS1-7
    if (dataTypeItem.no === 'NBA2-DS1-7') {
        if (currentPlayItem.text.includes('three point') || !currentPlayItem.text.includes('misses 26-foot')) {
            status = true;
        }
    }

    // NBA2-DS1-8
    if (dataTypeItem.no === 'NBA2-DS1-8') {
        if (currentPlayItem.text.includes('three point') || !currentPlayItem.text.includes('misses 27-foot')) {
            status = true;
        }
    }

    // NBA2-DS7
    if (dataTypeItem.no === 'NBA2-DS7') {
        if (currentPlayItem.type === undefined || prevPlayItem === undefined || prevPlayItem.type === undefined) {
            status = true
        } else {
            if (!currentPlayItem.type.text.includes('Dunk Shot') || dataTypeItem.noMatchList.indexOf(prevPlayItem.type.id) !== -1) {
                status = true;
            }
        }
    }

    // NBA2-DS7-2
    if (dataTypeItem.no === 'NBA2-DS7-2') {
        if (currentPlayItem.type === undefined) {
            status = true;
        } else {
            if (!currentPlayItem.type.text.includes('Dunk Shot')) {
                status = true;
            }
        }
    }

    // NBA2-DS20
    if (dataTypeItem.no === 'NBA2-DS20') {
        if (currentPlayItem.type === undefined) {
            status = true;
        } else {
            if (currentPlayItem.type.id == 84 || !currentPlayItem.type.text.includes('Turnover')) {
                status = true;
            }
        }
    }

    // NBA2-DS30
    if (dataTypeItem.no === 'NBA2-DS30') {
        if (currentPlayItem.clock === undefined || prevPlayItem === undefined || prevPlayItem.clock === undefined || prevPlayItem.scoreValue === undefined || prevPlayItem.team === undefined) {
            status = true;
        } else {
            if (currentPlayItem.clock.displayValue !== prevPlayItem.clock.displayValue || prevPlayItem.scoreValue != 2 || prevPlayItem.team.id == matchTeamId || dataTypeItem.noMatchList.indexOf(prevPlayItem.type.id) !== -1 || prevPlayItem.type.text.includes('Dunk Shot')) {
                status = true;
            }
        }
    }

    // NBA2-DS30-2
    if (dataTypeItem.no === 'NBA2-DS30-2') {
        if (prevPlayItem === undefined || prevPlayItem.clock === undefined || prevPlayItem.team === undefined) {
            status = true;
        } else {
            if (currentPlayItem.clock.displayValue !== prevPlayItem.clock.displayValue || !prevPlayItem.type.text.includes('Dunk Shot')) {
                status = true;
            }
        }

    }

    // NBA2-DS30-3
    if (dataTypeItem.no === 'NBA2-DS30-3') {
        if (prevPlayItem === undefined || prevPlayItem.type === undefined) {
            status = true;
        } else {
            if (prevPlayItem.type.id != 9) {
                status = true;
            }
        }

    }

    // NBA2-DS48
    if (dataTypeItem.no === 'NBA2-DS48') {
        if (prevPlayItem === undefined || prevPlayItem.clock === undefined || prevPlayItem.scoringPlay === undefined || prevPlayItem.team === undefined) {
            status = true;
        } else {
            if (currentPlayItem.clock.displayValue === prevPlayItem.clock.displayValue) {
                status = true;
            }
        }
    }

    // NBA2-DS48-2
    if (dataTypeItem.no === 'NBA2-DS48-2') {
        if (prevPlayItem === undefined || prevPlayItem.clock === undefined || prevPlayItem.scoreValue === undefined) {
            status = true;
        } else {
            if (currentPlayItem.clock.displayValue !== prevPlayItem.clock.displayValue || prevPlayItem.scoreValue != 0) {
                status = true;
            }
        }
    }

    // NBA2-DS72
    if (dataTypeItem.no === 'NBA2-DS72') {
        if (currentPlayItem.text === undefined) {
            status = true;
        } else {
            if (!currentPlayItem.text.includes('blocks')) {
                status = true;
            }
        }
    }

    // NBA2-DS73-1
    if (dataTypeItem.no === 'NBA2-DS73-1') {
        if (currentPlayItem.period === undefined || currentPlayItem.clock === undefined) {
            status = true
        } else {
            if (currentPlayItem.period !== '1st Quarter' || currentPlayItem.clock.displayValue !== '12:00') {
                status = true;
            }
        }
    }

    // NBA2-DS73-2
    if (dataTypeItem.no === 'NBA2-DS73-2') {
        if (currentPlayItem.type === undefined || currentPlayItem.clock === undefined) {
            status = true;
        } else {
            if (currentPlayItem.type.text !== 'Jumpball' || currentPlayItem.clock.displayValue !== '12:00') {
                status = true;
            }
        }
    }

    /* MLB */
    
    // MLB-DS2
    if (dataTypeItem.no === 'MLB-DS2') {
        if (currentPlayItem.text === undefined) {
            status = true;
        } else {
            if (!currentPlayItem.text.includes('Top of the')) {
                status = true;
            }
        }
    }

    // MLB-DS3
    if (dataTypeItem.no === 'MLB-DS3') {
        if (currentPlayItem.alternativeType === undefined) {
            status = true;
        } else {
            if (!currentPlayItem.alternativeType.text.includes('out')) {
                status = true;
            }
        }
    }

    // MLB-DS4
    if (dataTypeItem.no === 'MLB-DS4') {
        if (currentPlayItem.alternativeType === undefined || currentPlayItem.text === undefined) {
            status = true;
        } else {
            if (currentPlayItem.text.includes('interference') || !currentPlayItem.text.includes('struck out')) {
                status = true;
            }
        }
    }

    // MLB-DS6
    if (dataTypeItem.no === 'MLB-DS6') {
        if (currentPlayItem.alternativeType === undefined || currentPlayItem.text === undefined) {
            status = true;
        } else {
            if (!currentPlayItem.text.includes('single') || !currentPlayItem.text.includes('singled') || currentPlayItem.text.includes('out stretching')) {
                status = true;
            }
        }
    }

    // MLB-DS7
    if (dataTypeItem.no === 'MLB-DS7') {
        if (currentPlayItem.alternativeType === undefined || currentPlayItem.text === undefined) {
            status = true;
        } else {
            if (!currentPlayItem.text.includes('walked') || currentPlayItem.text.includes('scored')) {
                status = true;
            }
        }
    }

    // MLB-DS8
    if (dataTypeItem.no === 'MLB-DS8') {
        if (currentPlayItem.alternativeType === undefined) {
            status = true;
        } else {
            if (currentPlayItem.alternativeType.id != 14) {
                status = true;
            }
        }
    }

    // MLB-DS9
    if (dataTypeItem.no === 'MLB-DS9') {
        if (currentPlayItem.alternativeType === undefined) {
            status = true;
        } else {
            if (currentPlayItem.alternativeType.id != 15) {
                status = true;
            }
        }
    }

    // MLB-DS10
    if (dataTypeItem.no === 'MLB-DS10') {
        if (currentPlayItem.alternativeType === undefined  || currentPlayItem.text === undefined) {
            status = true;
        } else {
            if (!currentPlayItem.text.includes('safe') || !currentPlayItem.text.includes('error')) {
                status = true;
            }
        }
    }

    // MLB-DS11
    if (dataTypeItem.no === 'MLB-DS11') {
        if (currentPlayItem.alternativeType === undefined || currentPlayItem.text === undefined) {
            status = true;
        } else {
            if (currentPlayItem.alternativeType.id != 3 || currentPlayItem.text.includes('out stretching')) {
                status = true;
            }
        }
    }

    // MLB-DS12
    if (dataTypeItem.no === 'MLB-DS12') {
        if (currentPlayItem.alternativeType === undefined || currentPlayItem.text === undefined) {
            status = true;
        } else {
            if (currentPlayItem.alternativeType.id != 4 || currentPlayItem.text.includes('out stretching')) {
                status = true;
            }
        }
    }

    // MLB-DS13
    if (dataTypeItem.no === 'MLB-DS13') {
        if (currentPlayItem.alternativeType === undefined) {
            status = true;
        } else {
            if (currentPlayItem.alternativeType.id != 28) {
                status = true;
            }
        }
    }

    // MLB-DS14
    if (dataTypeItem.no === 'MLB-DS14') {
        if (currentPlayItem.text === undefined) {
            status = true;
        } else {
            if (!currentPlayItem.text.includes('sacrifice') || currentPlayItem.text.includes('scored')) {
                status = true;
            }
        }
    }

    // MLB-DS15
    if (dataTypeItem.no === 'MLB-DS15') {
        if (currentPlayItem.text === undefined) {
            status = true;
        } else {
            if (!currentPlayItem.text.includes('sacrifice') || !currentPlayItem.text.includes('scored')) {
                status = true;
            }
        }
    }

    // MLB-DS16
    if (dataTypeItem.no === 'MLB-DS16') {
        if (currentPlayItem.alternativeType === undefined) {
            status = true;
        } else {
            if (currentPlayItem.alternativeType.id != 52) {
                status = true;
            }
        }
    }

    // MLB-DS17
    if (dataTypeItem.no === 'MLB-DS17') {
        if (currentPlayItem.alternativeType === undefined  || currentPlayItem.text === undefined) {
            status = true;
        } else {
            if (!currentPlayItem.text.includes('hit by pitch') || currentPlayItem.text.includes('scored')) {
                status = true;
            }
        }
    }

    // MLB-DS17-1
    if (dataTypeItem.no === 'MLB-DS17-1') {
        if (currentPlayItem.alternativeType === undefined  || currentPlayItem.text === undefined) {
            status = true;
        } else {
            if (!currentPlayItem.text.includes('hit by pitch') || !currentPlayItem.text.includes('scored')) {
                status = true;
            }
        }
    }

    // MLB-DS18
    if (dataTypeItem.no === 'MLB-DS18') {
        if (currentPlayItem.text === undefined) {
            status = true;
        } else {
            if (!currentPlayItem.text.includes('interference')) {
                status = true;
            }
        }
    }

    // MLB-DS19
    if (dataTypeItem.no === 'MLB-DS19') {
        if (currentPlayItem.text === undefined) {
            status = true;
        } else {
            if (!currentPlayItem.text.includes('to first on passed ball')) {
                status = true;
            }
        }
    }

    // MLB-DS19-1
    if (dataTypeItem.no === 'MLB-DS19-1') {
        if (currentPlayItem.text === undefined) {
            status = true;
        } else {
            if (!currentPlayItem.text.includes('to first on wild')) {
                status = true;
            }
        }
    }

    // MLB-DS4-2
    if (dataTypeItem.no === 'MLB-DS4-2') {
        if (currentPlayItem.text === undefined) {
            status = true;
        } else {
            if (!currentPlayItem.text.includes('struck out') || currentPlayItem.text.includes('interference')) {
                status = true;
            }
        }
    }

    // MLB-DS21
    if (dataTypeItem.no === 'MLB-DS21') {
        if (currentPlayItem.alternativeType === undefined || currentPlayItem.text === undefined) {
            status = true;
        } else {
            if (!currentPlayItem.alternativeType.text.includes('out') || currentPlayItem.text.includes('double play') || currentPlayItem.text.includes('triple play')) {
                status = true;
            }
        }
    }

    // MLB-DS21-1
    if (dataTypeItem.no === 'MLB-DS21-1') {
        if (currentPlayItem.text === undefined) {
            status = true;
        } else {
            if (!currentPlayItem.text.includes('out stretching')) {
                status = true;
            }
        }
    }

    // MLB-DS22
    if (dataTypeItem.no === 'MLB-DS22') {
        if (currentPlayItem.text === undefined) {
            status = true;
        } else {
            if (!currentPlayItem.text.includes('double play')) {
                status = true;
            }
        }
    }

    // MLB-DS23
    if (dataTypeItem.no === 'MLB-DS23') {
        if (currentPlayItem.text === undefined) {
            status = true;
        } else {
            if (!currentPlayItem.text.includes('tripple play')) {
                status = true;
            }
        }
    }

    // MLB-DS24
    if (dataTypeItem.no === 'MLB-DS24') {
        if (currentPlayItem.text === undefined) {
            status = true;
        } else {
            if (!currentPlayItem.text.includes('walked')) {
                status = true;
            }
        }
    }

    // MLB-DS25
    if (dataTypeItem.no === 'MLB-DS25') {
        if (currentPlayItem.alternativeType === undefined) {
            status = true;
        } else {
            if (currentPlayItem.alternativeType.id != 28) {
                status = true;
            }
        }
    }

    // MLB-DS26
    if (dataTypeItem.no === 'MLB-DS26') {
        if (currentPlayItem.alternativeType === undefined) {
            status = true;
        } else {
            if (currentPlayItem.alternativeType.id != 2) {
                status = true;
            }
        }
    }

    // MLB-DS27
    if (dataTypeItem.no === 'MLB-DS27') {
        if (currentPlayItem.alternativeType === undefined || currentPlayItem.text === undefined) {
            status = true;
        } else {
            if (currentPlayItem.alternativeType.id != 3 || currentPlayItem.text.includes('out stretching')) {
                status = true;
            }
        }
    }

    // MLB-DS28
    if (dataTypeItem.no === 'MLB-DS28') {
        if (currentPlayItem.alternativeType === undefined || currentPlayItem.text === undefined) {
            status = true;
        } else {
            if (currentPlayItem.alternativeType.id != 4 || currentPlayItem.text.includes('out stretching')) {
                status = true;
            }
        }
    }

    // MLB-DS29
    if (dataTypeItem.no === 'MLB-DS29') {
        if (currentPlayItem.text === undefined) {
            status = true;
        } else {
            if (!currentPlayItem.text.includes('hit by pitch')) {
                status = true;
            }
        }
    }

    // MLB-DS30
    if (dataTypeItem.no === 'MLB-DS30') {
        if (currentPlayItem.text === undefined) {
            status = true;
        } else {
            if (!currentPlayItem.text.includes('sacrifice') || currentPlayItem.text.includes('scored')) {
                status = true;
            }
        }
    }

    // MLB-DS31
    if (dataTypeItem.no === 'MLB-DS31') {
        if (currentPlayItem.text === undefined) {
            status = true;
        } else {
            if (!currentPlayItem.text.includes('sacrifice') || !currentPlayItem.text.includes('scored')) {
                status = true;
            }
        }
    }

    // MLB-DS32
    if (dataTypeItem.no === 'MLB-DS32') {
        if (currentPlayItem.text === undefined  || currentPlayItem.alternativePlay === undefined) {
            status = true;
        } else {
            if (!currentPlayItem.text.includes('safe') || !currentPlayItem.text.includes('error')) {
                status = true;
            }
        }
    }

    // MLB-DS33
    if (dataTypeItem.no === 'MLB-DS33') {
        if (currentPlayItem.text === undefined || currentPlayItem.alternativePlay === undefined) {
            status = true;
        } else {
            if (!currentPlayItem.text.includes('caught stealing')) {
                status = true;
            }
        }
    }

    return status;
}

export const checkSoccerFunc = (dataTypeItem, currentPlayItem, prevPlayItem, team1Id, team2Id, team1Name, team2Name, team1Score, team2Score, matchTeamId) => {
    let status = false;

    // SOCCER-DS7
    if (dataTypeItem.no === 'SOCCER-DS7') {
        if (currentPlayItem.text === undefined) {
            status = true;
        } else {
            if (currentPlayItem.text.indexOf('Foul by') === -1) {
                status = true;
            }
        }
    }

    // SOCCER-DS8
    if (dataTypeItem.no === 'SOCCER-DS8') {
        if (currentPlayItem.text === undefined) {
            status = true;
        } else {
            if (currentPlayItem.text.indexOf('Foul by') === -1) {
                status = true;
            }
        }
    }

    // SOCCER-DS9
    if (dataTypeItem.no === 'SOCCER-DS9') {
        if (currentPlayItem.text === undefined) {
            status = true;
        } else {
            if (currentPlayItem.text.indexOf('Goal!') === -1) {
                status = true;
            } else {

                let team1NameIdx = currentPlayItem.text.indexOf(team1Name);
                let team2NameIdx = currentPlayItem.text.indexOf(team2Name);

                if (team1NameIdx == -1) team1NameIdx = currentPlayItem.text.indexOf(team1Name);
                if (team2NameIdx == -1) team2NameIdx = currentPlayItem.text.indexOf(team2Name);

                // console.log(team1NameIdx, team2NameIdx, team2Name.replace('&', 'and'), 'get Score')
                if (team1NameIdx !== -1 && team2NameIdx !== -1) {
                    // console.log(parseInt(currentPlayItem.text.slice(team1NameIdx + team1Name.length + 1, team1NameIdx + team1Name.length + 3).trim()), 'team1Score')
                    // console.log(parseInt(currentPlayItem.text.slice(team2NameIdx + team2Name.length + 1, team2NameIdx + team2Name.length + 3).trim()), 'team2Score')
                    team1Score = parseInt(currentPlayItem.text.slice(team1NameIdx + team1Name.length + 1, team1NameIdx + team1Name.length + 3).trim());
                    team2Score = parseInt(currentPlayItem.text.slice(team2NameIdx + team2Name.length + 1, team2NameIdx + team2Name.length + 3).trim())
                }
            }

            if (currentPlayItem.text.indexOf('OVERTURNED') !== -1) {
                status = true;
            }
        }
    }

    // SOCCER-DS10
    if (dataTypeItem.no === 'SOCCER-DS10') {
        if (currentPlayItem.text === undefined) {
            status = true;
        } else {
            if (currentPlayItem.text.indexOf('Goal!') === -1) {
                status = true;
            }

            if (currentPlayItem.text.indexOf('OVERTURNED') !== -1) {
                status = true;
            }
        }
    }

    // SOCCER-DS11
    if (dataTypeItem.no === 'SOCCER-DS11') {
        if (currentPlayItem.text === undefined) {
            status = true;
        } else {
            if (currentPlayItem.text.indexOf('Attempt saved') === -1 || currentPlayItem.text.toLowerCase().indexOf(team1Name.toLowerCase()) === -1) {
                status = true;
            }
        }
    }

    // SOCCER-DS12
    if (dataTypeItem.no === 'SOCCER-DS12') {
        if (currentPlayItem.text === undefined) {
            status = true;
        } else {
            if (currentPlayItem.text.indexOf('Attempt saved') === -1 || currentPlayItem.text.toLowerCase().indexOf(team2Name.toLowerCase()) === -1) {
                status = true;
            }
        }
    }

    // SOCCER-DS14
    if (dataTypeItem.no === 'SOCCER-DS14') {
        if (currentPlayItem.text === undefined) {
            status = true;
        } else {
            if (currentPlayItem.text.indexOf('Corner,') === -1 || currentPlayItem.text.toLowerCase().indexOf(team1Name.toLowerCase()) === -1) {
                status = true;
            }
        }
    }

    // SOCCER-DS15
    if (dataTypeItem.no === 'SOCCER-DS15') {
        if (currentPlayItem.text === undefined) {
            status = true;
        } else {
            if (currentPlayItem.text.indexOf('Corner,') === -1 || currentPlayItem.text.toLowerCase().indexOf(team2Name.toLowerCase()) === -1) {
                status = true;
            }
        }
    }

    // SOCCER-DS17
    if (dataTypeItem.no === 'SOCCER-DS17') {
        if (currentPlayItem.text === undefined) {
            status = true;
        } else {
            if (currentPlayItem.text.indexOf('OVERTURNED') === -1) {
                status = true;
            }
        }
    }

    // SOCCER-DS24
    if (dataTypeItem.no === 'SOCCER-DS24') {
        if (currentPlayItem.text === undefined) {
            status = true;
        } else {
            if (currentPlayItem.text.indexOf('Own Goal') === -1) {
                status = true;
            }
        }
    }

    // SOCCER-DS25
    if (dataTypeItem.no === 'SOCCER-DS25') {
        if (currentPlayItem.text === undefined) {
            status = true;
        } else {
            if (currentPlayItem.text.indexOf('Own Goal') === -1 || currentPlayItem.text.indexOf('OVERTURNED') !== -1) {
                status = true;
            }
        }
    }

    // SOCCER-DS27-1
    if (dataTypeItem.no === 'SOCCER-DS27-1') {
        if (currentPlayItem.text === undefined) {
            status = true;
        } else {
            if (currentPlayItem.text.indexOf('Delay in match') === -1) {
                status = true;
            }
        }
    }

    // SOCCER-DS27-2
    if (dataTypeItem.no === 'SOCCER-DS27-2') {
        if (currentPlayItem.text === undefined) {
            status = true;
        } else {
            if (currentPlayItem.text.indexOf('Delay over.') === -1) {
                status = true;
            }
        }
    }

    // SOCCER-DS28-1
    if (dataTypeItem.no === 'SOCCER-DS28-1') {
        if (currentPlayItem.text === undefined) {
            status = true;
        } else {
            if (currentPlayItem.text.indexOf('First Half begins.') === -1) {
                status = true;
            }
        }
    }

    // SOCCER-DS28-2
    if (dataTypeItem.no === 'SOCCER-DS28-2') {
        if (currentPlayItem.text === undefined) {
            status = true;
        } else {
            if (currentPlayItem.text.indexOf('Second Half begins') === -1) {
                status = true;
            }
        }
    }

    // SOCCER-DS28-3
    if (dataTypeItem.no === 'SOCCER-DS28-3') {
        if (currentPlayItem.text === undefined) {
            status = true;
        } else {
            if (currentPlayItem.text.indexOf('First Half ends,') === -1) {
                status = true;
            }
        }
    }

    // SOCCER-DS28-4
    if (dataTypeItem.no === 'SOCCER-DS28-4') {
        if (currentPlayItem.text === undefined) {
            status = true;
        } else {
            if (currentPlayItem.text.indexOf('Match ends,') === -1) {
                status = true;
            }
        }
    }

    // Compare TeamId
    if (dataTypeItem.teamId !== -1) {
        if (currentPlayItem.play === undefined || currentPlayItem.play === undefined) {
            status = true;
        } else {
            if (currentPlayItem.play.team) {
                if (dataTypeItem.teamId) {
                    if (currentPlayItem.play.team.displayName != team2Name) {
                        status = true;
                    }
                } else {
                    if (currentPlayItem.play.team.displayName != team1Name) {
                        status = true;
                    }
                }
            }
        }
    }

    // Compare TypeId
    if (dataTypeItem.typeId) {
        if (currentPlayItem.play === undefined) {
            status = true;
        } else {
            if (dataTypeItem.typeId != currentPlayItem.play.type.id) {
                status = true;
            }
        }

    }

    if (dataTypeItem.scoreValue !== -1) {
        // if(dataTypeItem.scoreValue != currentPlayItem.play.score){
        //     status = true;
        // }
    }

    return status;
}