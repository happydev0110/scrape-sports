import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { URL } from '../../const.js';

// import DataTable from '../../layouts/DataTable';
import Filter from '../../layouts/Filter';

const INTERVAL_TIME = [
    {
        label: '1s',
        value: 1
    },
    {
        label: '2s',
        value: 2
    },
    {
        label: '3s',
        value: 3
    },
    {
        label: '4s',
        value: 4
    },
    {
        label: '5s',
        value: 5
    },
    {
        label: '6s',
        value: 6
    },
    {
        label: '7s',
        value: 7
    },
    {
        label: '8s',
        value: 8
    },
    {
        label: '9s',
        value: 9
    },
    {
        label: '10s',
        value: 10
    },
]

function EventList() {
    const [eventId, setEventId] = useState(-1);
    const [data, setData] = useState([]);
    const [eventList, setEvenList] = useState([]);
    const [intervalTime, setIntervalTime] = useState(1);

    const [team1, setTeam1] = useState('')
    const [team2, setTeam2] = useState('')

    useEffect(() => {
        // Get Total Event
        try {
            axios.get(URL.EVENT).then((response) => {
                setData(response.data);
    
            });
        } catch (error) {
            console.log(error)            
        }
    }, [])

    useEffect(() => {
        if (eventId != -1) {
            // Get Event List
            const interval = setInterval(() => {
                try {
                    axios.get(URL.BASKETBALL,
                        {
                            params: {
                                event: eventId
                            }
                        }
                    ).then((response) => {
                        // console.log(response.data,'data')
                        setEvenList(response.data);
                        setTeam1(response.data.boxscore.teams[0].team.name + "(TeamId-" + response.data.boxscore.teams[0].team.id + ")");
                        setTeam2(response.data.boxscore.teams[1].team.name + "(TeamId-" + response.data.boxscore.teams[1].team.id + ")");
                    });
                } catch (error) {
                    console.log(error)                    
                }
            }, intervalTime * 1000);
            return () => clearInterval(interval);
        } else {
            setEvenList([])
        }
    }, [eventId, intervalTime])

    if (eventList.plays) {
        console.log(eventList.plays.reverse())
    }

    return (
        <>
            <div className='row my-3'>
                <div className='col-md-3'>
                    <Filter
                        label='Event'
                        columns={{ label: "name", value: "id" }}
                        list={data.events ? data.events : []}
                        handleChange={(id) => { setEventId(id) }}
                    />
                </div>
            </div>
            <div className='row my-3'>
                <div className='col-md-2'>
                    <label className="form-label">Team1</label>
                    <input type="text" value={team1} className="form-control form-control-sm" id="team1-name" disabled />
                </div>
                <div className='col-md-2'>
                    <label className="form-label">Team2</label>
                    <input type="text" value={team2} className="form-control form-control-sm" id="team2-name" disabled />
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
            <div className='row'>
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
                                eventList.plays && eventList.plays.slice(eventList.plays.length - 2, eventList.plays.length - 1).map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>
                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <div className='p-3' style={{ backgroundColor: '#f5f5f5', borderRadius: 5 }}>
                                                            <span><b>Sequence Number:</b></span>{item.sequenceNumber}<br />
                                                            <span><b>Description:</b></span>{item.text}<br />
                                                            {item.team && <><span><b>Team:</b></span>{item.team.id == eventList.boxscore.teams[0].team.id ? eventList.boxscore.teams[0].team.name : eventList.boxscore.teams[1].team.name}<br /></>}
                                                            <span><b>Score:</b></span>{'Home(' + item.homeScore + '), Away(' + item.awayScore + ')'}<br />
                                                            <span><b>Time Remaining:</b></span>{item.period.displayValue + '(' + item.clock.displayValue + ')'}<br />
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <div className='p-3' style={{ backgroundColor: '#f5f5f5', borderRadius: 5 }}>
                                                            <span><b>Sequence Number:</b></span>{item.sequenceNumber}<br />
                                                            <span><b>Description:</b></span>{item.text}<br />
                                                            {item.team && <><span><b>Team:</b></span>{item.team.id == eventList.boxscore.teams[0].team.id ? eventList.boxscore.teams[0].team.name : eventList.boxscore.teams[1].team.name}<br /></>}
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
            </div>
        </>
    );
}

export default EventList;
