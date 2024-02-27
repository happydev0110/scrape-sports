import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { URL, INTERVAL_TIME } from '../../const.js';
import Filter from '../../layouts/Filter';

function EventComponent() {
    const [eventId, setEventId] = useState(-1);
    const [data, setData] = useState([]);
    const [playList, setEvenList] = useState([]);
    const [intervalTime, setIntervalTime] = useState(1);

    const [time, setTime] = useState();
    const [team1Idx, setTeam1Idx] = useState(-1);
    const [team2Name, setTeam2Name] = useState('');

    const [selTblIdx, setSelTblIdx] = useState(0);
    const [table1Score, setTable1Score] = useState(0);
    const [table2Score, setTable2Score] = useState(0);
    const [table3Score, setTable3Score] = useState(0);
    const [table4Score, setTable4Score] = useState(0);

    useEffect(() => {
        // Get Total Event
        try {
            axios.get(URL.EVENT).then((response) => {
                setData(response.data);
            }).catch((err) => {
                console.log(err);
            });
        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        if (eventId != -1) {
            // Get Event List
            const interval = setInterval(() => {
                axios.get(URL.BASKETBALL,
                    {
                        params: {
                            event: eventId
                        }
                    }
                ).then((response) => {
                    // console.log(response.data,'data')
                    setEvenList(response.data);
                }).catch((err) => {
                    console.log(err)
                });
            }, intervalTime * 1000);
            return () => clearInterval(interval);
        } else {
            setEvenList([])
        }
    }, [eventId, intervalTime])

    // console.log(playList, "play list")
    return (
        <>
            <div className='row my-3'>
                <div className='col-md-3'>
                    <Filter
                        label='Event'
                        columns={{ label: "name", value: "id" }}
                        list={data.events ? data.events : []}
                        handleChange={(id) => { 
                            setEventId(id); 
                            setTeam1Idx(-1);
                        }}
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
                    <input type="text" value={team2Name} className="form-control form-control-sm" id="team2-name" disabled />
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
                <div className='col-md-2'>
                    <p className='p-0'>{team1Idx != -1 && playList.boxscore && playList.boxscore.teams[team1Idx].team.name}</p>
                </div>
                <div className='col-md-2'>
                    <p className='p-0'>{team1Idx != -1 && playList.boxscore && playList.boxscore.teams[(parseInt(team1Idx) + 1) % 2].team.name}</p>
                </div>
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
                    <div className={selTblIdx == 0?'border border-danger':'border'}>
                        <p className='p-3 d-inline-block'><b>score:</b></p>
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
                    <div className={selTblIdx == 1?'border border-danger':'border'}>
                        <p className='p-3 d-inline-block'><b>score:</b></p>
                        <p className='d-inline-block'>{table1Score}</p>
                    </div>
                </div>
            </div>
            <div className='row py-3'>
                <div className='col-md-12'>
                    <div className='float-left d-inline-block'>
                        <h5 className='d-inline-block'>Table3</h5>
                        <p className='d-inline-block text-danger px-4'>{selTblIdx == 2 && 'Current Table'}</p>
                    </div>
                    <div className={selTblIdx == 2?'border border-danger':'border'}>
                        <p className='p-3 d-inline-block'><b>score:</b></p>
                        <p className='d-inline-block'>{table1Score}</p>
                    </div>
                </div>
            </div>
            <div className='row py-3'>
                <div className='col-md-12'>
                    <div className='float-left d-inline-block'>
                        <h5 className='d-inline-block'>Table4</h5>
                        <p className='d-inline-block text-danger px-4'>{selTblIdx == 3 && 'Current Table'}</p>
                    </div>
                    <div className={selTblIdx == 3?'border border-danger':'border'}>
                        <p className='p-3 d-inline-block'><b>score:</b></p>
                        <p className='d-inline-block'>{table1Score}</p>
                    </div>
                </div>
            </div>
            {/* <div className='row'>
                <div className='col-md-6'>
                    <table className="table">
                        <thead className="table-dark">
                            <tr>
                                <th>No</th>
                                <th>Process</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                playList.plays && playList.plays.slice(playList.plays.length - 2, playList.plays.length - 1).map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>
                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <div className='p-3' style={{ backgroundColor: '#f5f5f5', borderRadius: 5 }}>
                                                            <span><b>Sequence Number:</b></span>{item.sequenceNumber}<br />
                                                            <span><b>Description:</b></span>{item.text}<br />
                                                            {item.team && <><span><b>Team:</b></span>{item.team.id == playList.boxscore.teams[0].team.id ? playList.boxscore.teams[0].team.name : playList.boxscore.teams[1].team.name}<br /></>}
                                                            <span><b>Score:</b></span>{'Home(' + item.homeScore + '), Away(' + item.awayScore + ')'}<br />
                                                            <span><b>Time Remaining:</b></span>{item.period.displayValue + '(' + item.clock.displayValue + ')'}<br />
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <div className='p-3' style={{ backgroundColor: '#f5f5f5', borderRadius: 5 }}>
                                                            <span><b>Sequence Number:</b></span>{item.sequenceNumber}<br />
                                                            <span><b>Description:</b></span>{item.text}<br />
                                                            {item.team && <><span><b>Team:</b></span>{item.team.id == playList.boxscore.teams[0].team.id ? playList.boxscore.teams[0].team.name : playList.boxscore.teams[1].team.name}<br /></>}
                                                            <span><b>Score:</b></span>{'Home(' + item.homeScore + '), Away(' + item.awayScore + ')'}<br />
                                                            <span><b>Time Remaining:</b></span>{item.period.displayValue + '(' + item.clock.displayValue + ')'}<br />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div> */}
        </>
    );
}

export default EventComponent;
