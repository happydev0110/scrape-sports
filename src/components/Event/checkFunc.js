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
        if (currentPlayItem.text.includes('Timeout') || currentPlayItem.text.includes('official') || currentPlayItem.text.includes('Challenge') || currentPlayItem.text.includes('review')) {
            status = true;
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
            console.log(currentPlayItem.type,'currentplayItem')
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
        if(currentPlayItem.type === undefined){
            status = true;
        } else {
            if (currentPlayItem.type.id == 84 || !currentPlayItem.type.text.includes('Turnover')) {
                status = true;
            }
        }
    }

    // NBA2-DS30
    if (dataTypeItem.no === 'NBA2-DS30') {
        if (currentPlayItem.clock === undefined || prevPlayItem === undefined || prevPlayItem.clock === undefined || prevPlayItem.scoringPlay === undefined || prevPlayItem.team === undefined) {
            status = true;
        } else {
            if (currentPlayItem.clock.displayValue !== prevPlayItem.clock.displayValue || prevPlayItem.scoreValue != 2 || prevPlayItem.team.id == matchTeamId || dataTypeItem.noMatchList.indexOf(prevPlayItem.type.id) !== -1 || prevPlayItem.type.text.includes('Dunk Shot')) {
                status = true;
            }
        }
    }

    // NBA2-DS30-2
    if (dataTypeItem.no === 'NBA2-DS30-2') {
        if (prevPlayItem === undefined || prevPlayItem.clock === undefined || prevPlayItem.scoringPlay === undefined || prevPlayItem.team === undefined) {
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
        if(currentPlayItem.period === undefined || currentPlayItem.clock === undefined){
            status = true
        } else {
            if (currentPlayItem.period !== '1st Quarter' || currentPlayItem.clock.displayValue !== '12:00') {
                status = true;
            }
        }
    }

    // NBA2-DS73-2
    if (dataTypeItem.no === 'NBA2-DS73-2') {
        if(currentPlayItem.type === undefined || currentPlayItem.clock === undefined){
            status = true;
        } else {
            if (currentPlayItem.type.text !== 'Jumpball' || currentPlayItem.clock.displayValue !== '12:00') {
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
        if (currentPlayItem.text.indexOf('Foul by') === -1) {
            status = true;
        }
    }

    // SOCCER-DS8
    if (dataTypeItem.no === 'SOCCER-DS8') {
        if (currentPlayItem.text.indexOf('Foul by') === -1) {
            status = true;
        }
    }

    // SOCCER-DS9
    if (dataTypeItem.no === 'SOCCER-DS9') {
        if (currentPlayItem.text.indexOf('Goal!') === -1) {
            status = true;
        } else {

            let team1NameIdx = currentPlayItem.text.indexOf(team1Name);
            let team2NameIdx = currentPlayItem.text.indexOf(team2Name);

            console.log(team1Name, 'team1Name')
            console.log(team2Name, 'team2Name')

            if (team1NameIdx == -1) team1NameIdx = currentPlayItem.text.indexOf(team1Name.replace('&', 'and'));
            if (team2NameIdx == -1) team2NameIdx = currentPlayItem.text.indexOf(team2Name.replace('&', 'and'));

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

    // SOCCER-DS10
    if (dataTypeItem.no === 'SOCCER-DS10') {
        if (currentPlayItem.text.indexOf('Goal!') === -1) {
            status = true;
        }

        if (currentPlayItem.text.indexOf('OVERTURNED') !== -1) {
            status = true;
        }
    }

    // SOCCER-DS11
    if (dataTypeItem.no === 'SOCCER-DS11') {
        if (currentPlayItem.text.indexOf('Attempt saved') === -1 || currentPlayItem.text.indexOf(team1Name) === -1) {
            status = true;
        }
    }

    // SOCCER-DS12
    if (dataTypeItem.no === 'SOCCER-DS12') {
        if (currentPlayItem.text.indexOf('Attempt saved') === -1 || currentPlayItem.text.indexOf(team2Name) === -1) {
            status = true;
        }
    }

    // SOCCER-DS14
    if (dataTypeItem.no === 'SOCCER-DS14') {
        // console.log(i, currentPlayItem.text.indexOf('Corner,'),'Corner check',
        //             currentPlayItem.text.indexOf(team1Name),'team1Name check')
        if (currentPlayItem.text.indexOf('Corner,') === -1 || currentPlayItem.text.indexOf(team1Name) === -1) {
            status = true;
        }
    }

    // SOCCER-DS15
    if (dataTypeItem.no === 'SOCCER-DS15') {
        if (currentPlayItem.text.indexOf('Corner,') === -1 || currentPlayItem.text.indexOf(team2Name) === -1) {
            status = true;
        }
    }

    // SOCCER-DS17
    if (dataTypeItem.no === 'SOCCER-DS17') {
        if (currentPlayItem.text.indexOf('OVERTURNED') === -1) {
            status = true;
        }
    }

    // SOCCER-DS24
    if (dataTypeItem.no === 'SOCCER-DS24') {
        if (currentPlayItem.text.indexOf('Own Goal') === -1) {
            status = true;
        }
    }

    // SOCCER-DS25
    if (dataTypeItem.no === 'SOCCER-DS25') {
        if (currentPlayItem.text.indexOf('Own Goal') === -1 || currentPlayItem.text.indexOf('OVERTURNED') !== -1) {
            status = true;
        }
    }

    // Compare TeamId
    if (dataTypeItem.teamId !== -1) {
        if (currentPlayItem.play === undefined) {
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