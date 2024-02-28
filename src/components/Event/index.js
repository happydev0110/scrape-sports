import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Filter from '../../layouts/Filter';

import { URL, INTERVAL_TIME, DATASET_TYPE } from '../../const.js';
import { handleScore } from '../../func.js';

function EventComponent() {
    const [events, setEvents] = useState([]);
    const [playList, setPlayList] = useState([]);
    const [intervalTime, setIntervalTime] = useState(3);

    const [eventId, setEventId] = useState(-1);
    const [gameId, setGameId] = useState();

    const [time, setTime] = useState();
    const [team1Idx, setTeam1Idx] = useState(-1);
    const [team2Name, setTeam2Name] = useState('');

    const [homeScore, setHomeScore] = useState(0);
    const [awayScore, setAwayScore] = useState(0);

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
        axios.get(URL.BASKETBALL,
            {
                params: {
                    event: eventId
                }
            }
        ).then((response) => {
            setPlayList(response.data);
            var resList = response.data;

            if (team1Idx != -1 && resList.plays) {
                let score = [0, 0, 0, 0], tableIndex = 0;
                let playIndex = 0;
                let result;

                for (let i = 0; i < resList.plays.length; i++) {
                    for (let j = 0; j < DATASET_TYPE.length; j++) {
                        var playItem = resList.plays[i];
                        var dataTypeItem = DATASET_TYPE[j];

                        if (playItem.team && (playItem.team.id == resList.boxscore.teams[team1Idx].team.id)) {
                            if (dataTypeItem.typeId) {
                                if (dataTypeItem.scoreValue != -1) {
                                    //Compare(teamId, typeId, scoreValue)
                                    if (playItem.type.id == dataTypeItem.typeId && playItem.scoreValue == dataTypeItem.scoreValue) {

                                        result = handleScore(playItem, dataTypeItem, score, tableIndex);
                                        tableIndex = result.tableIndex;
                                        playIndex = i;
                                    }
                                } else {
                                    // Compare(teamId, typeId)
                                    if (playItem.type.id == dataTypeItem.typeId) {
                                        result = handleScore(playItem, dataTypeItem, score, tableIndex);
                                        tableIndex = result.tableIndex;
                                        playIndex = i;
                                    }
                                }
                            } else {
                                if (dataTypeItem.scoreValue != -1) {
                                    // Compare(teamId, scoreValue)
                                    if (playItem.scoreValue == dataTypeItem.scoreValue) {
                                        result = handleScore(playItem, dataTypeItem, score, tableIndex);
                                        tableIndex = result.tableIndex;
                                        playIndex = i;
                                    }
                                } else {
                                    // Compare(teamId)
                                    result = handleScore(playItem, dataTypeItem, score, tableIndex);
                                    tableIndex = result.tableIndex;
                                    playIndex = i;
                                }
                            }
                        }
                    }
                }

                setTableScore(result.score);
                setSelTblIdx(tableIndex)
                setDescription(result.description)
                setTime(result.sequenceTime)
                setHomeScore(result.homeScore)
                setAwayScore(result.awayScore)
            }
        }).catch((err) => {
            console.log(err)
        });
    }

    const handleEvent = () => { 
        if(eventId == -1){
            setEventId(gameId)
        } else {
            alert("please set 'Choose One' in Today Event and then start again.");
        } 
    }

    return (
        <>
            <div className='row my-3'>
                <div className='col-md-3'>
                    <Filter
                        label='Today Event'
                        columns={{ label: "name", value: "id" }}
                        list={events ? events : []}
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
                    <h5><b>Score:</b></h5>
                </div>
                {
                    eventId != -1 && team1Idx != -1 &&
                    <>
                        <div className='col-md-3'>
                            <img src={team1Idx != -1 ? playList.boxscore.teams[team1Idx].team.logo : undefined} style={{ width: 40, height: 40 }} />
                            <p className='p-0 d-inline-block'>{team1Idx != -1 && playList.boxscore && playList.boxscore.teams[team1Idx].team.name}</p>
                            <p><b>{(team1Idx != -1 && team1Idx == 0) ? awayScore : homeScore}</b></p>
                        </div>
                        <div className='col-md-3'>
                            <img src={team1Idx != -1 ? playList.boxscore.teams[(parseInt(team1Idx) + 1) % 2].team.logo : undefined} style={{ width: 40, height: 40 }} />
                            <p className='p-0 d-inline-block'>{team1Idx != -1 && playList.boxscore && playList.boxscore.teams[(parseInt(team1Idx) + 1) % 2].team.name}</p>
                            <p><b>{(team1Idx != -1 && team1Idx == 0) ? homeScore : awayScore}</b></p>
                        </div>
                    </>
                }
            </div>
            <div className='row pb-2'>
                <div className='col-md-6'>
                    <h5 className='d-inline-block'><b>Time:</b></h5>
                    <p className='d-inline-block px-5'>{time}</p>
                </div>
            </div>
            <div className='row py-3'>
                <div className='col-md-12'>
                    <div className='float-left d-inline-block'>
                        <h5 className='d-inline-block'>Table1</h5>
                        <p className='d-inline-block text-danger px-4'>{selTblIdx == 0 && 'Current Table'}</p>
                    </div>
                    <div className={selTblIdx == 0 ? 'border border-danger p-3' : 'border p-3'}>
                        {
                            selTblIdx == 0 && <>
                                <p className='d-inline-block'><b>Description:</b></p>
                                <p className='d-inline-block px-3'>{description}</p><br />
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
                        <h5 className='d-inline-block'>Table2</h5>
                        <p className='d-inline-block text-danger px-4'>{selTblIdx == 1 && 'Current Table'}</p>
                    </div>
                    <div className={selTblIdx == 1 ? 'border border-danger p-3' : 'border p-3'}>
                        {
                            selTblIdx == 1 && <>
                                <p className='d-inline-block'><b>Description:</b></p>
                                <p className='d-inline-block px-3'>{description}</p><br />
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
                        <h5 className='d-inline-block'>Table3</h5>
                        <p className='d-inline-block text-danger px-4'>{selTblIdx == 2 && 'Current Table'}</p>
                    </div>
                    <div className={selTblIdx == 2 ? 'border border-danger p-3' : 'border p-3'}>
                        {
                            selTblIdx == 2 && <>
                                <p className='d-inline-block'><b>Description:</b></p>
                                <p className='d-inline-block px-3'>{description}</p><br />
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
                        <h5 className='d-inline-block'>Table4</h5>
                        <p className='d-inline-block text-danger px-4'>{selTblIdx == 3 && 'Current Table'}</p>
                    </div>
                    <div className={selTblIdx == 3 ? 'border border-danger p-3' : 'border p-3'}>
                        {
                            selTblIdx == 3 && <>
                                <p className='d-inline-block'><b>Description:</b></p>
                                <p className='d-inline-block px-3'>{description}</p><br />
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
