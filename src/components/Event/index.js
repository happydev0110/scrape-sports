import React, { useState, useEffect } from 'react';
import axios from 'axios';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Filter from '../../layouts/Filter';

import { URL, INTERVAL_TIME, DATASET_TYPE } from '../../const.js';
// import { formatDate } from '../../func.js';

function EventComponent() {
    const [events, setEvents] = useState([]);
    const [playList, setPlayList] = useState([]);
    const [intervalTime, setIntervalTime] = useState(3);

    // const [date, setDate] = useState(new Date());
    // const [dateKey, setDateKey] = useState(formatDate(new Date()));

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
                let score = [0, 0, 0, 0], tableIndex = 0, sequenceTime = '', homeScore = 0, awayScore = 0;
                let description = "";

                for (let i = 0; i < resList.plays.length; i++) {
                    for (let j = 0; j < DATASET_TYPE.length; j++) {
                        var playItem = resList.plays[i];
                        var dataTypeItem = DATASET_TYPE[j];

                        if (playItem.team && (playItem.team.id == resList.boxscore.teams[team1Idx].team.id)) {
                            if (dataTypeItem.typeId) {
                                if (dataTypeItem.scoreValue) {
                                    //Compare(teamId, typeId, scoreValue)
                                    if (playItem.type.id == dataTypeItem.typeId && playItem.scoreValue == dataTypeItem.Increase) {
                                        if (dataTypeItem.Increase) {
                                            score[tableIndex] = score[tableIndex] + dataTypeItem.Increase;
                                        }

                                        if (dataTypeItem.rotation) {
                                            tableIndex = tableIndex + 1;
                                            tableIndex = tableIndex % 4;
                                        }

                                        description = playItem.text;
                                        sequenceTime = playItem.period.displayValue + '(' + playItem.clock.displayValue + ')';
                                        homeScore = playItem.homeScore;
                                        awayScore = playItem.awayScore;
                                    }
                                } else {
                                    // Compare(teamId, typeId)
                                    if (playItem.type.id == dataTypeItem.typeId) {
                                        if (dataTypeItem.Increase) {
                                            score[tableIndex] = score[tableIndex] + dataTypeItem.Increase;
                                        }

                                        if (dataTypeItem.rotation) {
                                            tableIndex = tableIndex + 1;
                                            tableIndex = tableIndex % 4;
                                        }
                                        description = playItem.text;
                                        sequenceTime = playItem.period.displayValue + '(' + playItem.clock.displayValue + ')';
                                        homeScore = playItem.homeScore;
                                        awayScore = playItem.awayScore;
                                    }
                                }
                            } else {
                                if (dataTypeItem.scoreValue) {
                                    // Compare(teamId, scoreValue)
                                    if (playItem.scoreValue == dataTypeItem.Increase) {
                                        if (dataTypeItem.Increase) {
                                            score[tableIndex] = score[tableIndex] + dataTypeItem.Increase;
                                        }

                                        if (dataTypeItem.rotation) {
                                            tableIndex = tableIndex + 1;
                                            tableIndex = tableIndex % 4;
                                        }
                                        description = playItem.text;
                                        sequenceTime = playItem.period.displayValue + '(' + playItem.clock.displayValue + ')';
                                        homeScore = playItem.homeScore;
                                        awayScore = playItem.awayScore;
                                    }
                                } else {
                                    // Compare(teamId)
                                    if (dataTypeItem.Increase) {
                                        score[tableIndex] = score[tableIndex] + dataTypeItem.Increase;
                                    }

                                    if (dataTypeItem.rotation) {
                                        tableIndex = tableIndex + 1;
                                        tableIndex = tableIndex % 4;
                                    }
                                    description = playItem.text;
                                    sequenceTime = playItem.period.displayValue + '(' + playItem.clock.displayValue + ')';
                                    homeScore = playItem.homeScore;
                                    awayScore = playItem.awayScore;
                                }
                            }
                        }
                    }
                }

                setTableScore(score);
                setSelTblIdx(tableIndex)
                setDescription(description)
                setTime(sequenceTime)
                setHomeScore(homeScore)
                setAwayScore(awayScore)
            }
        }).catch((err) => {
            console.log(err)
        });
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
                    <input className='form-control form-control-sm'
                        value={gameId}
                        onChange={(item) => { setGameId(item) }}
                    />
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
                            <p><b>{(team1Idx != -1 && team1Idx == 0) ? homeScore : awayScore}</b></p>
                        </div>
                        <div className='col-md-3'>
                            <img src={team1Idx != -1 ? playList.boxscore.teams[(parseInt(team1Idx) + 1) % 2].team.logo : undefined} style={{ width: 40, height: 40 }} />
                            <p className='p-0 d-inline-block'>{team1Idx != -1 && playList.boxscore && playList.boxscore.teams[(parseInt(team1Idx) + 1) % 2].team.name}</p>
                            <p><b>{(team1Idx != -1 && team1Idx == 0) ? awayScore : homeScore}</b></p>
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
