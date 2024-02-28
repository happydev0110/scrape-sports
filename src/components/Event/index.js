import React, { useState, useEffect } from 'react';
import axios from 'axios';

import DatePicker from "react-datepicker";
import { URL, INTERVAL_TIME } from '../../const.js';
import Filter from '../../layouts/Filter';
import "react-datepicker/dist/react-datepicker.css";

function EventComponent() {
    const [events, setEvents] = useState([]);
    const [playList, setPlayList] = useState([]);
    const [intervalTime, setIntervalTime] = useState(3);

    const [date, setDate] = useState(new Date());
    const [eventId, setEventId] = useState(-1);

    const [time, setTime] = useState();
    const [team1Idx, setTeam1Idx] = useState(-1);
    const [team2Name, setTeam2Name] = useState('');

    const [team1Score, setTeam1Score] = useState(0);
    const [team2Score, setTeam2Score] = useState(0);

    const [selTblIdx, setSelTblIdx] = useState(-1);
    const [description, setDescription] = useState('')
    const [table1Score, setTable1Score] = useState(0);
    const [table2Score, setTable2Score] = useState(0);
    const [table3Score, setTable3Score] = useState(0);
    const [table4Score, setTable4Score] = useState(0);

    // Get Total Event
    useEffect(() => {
        axios.get(URL.EVENT).then((response) => {
            setEvents(response.data.events);
        }).catch((err) => {
            console.log(err);
        });
    }, [])

    // Get Event List
    useEffect(() => {
        if (eventId != -1) {
            // console.log(eventId, team1Idx, "event play script")
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

            // console.log(team1Idx, resList.plays, 'response data')
            if (team1Idx != -1 && resList.plays) {
                let score = 0
                let description = "";

                for (let i = 0; i < resList.plays.length; i++) {
                    if(resList.plays[i].scoreValue == 3 && resList.plays[i].team.id == resList.boxscore.teams[team1Idx].team.id ){
                        score = score + resList.plays[i].scoreValue;
                        description = resList.plays[i].text;

                        console.log(resList.plays[i], i, resList.boxscore.teams[team1Idx].team.id, score, 'team info')
                        // setTeam1Score(table1Score + resList.play[i].scoreValue);
                        // selTblIdx(0)
                    }
                    // let score1 = 0;
                    // if (resList.plays[i].team.id == resList.boxscore.teams[team1Idx].team.id && resList.plays[i].scoreValue == 3) {
                    //     score1 = score1 + resList.plays[i].scoreValue;
                    // }
                }
                setTable1Score(score);
                setSelTblIdx(0)
                setDescription(description)
                // resList.plays.forEach((item, index) => {
                //     let score1 = 0;
                //     console.log(item.team, index, "team info")
                //     // console.log(item, index, 'event play')
                //     if (item.team.id == resList.boxscore.teams[team1Idx].team.id && item.scoreValue == 3) {
                //         score1 = score1 + item.scoreValue;
                //     }
                // });
            }
        }).catch((err) => {
            console.log(err)
        });
    }

    return (
        <>
            <div className='row my-3'>
                <div className='col-md-3'>
                    <label className="form-label">Date</label><br />
                    <DatePicker
                        className='form-control form-control-sm'
                        selected={date}
                        onSelect={(item) => {
                            console.log(item, 'seleted date')
                        }}
                        onChange={(item) => {
                            console.log(item, 'changed date')
                            setDate(item)
                        }}
                        dateFormat="YYYY-MM-dd"
                    />
                </div>
                <div className='col-md-3'>
                    <Filter
                        label='Event'
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
                {/* <div className='col-md-3'>
                    <label className="form-label">gameId</label>
                    <input type="text" value={eventId} className="form-control form-control-sm"
                        disabled={eventId != -1}
                    />
                </div> */}
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
                            <p><b>{(team1Idx != -1 && team1Idx == 0) ? team1Score : 0}</b></p>
                        </div>
                        <div className='col-md-3'>
                            <img src={team1Idx != -1 ? playList.boxscore.teams[(parseInt(team1Idx) + 1) % 2].team.logo : undefined} style={{ width: 40, height: 40 }} />
                            <p className='p-0 d-inline-block'>{team1Idx != -1 && playList.boxscore && playList.boxscore.teams[(parseInt(team1Idx) + 1) % 2].team.name}</p>
                            <p><b>{team2Score}</b></p>
                        </div>
                    </>
                }
            </div>
            <div className='row pb-2'>
                <div className='col-md-3'>
                    <h5><b>Time:</b></h5>
                    <p>{time}</p>
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
                                <p className='d-inline-block'>{description}</p><br />
                            </>
                        }
                        <p className='d-inline-block'><b>score:</b></p>
                        <p className='d-inline-block'>{table1Score}</p>
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
                                <p className='d-inline-block'>{table2Score}</p><br />
                            </>
                        }
                        <p className='d-inline-block'><b>score:</b></p>
                        <p className='d-inline-block'>{table2Score}</p>
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
                                <p className='d-inline-block'>{table3Score}</p><br />
                            </>
                        }
                        <p className='d-inline-block'><b>score:</b></p>
                        <p className='d-inline-block'>{table3Score}</p>
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
                                <p className='d-inline-block'>{table4Score}</p><br />
                            </>
                        }
                        <p className='d-inline-block'><b>score:</b></p>
                        <p className='d-inline-block'>{table4Score}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EventComponent;
