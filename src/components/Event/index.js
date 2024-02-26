import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { URL } from '../../CONST';

// import DataTable from '../../layouts/DataTable';
import Filter from '../../layouts/Filter';

const columns = [
    { Header: 'TeamId', accessor: 'team.id' },
    // { Header: 'Score', accessor: 'team.id' },
    // { Header: 'Quater', accessor: 'team.id' },
    // { Header: 'Time Remaining', accessor: 'team.id' },
    { Header: 'TeamUid', accessor: 'team.uid' },
];

function EventList() {
    const [eventId, setEventId] = useState(-1);
    const [data, setData] = useState([]);
    const [eventList, setEvenList] = useState([]);

    useEffect(() => {
        // Get Total Event
        axios.get(URL.EVENT).then((response) => {
            setData(response.data)
        });
    }, [])

    useEffect(() => {
        if (eventId != -1) {
            // Get Selected Event
            axios.get(URL.BASKETBALL,
                {
                    params: {
                        event: eventId
                    }
                }
            ).then((response) => {
                // console.log(response.data.plays)
                setEvenList(response.data);
            });
        } else {
            setEvenList([])
        }
    }, [eventId])

    return (
        <>
            <div className='row my-3'>
                <div className='col-md-6'>
                    <Filter
                        label='Event'
                        columns={{ label: "name", value: "id" }}
                        list={data.events ? data.events : []}
                        handleChange={(id) => { setEventId(id) }}
                    />
                </div>
            </div>
            <div className='row my-3'>
                <div className='col-md-3'>
                    <Filter
                        label='Team'
                        columns={{ label: "team.name", value: "team.id" }}
                        list={eventList.boxscore ? eventList.boxscore.teams : []}
                        handleChange={(id) => { setEventId(id) }}
                    />
                </div>
                <div className='col-md-3'></div>
                <div className='col-md-3'></div>
                <div className='col-md-3'><b>Total:</b>{eventList.plays ? eventList.plays.length : 0}</div>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                    <table className="table">
                        <thead className="table-dark">
                            <tr>
                                <th>No</th>
                                <th>Process</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                eventList.plays && eventList.plays.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>
                                                <div className='row'>
                                                    <div className='col-md-12'>
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
                {/* <div className='col-md-6'>
                    <DataTable
                        columns={columns}
                        data={eventList.againstTheSpread ? eventList.againstTheSpread : []}
                        IndexCell
                    />
                </div> */}
            </div>
        </>
    );
}

export default EventList;
