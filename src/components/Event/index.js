import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Filter from '../../layouts/Filter';

import { URL, SPORTS_CATEGORY, INTERVAL_TIME, DATASET_TYPE, DATASET_TYPE1 } from '../../const.js';
import { handleScore } from '../../func.js';

function EventComponent() {
    const [events, setEvents] = useState([]);
    const [playList, setPlayList] = useState([]);
    const [intervalTime, setIntervalTime] = useState(3);

    const [eventId, setEventId] = useState(-1);
    const [gameId, setGameId] = useState('');
    const [sportCategory, setSportCategory] = useState(1);

    const [time, setTime] = useState();
    const [team1Idx, setTeam1Idx] = useState(-1);
    const [team2Name, setTeam2Name] = useState('');

    const [increaseAmt, setIncreaseAmt] = useState(false);
    const [homeScore, setHomeScore] = useState(0);
    const [awayScore, setAwayScore] = useState(0);

    const [selTextIdx, setSelTextIdx] = useState(-1);
    const [selTblIdx, setSelTblIdx] = useState(-1);
    const [description, setDescription] = useState('');

    const [tableScore, setTableScore] = useState([0, 0, 0, 0]);

    // Get Total Event
    useEffect(() => {
        axios.get(URL.EVENT1,
        ).then((response) => {
            setEvents(response.data.events);
        }).catch((err) => {
            console.log(err);
        });
    }, [])

    // Get Event List
    useEffect(() => {
        if (eventId != -1) {
            const interval = setInterval(() => {
                fetchEventPlay();
            }, intervalTime * 1000);
            return () => clearInterval(interval);
        } else {
            setPlayList([])
        }
    }, [eventId, intervalTime, team1Idx])

    const fetchEventPlay = async () => {

        let dataSetType = DATASET_TYPE;
        let apiUrl = URL.BASKETBALL;

        if (sportCategory == 2) {
            dataSetType = DATASET_TYPE1;
            apiUrl = URL.NCAA_EVENT;
        }

        axios.get(apiUrl,
            {
                params: {
                    event: eventId
                }
            }
        ).then((response) => {
            setPlayList(response.data);
            var resList = response.data;

            if (team1Idx != -1 && resList.plays) {
                let score = [0, 0, 0, 0], tableIndex = 0, textIndex = 0, increaseAmount;
                let playIndex = 0;
                let result;

                let team1Id = resList.boxscore.teams[team1Idx].team.id;
                let team2Id = resList.boxscore.teams[(parseInt(team1Idx) + 1) % 2].team.id;
                let matchEvtList = [];

                console.log(team1Id, 'team1 Index')
                console.log(team2Id, 'team2 Index')

                for (let i = 0; i < resList.plays.length; i++) {
                    // console.log(i,'Events List')
                    for (let j = 0; j < dataSetType.length; j++) {
                        // console.log(j, 'Dataset_type')
                        var currentPlayItem = resList.plays[i];
                        var prevPlayItem = resList.plays[i - 1];

                        var matchTeamId = team1Id;
                        var dataTypeItem = dataSetType[j];

                        if (dataSetType[j].teamId) {
                            matchTeamId = team2Id
                        }

                        if (currentPlayItem.team && (currentPlayItem.team.id == matchTeamId)) {
                            if (dataTypeItem.typeId) {
                                if (dataTypeItem.scoreValue != -1) {
                                    //Compare(teamId, typeId, scoreValue)
                                    if (currentPlayItem.type.id == dataTypeItem.typeId && currentPlayItem.scoreValue == dataTypeItem.scoreValue) {
                                        matchEvtList.push(currentPlayItem);
                                        result = handleScore(currentPlayItem, dataTypeItem, score, tableIndex, prevPlayItem);
                                        increaseAmount = result.increaseMount;
                                        textIndex = result.textIndex;
                                        tableIndex = result.tableIndex;
                                        playIndex = i;

                                        matchEvtList.push(currentPlayItem)
                                        console.log(
                                            'sequence:', currentPlayItem.sequenceNumber,
                                            'teamId:', currentPlayItem.team.id,
                                            'typeId:', currentPlayItem.type.id,
                                            "scoreValue:", currentPlayItem.scoreValue,
                                            "rotation:", dataTypeItem.rotation,
                                            'teamIndex:', tableIndex,
                                            'increase:', increaseAmount,
                                            'description:', result.description,
                                            'homeScore:', currentPlayItem.homeScore,
                                            'awayScore', currentPlayItem.awayScore,
                                            'Period:', currentPlayItem.period.displayValue,
                                            'Clock:', currentPlayItem.clock.displayValue,
                                            'compare fields:', "teanId,typeId,scoreValue")
                                    }
                                } else {
                                    // Compare(teamId, typeId)
                                    if (currentPlayItem.type.id == dataTypeItem.typeId) {
                                        matchEvtList.push(currentPlayItem);
                                        // Dataset30
                                        if (dataTypeItem.index === 30) {
                                            if (currentPlayItem.clock.displayValue !== prevPlayItem.clock.displayValue || prevPlayItem.scoreValue != 2 || prevPlayItem.team.id == matchTeamId || dataTypeItem.noMatchList.indexOf(prevPlayItem.type.id) !== -1) {
                                                continue;
                                            }
                                        }
                                        // Dataset30

                                        // Dataset48
                                        if(dataTypeItem.index === 48){
                                            if(currentPlayItem.clock.displayValue === prevPlayItem.clock.displayValue){
                                                continue;
                                            }
                                        }
                                        // Dataset48

                                        result = handleScore(currentPlayItem, dataTypeItem, score, tableIndex, prevPlayItem);
                                        increaseAmount = result.increaseMount;
                                        textIndex = result.textIndex;
                                        tableIndex = result.tableIndex;
                                        playIndex = i;

                                        matchEvtList.push(currentPlayItem)
                                        // console.log(
                                        //     'datasetNum:', dataTypeItem.index,
                                        //     'currentPlayItem:', currentPlayItem,
                                        //     'prevPlayItem:',prevPlayItem
                                        // )
                                        console.log(
                                            'sequence:', currentPlayItem.sequenceNumber,
                                            'teamId:', currentPlayItem.team.id,
                                            'typeId:', currentPlayItem.type.id,
                                            "scoreValue:", currentPlayItem.scoreValue,
                                            "rotation:", dataTypeItem.rotation,
                                            'teamIndex:', tableIndex,
                                            'increase:', increaseAmount,
                                            'description:', result.description,
                                            'homeScore:', currentPlayItem.homeScore,
                                            'awayScore', currentPlayItem.awayScore,
                                            'Period:', currentPlayItem.period.displayValue,
                                            'Clock:', currentPlayItem.clock.displayValue,
                                            'compare fields:', "teamId, typeId")
                                    }
                                }
                            } else {
                                if (dataTypeItem.scoreValue != -1) {
                                    // Compare(teamId, scoreValue)
                                    if (currentPlayItem.scoreValue == dataTypeItem.scoreValue) {
                                        matchEvtList.push(currentPlayItem);
                                        result = handleScore(currentPlayItem, dataTypeItem, score, tableIndex, prevPlayItem);
                                        increaseAmount = result.increaseMount;
                                        textIndex = result.textIndex;
                                        tableIndex = result.tableIndex;
                                        playIndex = i;

                                        matchEvtList.push(currentPlayItem)
                                        console.log(
                                            'sequence:', currentPlayItem.sequenceNumber,
                                            'teamId:', currentPlayItem.team.id,
                                            'typeId:', currentPlayItem.type.id,
                                            "scoreValue:", currentPlayItem.scoreValue,
                                            "rotation:", dataTypeItem.rotation,
                                            'teamIndex:', tableIndex,
                                            'increase:', increaseAmount,
                                            'description:', result.description,
                                            'homeScore:', currentPlayItem.homeScore,
                                            'awayScore', currentPlayItem.awayScore,
                                            'Period:', currentPlayItem.period.displayValue,
                                            'Clock:', currentPlayItem.clock.displayValue,
                                            'compare fields:', "teamId,scoreValue")
                                    }
                                } else {
                                    // Compare(teamId)
                                    matchEvtList.push(currentPlayItem);
                                    result = handleScore(currentPlayItem, dataTypeItem, score, tableIndex, prevPlayItem);
                                    increaseAmount = result.increaseMount;
                                    textIndex = result.textIndex;
                                    tableIndex = result.tableIndex;
                                    playIndex = i;

                                    matchEvtList.push(currentPlayItem)
                                    console.log(
                                        'sequence:', currentPlayItem.sequenceNumber,
                                        'teamId:', currentPlayItem.team.id,
                                        'typeId:', currentPlayItem.type.id,
                                        "scoreValue:", currentPlayItem.scoreValue,
                                        "rotation:", dataTypeItem.rotation,
                                        'teamIndex:', tableIndex,
                                        'increase:', increaseAmount,
                                        'description:', result.description,
                                        'homeScore:', currentPlayItem.homeScore,
                                        'awayScore', currentPlayItem.awayScore,
                                        'Period:', currentPlayItem.period.displayValue,
                                        'Clock:', currentPlayItem.clock.displayValue,
                                        'compare fields:', "teamId")
                                }
                            }
                        }
                    }
                }

                if (result) {
                    setTableScore(result.score);
                    setSelTextIdx(textIndex);
                    setSelTblIdx(tableIndex);
                    setIncreaseAmt(increaseAmount);
                    setDescription(result.description);
                    setTime(result.sequenceTime);
                    setHomeScore(result.homeScore);
                    setAwayScore(result.awayScore);
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

    return (
        <>
            <div className='row'>
                <div className='col-md-2'>
                    <label className="form-label" style={{ float: "left" }}>Sports Category</label>
                    <select className="form-select form-select-sm"
                        value={sportCategory}
                        onChange={evt => {
                            setSportCategory(evt.target.value)
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
                <div className='col-md-3'>
                    <Filter
                        label='Today Event'
                        columns={{ label: "name", value: "id" }}
                        list={events ? events : []}
                        disabled={sportCategory == 2}
                        handleChange={(id) => {
                            setEventId(id);
                            setTeam1Idx(-1);
                            setTeam2Name('');
                            setPlayList([])
                        }}
                    />
                </div>
                <div className='col-md-3'>
                    <label className="form-label">Random GameId</label><br />
                    <div className="input-group">
                        <input type="text" className="form-control form-control-sm" placeholder="Game Id"
                            value={gameId}
                            onChange={(evt) => { setGameId(evt.target.value) }}
                        />
                        <button className="btn btn-success btn-sm" onClick={handleEvent}>Start</button>
                    </div>
                </div>
            </div>
            <div className='row my-3'>
                <div className='col-md-2'>
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
                <div className='col-md-2'>
                    <label className="form-label">Team2</label>
                    <input type="text" value={team2Name} className="form-control form-control-sm" disabled />
                </div>
                <div className='col-md-2'>
                    <Filter
                        label='Interval Rate'
                        columns={{ label: "label", value: "value" }}
                        list={INTERVAL_TIME}
                        handleChange={(time) => { setIntervalTime(time) }}
                    />
                </div>
            </div>
            <div className='row py-2'>
                <div className='col-md-2'>
                    {
                        eventId != -1 && team1Idx != -1 &&
                        <>
                            <div className='d-inline-block'>
                                <img src={team1Idx != -1 ? playList.boxscore.teams[team1Idx].team.logo : undefined} style={{ width: 40, height: 40 }} />
                                <p className='px-2 d-inline-block'><b>{(team1Idx != -1 && team1Idx == 0) ? awayScore : homeScore}</b></p>
                            </div>
                            <div className='d-inline-block'>
                                <img src={team1Idx != -1 ? playList.boxscore.teams[(parseInt(team1Idx) + 1) % 2].team.logo : undefined} style={{ width: 40, height: 40 }} />
                                <p className='px-2 d-inline-block'><b>{(team1Idx != -1 && team1Idx == 0) ? homeScore : awayScore}</b></p>
                            </div>
                            <div className='d-inline-block'>
                                <p className='d-inline-block px-5'>{time}</p>
                            </div>
                        </>
                    }
                </div>
            </div>
            <div className='row pb-2'>
                <div className='col-md-6'>
                </div>
            </div>
            <div className='row py-3'>
                <div className='col-md-12'>
                    <div className='float-left d-inline-block'>
                        <h5 className='d-inline-block'>Team1</h5>
                    </div>
                    <div className={selTblIdx == 0 ? 'border border-danger p-3' : 'border p-3'}>
                        {
                            selTextIdx == 0 && <>
                                <p className='d-inline-block'><b className='text-danger'>Last Play:</b></p>
                                <p className='d-inline-block px-3'>{description}<b className='text-danger'>{increaseAmt ? " +" + increaseAmt : ' +0'}</b></p><br />
                            </>
                        }
                        <p className='d-inline-block'><b>score:</b></p>
                        <p className='d-inline-block px-3'>{tableScore[0]}</p>
                    </div>
                </div>
            </div>
            <div className='row py-3'>
                <div className='col-md-12'>
                    <div className='float-left d-inline-block'>
                        <h5 className='d-inline-block'>Team2</h5>
                    </div>
                    <div className={selTblIdx == 1 ? 'border border-danger p-3' : 'border p-3'}>
                        {
                            selTextIdx == 1 && <>
                                <p className='d-inline-block'><b className='text-danger'>Last Play:</b></p>
                                <p className='d-inline-block px-3'>{description}<b className='text-danger'>{increaseAmt ? " +" + increaseAmt : ' +0'}</b></p><br />
                            </>
                        }
                        <p className='d-inline-block'><b>score:</b></p>
                        <p className='d-inline-block px-3'>{tableScore[1]}</p>
                    </div>
                </div>
            </div>
            <div className='row py-3'>
                <div className='col-md-12'>
                    <div className='float-left d-inline-block'>
                        <h5 className='d-inline-block'>Team3</h5>
                    </div>
                    <div className={selTblIdx == 2 ? 'border border-danger p-3' : 'border p-3'}>
                        {
                            selTextIdx == 2 && <>
                                <p className='d-inline-block'><b className='text-danger'>Last Play:</b></p>
                                <p className='d-inline-block px-3'>{description}<b className='text-danger'>{increaseAmt ? " +" + increaseAmt : ' +0'}</b></p><br />
                            </>
                        }
                        <p className='d-inline-block'><b>score:</b></p>
                        <p className='d-inline-block px-3'>{tableScore[2]}</p>
                    </div>
                </div>
            </div>
            <div className='row py-3'>
                <div className='col-md-12'>
                    <div className='float-left d-inline-block'>
                        <h5 className='d-inline-block'>Team4</h5>
                    </div>
                    <div className={selTblIdx == 3 ? 'border border-danger p-3' : 'border p-3'}>
                        {
                            selTextIdx == 3 && <>
                                <p className='d-inline-block'><b className='text-danger'>Last Play:</b></p>
                                <p className='d-inline-block px-3'>{description}<b className='text-danger'>{increaseAmt ? " +" + increaseAmt : ' +0'}</b></p><br />
                            </>
                        }
                        <p className='d-inline-block'><b>score:</b></p>
                        <p className='d-inline-block px-3'>{tableScore[3]}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EventComponent;
