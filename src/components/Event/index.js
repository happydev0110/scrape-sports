import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Filter from '../../layouts/Filter';

import { URL, SPORTS_CATEGORY, INTERVAL_TIME, DATASET_TYPE_CATEGORY } from '../../const.js';
import { changeTeamIdx, handleScore, handleSoccerScore, reverseTime, getDuraton, findSeqIndex, findSoccerSeqIndex } from '../../func.js';

import ScoreBoardComp from './scoreBoard.js';
import { checkFunc, checkSoccerFunc } from './checkFunc.js';

var goToIndex = 0;
var timeOut = null;

function EventComponent() {
    const [events, setEvents] = useState([]);
    const [playList, setPlayList] = useState([]);
    const [intervalTime, setIntervalTime] = useState(3);

    const [eventId, setEventId] = useState(-1);
    const [gameId, setGameId] = useState('');
    const [sportCategory, setSportCategory] = useState('NBA');

    const [time, setTime] = useState();
    const [team1Idx, setTeam1Idx] = useState(-1);
    const [team2Name, setTeam2Name] = useState('');
    const [selTeamIdx, setSelTeamIdx] = useState(-1);

    const [increaseAmt, setIncreaseAmt] = useState(false);
    const [homeScore, setHomeScore] = useState(0);
    const [awayScore, setAwayScore] = useState(0);

    const [selTextIdx, setSelTextIdx] = useState(-1);
    const [selTblIdx, setSelTblIdx] = useState(-1);
    const [description, setDescription] = useState('');

    const [historyList, setHistoryList] = useState([[], [], [], []]);
    const [timeList, setTimeList] = useState([[], [], [], []]);
    const [eventList, setEventList] = useState([]);

    // const [selectedTeamTime, setSelectedTeamTime] = useState(0);
    const [startTime, setStartTime] = useState(-1);

    const [tableScore, setTableScore] = useState([0, 0, 0, 0]);

    /* 
        Tab Index
    */
    const [tabStatus, setTabStatus] = useState(true);
    const [goIndex, setGoIndex] = useState(0);

    useEffect(() => {
        if (startTime != -1 && goIndex >= 0) {
            goToPlay(goIndex)
        }
    }, [goIndex])

    /* 
        Get Total Event
    */
    useEffect(() => {
        let apiUrl = URL[sportCategory + '_TODAY_EVENT'];

        axios.get(apiUrl,
        ).then((response) => {
            setEvents(response.data.events);
        }).catch((err) => {
            console.log(err);
        });
    }, [sportCategory])

    /* 
        Get Event List
    */
    useEffect(() => {
        if (eventId != -1) {
            if (startTime != -1) {
                goToPlay()
            } else {
                const interval = setInterval(() => {
                    fetchEventPlay();
                }, intervalTime * 1000);
                return () => clearInterval(interval);
            }
        } else {
            setPlayList([])
        }
    }, [eventId, intervalTime, team1Idx, sportCategory, startTime])

    const goToPlay = (selected = -1) => {
        console.log(selected, 'run goToPlay')
        let dataSetType, resList;
        resList = playList;
        dataSetType = DATASET_TYPE_CATEGORY[sportCategory];
        var result;

        if (resList.boxscore.teams[team1Idx]) {
            var team1Id = resList.boxscore.teams[team1Idx].team.id;                                     //team1 ID
            var team2Id = resList.boxscore.teams[(parseInt(team1Idx) + 1) % 2].team.id;                 //team2 ID
            var team1Name = resList.boxscore.teams[team1Idx].team.name;                                 //team1 Name
            var team2Name = resList.boxscore.teams[(parseInt(team1Idx) + 1) % 2].team.name;

            if (team1Name.includes('&')) {
                team1Name = team1Name.replace('&', 'and');
            }

            if (team2Name.includes('&')) {
                team2Name = team2Name.replace('&', 'and');
            }
        }

        // var matchEvtList = [];
        var selectedTeamIdx = 0;
        var score = [0, 0, 0, 0], tableIndex = 0, textIndex = 0, increaseAmount;

        if (sportCategory == 'SOCCER') {
            if (team1Idx != -1 && eventList) {
                console.log('SOCCER DS START')
                let hisList = [];
                let team1Score, team2Score = 0;
                let quarter = 1;
                let timerList = [[], [], [], []];

                let i = 0;
                let selectedSeqIdx = 0;
                let prevEventItem;

                // if (startTime != -1) {
                //     selectedSeqIdx = findSoccerSeqIndex(eventList, startTime);
                // }

                /*
                    Find Index in Event List with Seq number(StartTime)
                */
                if (selected === -1) {
                    if (startTime != -1) {
                        selectedSeqIdx = findSoccerSeqIndex(eventList, startTime);
                    }
                } else {
                    selectedSeqIdx = selected;
                }

                function loop() {
                    if (i < eventList.length) {

                        var currentPlayItem = eventList[i];
                        var prevPlayItem = eventList[i - 1];

                        let duration = 0;

                        if (prevPlayItem) {
                            duration = (currentPlayItem.time.value - prevPlayItem.time.value) * 1000;
                            
                            if (currentPlayItem.time.value == 2700 || currentPlayItem.time.value == 5400) {
                                if (currentPlayItem.time.displayValue.indexOf('+') != -1) {
                                    let prevSecond = 0;
                                    let currentSecond = parseInt(currentPlayItem.time.displayValue.slice(currentPlayItem.time.displayValue.indexOf('+') + 1, currentPlayItem.time.displayValue.length));
                                    if (currentPlayItem.time.displayValue.indexOf('+') != -1) {
                                        prevSecond = parseInt(prevPlayItem.time.displayValue.slice(prevPlayItem.time.displayValue.indexOf('+') + 1, prevPlayItem.time.displayValue.length));
                                    }
                                    duration = (currentSecond - prevSecond) * 60 * 1000;
                                }
                            }
                        }

                        if (duration <= 0) duration = 1000;

                        if (startTime == -1 || i < selectedSeqIdx) duration = 0;
                        console.log(duration / 1000, i, 'duraion')

                        const handleGoTo = () => {
                            // console.log(i, 'do while')
                            for (let j = 0; j < dataSetType.length; j++) {
    
                                var dataTypeItem = dataSetType[j];
                                var matchTeamId = team1Id;
    
                                if (checkSoccerFunc(dataTypeItem, currentPlayItem, prevPlayItem, team1Id, team2Id, team1Name, team2Name, team1Score, team2Score, matchTeamId)) {
                                    continue;
                                }
    
                                result = handleSoccerScore(currentPlayItem, dataTypeItem, score, tableIndex, prevPlayItem, team1Name, team2Name);
                                hisList = historyList;
    
                                // For Logos
                                if (currentPlayItem.play) {
                                    if(currentPlayItem.play.team === undefined){
                                        selectedTeamIdx = -1
                                    } else {
                                        if (currentPlayItem.play.team.displayName === team1Name) {
                                            selectedTeamIdx = team1Idx;
                                        } else {
                                            selectedTeamIdx = (parseInt(team1Idx) + 1) % 2;
                                        }
                                    }
                                }
    
                                // console.log(i, 'result')
                                if (tableIndex != result.tableIndex) {
                                    hisList[result.tableIndex] = [];
                                }
    
                                let historyItem = {
                                    no: dataTypeItem.no,
                                    seq: currentPlayItem.sequence,
                                    teamIdx: selectedTeamIdx,
                                    score: result.score[result.textIndex],
                                    description: result.description,
                                    increase: result.increaseMount,
                                    time: currentPlayItem.time.displayValue
                                }
    
                                if (dataTypeItem.logo) {
                                    historyItem.teamIdx = team1Idx;
                                    if (dataTypeItem.logo == 2) historyItem.teamIdx = (parseInt(team1Idx) + 1) % 2;
                                }
    
                                hisList[result.textIndex].push(historyItem);
    
                                increaseAmount = result.increaseMount;
                                textIndex = result.textIndex;
                                tableIndex = result.tableIndex;
                                prevEventItem = currentPlayItem;
    
                                // Add First DS in Quater to timerList
                                if (quarter < 5) {
                                    if (currentPlayItem.play) {
                                        if (currentPlayItem.play.period) {
                                            if (currentPlayItem.play.period.number == quarter) {
                                                timerList[0].push({
                                                    label: quarter + "st (" + currentPlayItem.play.clock.displayValue + ")",
                                                    value: currentPlayItem.sequence
                                                })
                                                quarter++;
                                            }
                                        }
                                    }
                                }
    
                                console.log(
                                    'DS_NO:', dataTypeItem.no,
                                    'sequence:', currentPlayItem.sequence,
                                    'team1Name:', team1Name,
                                    // 'currentTeam:', currentPlayItem.play.team.displayName,
                                    // 'typeId:', currentPlayItem.play.type.id,
                                    'description:', result.description,
                                    'increase:', dataTypeItem.Increase,
                                    'rotation:', dataTypeItem.rotation,
                                    'time value:', currentPlayItem.time.value,
                                    'time displayValue:', currentPlayItem.time.displayValue,
                                    // 'historyList:', hisList
                                )
    
    
    
                                // console.log(
                                //     'teamIndex0:', result.score[0],
                                //     'teamIndex1:', result.score[1],
                                //     'teamIndex2:', result.score[2],
                                //     'teamIndex3:', result.score[3]
                                // )
                                if (result) {
                                    setSelTeamIdx(selectedTeamIdx)
                                    setTableScore(result.score);
                                    setSelTextIdx(textIndex);
                                    setSelTblIdx(tableIndex);
                                    setIncreaseAmt(increaseAmount);
                                    setDescription(result.description);
                                    setTime(result.sequenceTime);
                                    setHistoryList(hisList);
                                    if (startTime == -1) {
                                        setTimeList(timerList);
                                    }
                                }
    
                                // console.log(team1Score, team2Score, 'score')
                                if (team1Idx === 1) {
                                    setHomeScore(team1Score);
                                    setAwayScore(team2Score);
                                } else {
                                    setHomeScore(team2Score);
                                    setAwayScore(team1Score);
                                }
                            }

                            i++;
                            goToIndex = i;
                        }

                        
                        if (duration > 0) {
                            timeOut = setTimeout(() => {
                                handleGoTo();
                                clearTimeout(timeOut);
                                timeOut = null;
                                loop(); // Call loop function recursively after delay
                            }, duration);
                        } else {
                            handleGoTo();
                            clearTimeout(timeOut)
                            timeOut = null;
                            loop(); // Call loop function recursively after delay
                        }
                    }
                }
                loop();
            }
        } else {
            if (team1Idx != -1 && eventList) {
                let hisList = [];

                console.log(eventList.length, 'Loop')
                console.log(startTime, 'start Time')
                console.log(hisList, 'hisList')
                console.log(historyList, 'history list in event loop')

                let i = 0;
                let selectedSeqIdx = 0;
                let prevEventItem;
                var team1Id = resList.boxscore.teams[team1Idx].team.id;
                var team2Id = resList.boxscore.teams[(parseInt(team1Idx) + 1) % 2].team.id;
                var team1Name = resList.boxscore.teams[team1Idx].team.name;
                var team2Name = resList.boxscore.teams[(parseInt(team1Idx) + 1) % 2].team.name;

                let PREV_NHL_DS2 = { id: 502, seq: 0, teamId: 0 };
                let PREV_NHL_DS5 = { id: 516, seq: 0, teamId: 0 }

                let NBA2_DS1_CNT = 0;
                let NHL_DS3_CNT = 0;
                let NHL2_DS2_CNT = 0;

                if (team1Name.includes('&')) {
                    team1Name = team1Name.replace('&', 'and');
                }
                if (team2Name.includes('&')) {
                    team2Name = team2Name.replace('&', 'and');
                }

                /*
                    Find Index in Event List with Seq number(StartTime)
                */
                if (selected === -1) {
                    if (startTime != -1) {
                        selectedSeqIdx = findSeqIndex(eventList, startTime);
                    }
                } else {
                    selectedSeqIdx = selected;
                }

                console.log(selectedSeqIdx, 'selectedSeq Index')

                function loop() {
                    if (i < eventList.length) {
                        var currentPlayItem = eventList[i];
                        var prevPlayItem = eventList[i - 1];

                        /*
                            Special DS (NHL)
                        */
                        if (currentPlayItem.type.id == 502) {
                            PREV_NHL_DS2 = {
                                id: 502,
                                seq: currentPlayItem.sequenceNumber,
                                teamId: currentPlayItem.team.id
                            }
                        }

                        if (currentPlayItem.type.id == 516) {
                            PREV_NHL_DS5 = {
                                id: 516,
                                seq: currentPlayItem.sequenceNumber,
                                clock: currentPlayItem.clock,
                            }
                        }

                        /* 
                            Duration
                        */
                        let duration = 0;
                        if (prevPlayItem) {
                            duration = getDuraton(prevPlayItem.wallclock, currentPlayItem.wallclock);

                            if (duration === 0) duration = 1000;
                        }

                        if (startTime == -1 || i < selectedSeqIdx) duration = 0;

                        console.log(duration / 1000, 'duraion')
                        console.log(i, 'do while')

                        /*
                            Handle Go To Feature
                        */
                        const handleGoTo = () => {
                            for (let j = 0; j < dataSetType.length; j++) {
                                // console.log(j,'Datatype')
                                // var prevEventItem;

                                var dataTypeItem = dataSetType[j];
                                var matchTeamId = team1Id;

                                if (checkFunc(dataTypeItem, currentPlayItem, prevPlayItem, team1Id, team2Id, matchTeamId, PREV_NHL_DS2, PREV_NHL_DS5)) {
                                    continue;
                                } else {
                                    if (sportCategory === 'NHL') {
                                        /* 
                                            NHL-DS3 and NHL-DS3-1 Logic(more than 2 times)
                                        */
                                        if (dataTypeItem.rotation) {
                                            NHL_DS3_CNT = 0;
                                        }

                                        if (dataTypeItem.no === "NHL-DS3") {
                                            NHL_DS3_CNT++;
                                            if (NHL_DS3_CNT > 2) {
                                                continue;
                                            }
                                        }

                                        if (dataTypeItem.no === "NHL-DS3-1") {
                                            if (NHL_DS3_CNT <= 2) {
                                                continue;
                                            }
                                        }
                                    }

                                    if (sportCategory === 'NBA') {
                                        /* 
                                            NBA2_DS1 and NBA2_DS4 Logic(more than 2 times)
                                        */
                                        if (dataTypeItem.rotation) {
                                            NBA2_DS1_CNT = 0;
                                        }

                                        if (dataTypeItem.no === "NBA2-DS1") {
                                            NBA2_DS1_CNT++;
                                            if (NBA2_DS1_CNT > 2) {
                                                continue;
                                            }
                                        }

                                        if (dataTypeItem.no === "NBA2-DS4") {
                                            if (NBA2_DS1_CNT <= 2) {
                                                continue;
                                            }
                                        }
                                    }


                                    if (sportCategory === 'NHL2') {
                                        /* 
                                            NHL2_DS2 and NBA2_DS2-1 Logic(more than 2 times)
                                        */
                                        // if (dataTypeItem.rotation) {
                                        //     NHL2_DS2_CNT = 0;
                                        // }

                                        if (dataTypeItem.no === "NHL2_DS2") {
                                            NHL2_DS2_CNT++;
                                            if (NHL2_DS2_CNT > 2) {
                                                continue;
                                            }
                                        }

                                        if (dataTypeItem.no === "NHL2_DS2-1") {
                                            if (NHL2_DS2_CNT <= 2) {
                                                continue;
                                            }
                                        }
                                    }
                                }

                                if (dataTypeItem.teamId) {
                                    matchTeamId = team2Id;
                                }

                                /* 
                                    Special DS
                                */
                                result = handleScore(currentPlayItem, dataTypeItem, score, tableIndex, prevPlayItem, team1Name, team2Name, sportCategory, resList.boxscore);
                                hisList = historyList;

                                /* 
                                    For Logos
                                */
                                selectedTeamIdx = team1Idx;
                                if (team1Id != matchTeamId) {
                                    selectedTeamIdx = (parseInt(team1Idx) + 1) % 2;
                                }

                                /* 
                                    If don't team check, set default team logo
                                */
                                if (dataTypeItem.teamId === -1) {
                                    selectedTeamIdx = -1
                                }

                                if (tableIndex != result.tableIndex) {
                                    hisList[result.tableIndex] = [];
                                }

                                let hisItem = {
                                    no: dataTypeItem.no,
                                    seq: currentPlayItem.sequenceNumber,
                                    // teamId: currentPlayItem.team.id,
                                    teamIdx: selectedTeamIdx,
                                    score: result.score[result.textIndex],
                                    description: result.description,
                                    increase: result.increaseMount,
                                    time: currentPlayItem.clock.displayValue
                                }

                                if (dataTypeItem.logoReverse) {
                                    hisItem.teamIdx = changeTeamIdx(selectedTeamIdx);
                                }

                                if (sportCategory == 'NHL' || sportCategory == 'NHL2') {
                                    hisItem.time = reverseTime(currentPlayItem.clock.displayValue);
                                }

                                hisList[result.textIndex].push(hisItem);

                                increaseAmount = result.increaseMount;
                                textIndex = result.textIndex;
                                tableIndex = result.tableIndex;

                                if (currentPlayItem.team) {
                                    console.log(
                                        'DS_NO:', dataTypeItem.no,
                                        'sequence:', currentPlayItem.sequenceNumber,
                                        'team1Id:', team1Id,
                                        'teamId:', currentPlayItem.team.id,
                                        'typeId:', currentPlayItem.type.id,
                                        // "scoreValue:", currentPlayItem.scoreValue,
                                        // 'scoringPlay', currentPlayItem.scoringPlay,
                                        'Wallclock:', currentPlayItem.wallclock,
                                        'selectedTeamIdx:', selectedTeamIdx,
                                        "rotation:", dataTypeItem.rotation,
                                        'textIdx:', textIndex,
                                        'tableIdx:', tableIndex,
                                        'teamIndex:', tableIndex,
                                        'increase:', increaseAmount,
                                        'description:', result.description,
                                        'homeScore:', currentPlayItem.homeScore,
                                        'awayScore', currentPlayItem.awayScore,
                                        'Period:', currentPlayItem.period.displayValue,
                                        'Clock:', currentPlayItem.clock.displayValue,
                                        'WallClock', currentPlayItem.wallclock
                                    )
                                } else {
                                    console.log(
                                        'DS_NO:', dataTypeItem.no,
                                        'sequence:', currentPlayItem.sequenceNumber,
                                        'team1Id:', team1Id,
                                        'teamId:', 'No team',
                                        'typeId:', currentPlayItem.type.id,
                                        // "scoreValue:", currentPlayItem.scoreValue,
                                        // 'scoringPlay', currentPlayItem.scoringPlay,
                                        'Wallclock:', currentPlayItem.wallclock,
                                        'selectedTeamIdx:', selectedTeamIdx,
                                        "rotation:", dataTypeItem.rotation,
                                        'textIdx:', textIndex,
                                        'tableIdx:', tableIndex,
                                        'teamIndex:', tableIndex,
                                        'increase:', increaseAmount,
                                        'description:', result.description,
                                        'homeScore:', currentPlayItem.homeScore,
                                        'awayScore', currentPlayItem.awayScore,
                                        'Period:', currentPlayItem.period.displayValue,
                                        'Clock:', currentPlayItem.clock.displayValue,
                                        'WallClock', currentPlayItem.wallclock
                                    )
                                }

                                if (result) {
                                    prevEventItem = currentPlayItem;
                                    setSelTeamIdx(selectedTeamIdx)
                                    setTableScore(result.score);
                                    setSelTextIdx(textIndex);
                                    setSelTblIdx(tableIndex);
                                    setIncreaseAmt(increaseAmount);
                                    setDescription(result.description);
                                    setTime(result.sequenceTime);
                                    setHomeScore(result.homeScore);
                                    setAwayScore(result.awayScore);
                                    setHistoryList(hisList);
                                }
                            }

                            i++;
                            goToIndex = i;
                        }

                        if (duration > 0) {
                            timeOut = setTimeout(() => {
                                handleGoTo();
                                clearTimeout(timeOut);
                                timeOut = null;
                                loop(); // Call loop function recursively after delay
                            }, duration);
                        } else {
                            handleGoTo();
                            clearTimeout(timeOut)
                            timeOut = null;
                            loop(); // Call loop function recursively after delay
                        }
                    }
                }

                loop(); // Start the loop
            }
        }
    }

    const fetchEventPlay = () => {
        let dataSetType, apiUrl, resList;
        dataSetType = DATASET_TYPE_CATEGORY[sportCategory];
        apiUrl = URL[sportCategory];

        axios.get(apiUrl,
            {
                params: {
                    event: eventId
                }
            }
        ).then((response) => {
            setPlayList(response.data);
            resList = response.data;
            var result;
            var team1Id, team2Id, team1Name, team2Name;

            if (resList.boxscore.teams[team1Idx]) {
                team1Id = resList.boxscore.teams[team1Idx].team.id;                                     //team1 ID
                team2Id = resList.boxscore.teams[(parseInt(team1Idx) + 1) % 2].team.id;                 //team2 ID
                team1Name = resList.boxscore.teams[team1Idx].team.name;                                 //team1 Name
                team2Name = resList.boxscore.teams[(parseInt(team1Idx) + 1) % 2].team.name;

                if (team1Name.includes('&')) {
                    team1Name = team1Name.replace('&', 'and');
                }

                if (team2Name.includes('&')) {
                    team2Name = team2Name.replace('&', 'and');
                }
            }

            var matchEvtList = [];
            var selectedTeamIdx = 0;

            var score = [0, 0, 0, 0], tableIndex = 0, textIndex = 0, increaseAmount;

            if (sportCategory == 'SOCCER') {
                if (team1Idx != -1 && resList.commentary) {
                    let hisList = [];
                    var team1Score, team2Score = 0;
                    let quarter = 1;
                    let timerList = [[], [], [], []];

                    for (let i = 0; i < resList.commentary.length; i++) {
                        // console.log(i, 'soccer item')
                        for (let j = 0; j < dataSetType.length; j++) {

                            var currentPlayItem = resList.commentary[i];
                            var prevPlayItem = resList.commentary[i - 1];

                            var prevEventItem;

                            var dataTypeItem = dataSetType[j];
                            var matchTeamId = team1Id;

                            if (checkSoccerFunc(dataTypeItem, currentPlayItem, prevPlayItem, team1Id, team2Id, team1Name, team2Name, team1Score, team2Score, matchTeamId)) {
                                continue;
                            }

                            matchEvtList.push(currentPlayItem);
                            result = handleSoccerScore(currentPlayItem, dataTypeItem, score, tableIndex, prevPlayItem, team1Name, team2Name);
                            hisList = historyList;

                            // For Logos
                            if (currentPlayItem.play) {
                                if(currentPlayItem.play.team === undefined){
                                    selectedTeamIdx = -1
                                } else {
                                    if (currentPlayItem.play.team.displayName === team1Name) {
                                        selectedTeamIdx = team1Idx;
                                    } else {
                                        selectedTeamIdx = (parseInt(team1Idx) + 1) % 2;
                                    }
                                }
                            }

                            // if don't have team check, set default default log
                            // if (dataTypeItem.teamId === -1) {
                            //     selectedTeamIdx = -1
                            // }

                            // console.log(i, 'result')
                            if (tableIndex != result.tableIndex) {
                                hisList[result.tableIndex] = [];
                            }

                            let historyItem = {
                                no: dataTypeItem.no,
                                seq: currentPlayItem.sequence,
                                teamIdx: selectedTeamIdx,
                                score: result.score[result.textIndex],
                                description: result.description,
                                increase: result.increaseMount,
                                time: currentPlayItem.time.displayValue
                            }

                            if (dataTypeItem.logo) {
                                historyItem.teamIdx = team1Idx;
                                if (dataTypeItem.logo == 2) historyItem.teamIdx = (parseInt(team1Idx) + 1) % 2;
                            }

                            hisList[result.textIndex].push(historyItem);

                            increaseAmount = result.increaseMount;
                            textIndex = result.textIndex;
                            tableIndex = result.tableIndex;
                            prevEventItem = currentPlayItem;

                            // Add First DS in Quater to timerList
                            if (quarter < 5) {
                                if (currentPlayItem.play) {
                                    if (currentPlayItem.play.period) {
                                        if (currentPlayItem.play.period.number == quarter) {
                                            timerList[0].push({
                                                label: quarter + "st (" + currentPlayItem.play.clock.displayValue + ")",
                                                value: currentPlayItem.sequence
                                            })
                                            quarter++;
                                        }
                                    }
                                }
                            }

                            console.log(
                                'DS_NO:', dataTypeItem.no,
                                'sequence:', currentPlayItem.sequence,
                                'team1Name:', team1Name,
                                // 'currentTeam:', currentPlayItem.play.team.displayName,
                                // 'typeId:', currentPlayItem.play.type.id,
                                'description:', result.description,
                                'increase:', dataTypeItem.Increase,
                                'rotation:', dataTypeItem.rotation,
                                'time value:', currentPlayItem.time.value,
                                'time displayValue:', currentPlayItem.time.displayValue,
                                // 'historyList:', hisList
                            )
                            // console.log(
                            //     'teamIndex0:', result.score[0],
                            //     'teamIndex1:', result.score[1],
                            //     'teamIndex2:', result.score[2],
                            //     'teamIndex3:', result.score[3]
                            // )
                        }
                    }

                    if (result) {
                        setSelTeamIdx(selectedTeamIdx)
                        setTableScore(result.score);
                        setSelTextIdx(textIndex);
                        setSelTblIdx(tableIndex);
                        setIncreaseAmt(increaseAmount);
                        setDescription(result.description);
                        setTime(result.sequenceTime);
                        setHistoryList(hisList);
                        setEventList(matchEvtList)

                        if (startTime == -1) {
                            setTimeList(timerList);
                        }
                    }

                    if (team1Idx === 1) {
                        setHomeScore(team1Score);
                        setAwayScore(team2Score);
                    } else {
                        setHomeScore(team2Score);
                        setAwayScore(team1Score);
                    }
                }
            } else {
                if (team1Idx != -1 && resList.plays) {
                    let hisList = [];
                    let timerList = [[], [], [], []];
                    let quarter = 1;

                    let PREV_NHL_DS2 = { id: 502, seq: 0, teamId: 0 };
                    let PREV_NHL_DS5 = { id: 516, seq: 0, teamId: 0 }

                    let NBA2_DS1_CNT = 0;
                    let NHL_DS3_CNT = 0;
                    let NHL2_DS2_CNT = 0;

                    console.log('Loop', resList.plays.length)

                    for (let i = 0; i < resList.plays.length; i++) {
                        // console.log(i,'Events List')
                        var currentPlayItem = resList.plays[i];
                        var prevPlayItem = resList.plays[i - 1];

                        /*
                            Special DS (NHL)
                        */
                        if (currentPlayItem.type.id == 502) {
                            PREV_NHL_DS2 = {
                                id: 502,
                                seq: currentPlayItem.sequenceNumber,
                                teamId: currentPlayItem.team.id
                            }
                        }

                        if (currentPlayItem.type.id == 516) {
                            PREV_NHL_DS5 = {
                                id: 516,
                                seq: currentPlayItem.sequenceNumber,
                                clock: currentPlayItem.clock,
                            }
                        }

                        for (let j = 0; j < dataSetType.length; j++) {
                            // console.log(j,'Datatype')
                            var dataTypeItem = dataSetType[j];
                            var matchTeamId = team1Id;
                            if (checkFunc(dataTypeItem, currentPlayItem, prevPlayItem, team1Id, team2Id, matchTeamId, PREV_NHL_DS2, PREV_NHL_DS5)) {
                                continue;
                            } else {
                                if (sportCategory === 'NHL') {
                                    /* 
                                        NHL-DS3 and NHL-DS3-1 Logic(more than 2 times)
                                    */
                                    if (dataTypeItem.rotation) {
                                        NHL_DS3_CNT = 0;
                                    }

                                    if (dataTypeItem.no === "NHL-DS3") {
                                        NHL_DS3_CNT++;
                                        if (NHL_DS3_CNT > 2) {
                                            continue;
                                        }
                                    }

                                    if (dataTypeItem.no === "NHL-DS3-1") {
                                        if (NHL_DS3_CNT <= 2) {
                                            continue;
                                        }
                                    }
                                }

                                if (sportCategory === 'NBA') {
                                    /* 
                                        NBA2_DS1 and NBA2_DS4 Logic(more than 2 times)
                                    */
                                    if (dataTypeItem.rotation) {
                                        NBA2_DS1_CNT = 0;
                                    }

                                    if (dataTypeItem.no === "NBA2-DS1") {
                                        NBA2_DS1_CNT++;
                                        if (NBA2_DS1_CNT > 2) {
                                            continue;
                                        }
                                    }

                                    if (dataTypeItem.no === "NBA2-DS4") {
                                        if (NBA2_DS1_CNT <= 2) {
                                            continue;
                                        }
                                    }
                                }

                                if (sportCategory === 'NHL2') {
                                    /* 
                                        NHL2_DS2 and NBA2_DS2-1 Logic(more than 2 times)
                                    */
                                    // if (dataTypeItem.rotation) {
                                    //     NHL2_DS2_CNT = 0;
                                    // }

                                    if (dataTypeItem.no === "NHL2_DS2") {
                                        NHL2_DS2_CNT++;
                                        if (NHL2_DS2_CNT > 2) {
                                            continue;
                                        }
                                    }

                                    if (dataTypeItem.no === "NHL2_DS2-1") {
                                        if (NHL2_DS2_CNT <= 2) {
                                            continue;
                                        }
                                    }
                                }
                            }

                            /*
                                Special DS
                            */
                            if (dataTypeItem.teamId) {
                                matchTeamId = team2Id;
                            }

                            matchEvtList.push(currentPlayItem);
                            result = handleScore(currentPlayItem, dataTypeItem, score, tableIndex, prevPlayItem, team1Name, team2Name, sportCategory, resList.boxscore);
                            hisList = historyList;

                            /*
                                For Logos
                            */
                            selectedTeamIdx = team1Idx;
                            if (team1Id != matchTeamId) {
                                selectedTeamIdx = (parseInt(team1Idx) + 1) % 2;
                            }

                            /*
                                If don't team check, set default team logo
                            */
                            if (dataTypeItem.teamId === -1) {
                                selectedTeamIdx = -1
                            }

                            if (tableIndex != result.tableIndex) {
                                hisList[result.tableIndex] = [];
                            }

                            let hisItem = {
                                no: dataTypeItem.no,
                                seq: currentPlayItem.sequenceNumber,
                                // teamId: currentPlayItem.team.id,
                                teamIdx: selectedTeamIdx,
                                score: result.score[result.textIndex],
                                description: result.description,
                                increase: result.increaseMount,
                                // time: currentPlayItem.clock.displayValue
                            }

                            if (dataTypeItem.logoReverse) {
                                hisItem.teamIdx = changeTeamIdx(selectedTeamIdx);
                            }

                            if(sportCategory === 'MLB'){
                                hisItem.time = currentPlayItem.period.displayValue;
                            } else {
                                if (sportCategory == 'NHL' || sportCategory == 'NHL2') {
                                    hisItem.time = reverseTime(currentPlayItem.clock.displayValue);
                                } else {
                                    hisItem.time = currentPlayItem.clock.displayValue;
                                }
                            }

                            // console.log(reverseTime(currentPlayItem.clock.displayValue), 'reverse time')
                            hisList[result.textIndex].push(hisItem);

                            increaseAmount = result.increaseMount;
                            textIndex = result.textIndex;
                            tableIndex = result.tableIndex;

                            /*
                                Add First DS in Quater to timerList
                            */
                            if (quarter < 5) {
                                if (currentPlayItem.period.number == quarter) {
                                    let timeItem = {
                                        label: currentPlayItem.period.displayValue, 
                                        value: currentPlayItem.sequenceNumber
                                    }

                                    if(sportCategory === "MLB"){
                                        timeItem.label = currentPlayItem.period.displayValue
                                    } else {
                                        if (sportCategory == 'NHL' || sportCategory == 'NHL2') {
                                            timeItem.label = currentPlayItem.period.displayValue + ' ' + reverseTime(currentPlayItem.clock.displayValue);
                                        } else {
                                            timeItem.label = currentPlayItem.period.displayValue + ' ' + currentPlayItem.clock.displayValue
                                        }
                                    }

                                    timerList[0].push(timeItem)
                                    quarter++;
                                }
                            }

                            if(sportCategory === 'MLB'){
                                console.log(
                                    'DS_NO:', dataTypeItem.no,
                                    'Index:', i,
                                    'sequence:', currentPlayItem.sequenceNumber,
                                    'team1Id:', team1Id,
                                    'teamId:', 'No team',
                                    'typeId:', currentPlayItem.type.id,
                                    "scoreValue:", currentPlayItem.scoreValue,
                                    'scoringPlay', currentPlayItem.scoringPlay,
                                    'selectedTeamIdx:', selectedTeamIdx,
                                    "rotation:", dataTypeItem.rotation,
                                    'textIdx:', textIndex,
                                    'tableIdx:', tableIndex,
                                    'teamIndex:', tableIndex,
                                    'increase:', increaseAmount,
                                    'description:', result.description,
                                    'homeScore:', currentPlayItem.homeScore,
                                    'awayScore', currentPlayItem.awayScore,
                                    'WallClock', currentPlayItem.wallclock,
                                    'Period:', currentPlayItem.period.displayValue,
                                )
                            } else {
                                if (currentPlayItem.team) {
                                    console.log(
                                        'DS_NO:', dataTypeItem.no,
                                        'sequence:', currentPlayItem.sequenceNumber,
                                        'team1Id:', team1Id,
                                        'teamId:', currentPlayItem.team.id,
                                        'typeId:', currentPlayItem.type.id,
                                        "scoreValue:", currentPlayItem.scoreValue,
                                        'scoringPlay', currentPlayItem.scoringPlay,
                                        'selectedTeamIdx:', selectedTeamIdx,
                                        "rotation:", dataTypeItem.rotation,
                                        'textIdx:', textIndex,
                                        'tableIdx:', tableIndex,
                                        'teamIndex:', tableIndex,
                                        'increase:', increaseAmount,
                                        'description:', result.description,
                                        'homeScore:', currentPlayItem.homeScore,
                                        'awayScore', currentPlayItem.awayScore,
                                        'Period:', currentPlayItem.period.displayValue,
                                        'Clock:', currentPlayItem.clock.displayValue,
                                        'WallClock', currentPlayItem.wallclock,
                                    )
                                } else {
                                    console.log(
                                        'DS_NO:', dataTypeItem.no,
                                        'sequence:', currentPlayItem.sequenceNumber,
                                        'team1Id:', team1Id,
                                        'teamId:', 'No team',
                                        'typeId:', currentPlayItem.type.id,
                                        "scoreValue:", currentPlayItem.scoreValue,
                                        'scoringPlay', currentPlayItem.scoringPlay,
                                        'selectedTeamIdx:', selectedTeamIdx,
                                        "rotation:", dataTypeItem.rotation,
                                        'textIdx:', textIndex,
                                        'tableIdx:', tableIndex,
                                        'teamIndex:', tableIndex,
                                        'increase:', increaseAmount,
                                        'description:', result.description,
                                        'homeScore:', currentPlayItem.homeScore,
                                        'awayScore', currentPlayItem.awayScore,
                                        'Period:', currentPlayItem.period.displayValue,
                                        'Clock:', currentPlayItem.clock.displayValue,
                                        'WallClock', currentPlayItem.wallclock,
                                    )
                                }
                            }
                        }
                    }

                    if (result) {
                        setSelTeamIdx(selectedTeamIdx)
                        setTableScore(result.score);
                        setSelTextIdx(textIndex);
                        setSelTblIdx(tableIndex);
                        setIncreaseAmt(increaseAmount);
                        setDescription(result.description);
                        setTime(result.sequenceTime);
                        setHomeScore(result.homeScore);
                        setAwayScore(result.awayScore);
                        setHistoryList(hisList);
                        setEventList(matchEvtList)

                        if (startTime == -1) {
                            setTimeList(timerList);
                        }
                    }
                }
            }

        }).catch((err) => {
            console.log(err)
        });
    }

    const handleEvent = () => {
        if (eventId == -1) {
            setEventId(gameId)
        } else {
            alert("please set 'Choose One' in Today Event and then start again.");
        }
    }

    const handleTab = () => {
        setTabStatus(!tabStatus);
    }

    const setInitial = () => {
        setSelTeamIdx(0)
        setTableScore([0, 0, 0, 0]);
        setSelTextIdx(0);
        setSelTblIdx(0);
        setIncreaseAmt(0);
        setDescription('');
        setTime(0);
        setHomeScore(0);
        setAwayScore(0);
        setHistoryList([[], [], [], []]);
        clearTimeout(timeOut);
        timeOut = null;
    }

    /*
        direction
            -1: Prev
            0:  No Direction
            1:  Next
    */
    const handleDS = (direction) => {
        goToIndex = goToIndex + direction;

        if (goToIndex <= 1) {
            goToIndex = 1;
        }

        if (goToIndex > eventList.length) {
            goToIndex = eventList.length - 1;
        }
        console.log(goToIndex, 'go to index')

        setInitial();
        setGoIndex(goToIndex);
        // goToPlay(goToIndex);
    }
    // console.log(selTeamIdx,'render Team Idx')
    return (
        <>
            {
                tabStatus && <>
                    <div className='row'>
                        <div className='col-md-12'>
                            <label className="form-label" style={{ float: "left" }}>Sports Category</label>
                            <select className="form-select form-select-sm"
                                value={sportCategory}
                                onChange={evt => {
                                    setSportCategory(evt.target.value);
                                    setInitial();
                                }}
                            >
                                {
                                    SPORTS_CATEGORY.map((item, index) => {
                                        return (
                                            <option key={index} value={item.value}>{item.label}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className='row my-3'>
                        <div className='col-md-12 mb-5'>
                            <Filter
                                label='Today Event'
                                columns={{ label: "name", value: "id" }}
                                list={events ? events : []}
                                value={eventId}
                                // disabled={sportCategory !== 'NBA'}
                                handleChange={(id) => {
                                    setEventId(id);
                                    setInitial();
                                }}
                            />
                        </div>
                        <div className='col-md-12 mt-3'>
                            <label className="form-label" style={{ float: "left" }}>Team1</label>
                            <select className="form-select form-select-sm"
                                value={team1Idx}
                                onChange={evt => {
                                    setTeam1Idx(evt.target.value)
                                    setTeam2Name(evt.target.value != -1 && playList.boxscore.teams[(parseInt(evt.target.value) + 1) % 2].team.name)
                                }}
                            >
                                <option value={-1}>Choose One</option>
                                {
                                    playList.boxscore && playList.boxscore.teams.map((item, index) => {
                                        return (
                                            <option key={index} value={index}>{item.team.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className='col-md-12 mb-5'>
                            <label className="form-label">Team2</label>
                            <input type="text" value={team2Name} className="form-control form-control-sm" disabled />
                        </div>
                        <div className='text-center mt-3 mb-2'>
                            <button className='btn btn-primary' onClick={handleTab}>Go To Game</button>
                        </div>
                        <div className='col-md-12'>
                            <label className="form-label">Random GameId</label><br />
                            <div className="input-group">
                                <input type="text" className="form-control form-control-sm" placeholder="Game Id"
                                    value={gameId}
                                    onChange={(evt) => {
                                        setGameId(evt.target.value)
                                        setInitial()
                                    }}
                                />
                                <button className="btn btn-success btn-sm" onClick={handleEvent}>Ok</button>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <Filter
                                label='Interval Rate'
                                columns={{ label: "label", value: "value" }}
                                value={intervalTime}
                                list={INTERVAL_TIME}
                                handleChange={(time) => { setIntervalTime(time) }}
                            />
                        </div>
                    </div>

                </>
            }

            {
                !tabStatus && <div className='row'>
                    <div className='text-center mt-3'>
                        <button className='btn btn-primary' onClick={handleTab}>Go To Dashboard</button>
                    </div>
                    <div className='col-6 mt-4 pt-2 text-center'>
                        <button className='btn btn-primary btn-sm' onClick={() => handleDS(-1)} disabled={goIndex <= 0}>Previous</button>
                    </div>
                    <div className='col-6 mt-4 pt-2 text-center'>
                        <button className='btn btn-primary btn-sm' onClick={() => handleDS(1)}>Next</button>
                    </div>
                    <div className='col-6 text-center'>
                        <label className="form-label" style={{ float: "left" }}>Time</label>
                        <select className="form-select form-select-sm"
                            value={startTime}
                            onChange={evt => {
                                setInitial();
                                setStartTime(evt.target.value);
                            }}
                        >
                            <option value={-1}>Choose One</option>
                            {
                                timeList[0].map((item, index) => {
                                    return (
                                        <option key={index} value={item.value}>{item.label}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className='col-6 mt-4 pt-2 text-center'>
                        <button className='btn btn-primary btn-sm' onClick={() => { setStartTime(-1) }}>Go To Real Time</button>
                    </div>
                </div>
            }
            <ScoreBoardComp
                tabStatus={tabStatus}
                eventId={eventId}
                team1Idx={team1Idx}
                playList={playList}
                awayScore={awayScore}
                homeScore={homeScore}
                time={time}
                tableScore={tableScore}
                selTblIdx={selTblIdx}
                description={description}
                increaseAmt={increaseAmt}
                selTeamIdx={selTeamIdx}
                selTextIdx={selTextIdx}
                historyList={historyList}
                sportCategory={sportCategory}
            />
        </>
    );
}

export default EventComponent;


