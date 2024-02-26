import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { URL } from '../../CONST';

import Filter from '../../layouts/Filter';
import ScoreBoard from './ScoreBoard';

function App() {
    const [eventList, setEvenList] = useState([]);

    useEffect(() => {
        axios.get(URL.EVENT).then((response) => {
            setEvenList(response.data)
            // console.log("event list", response.data)
            // console.log('App render')
        });
    }, [])

    return (
        <>
            <div className="p-2 bg-primary text-white text-center">
                <h1>ScoreDashboard</h1>
                {/* <p>Resize this responsive page to see the effect!</p> */}
            </div>
            <div className='container-fluid'>
                <div className='my-3'>
                    <div className='row'>
                        <div className='col-6'>
                            <Filter label='Event Name:' 
                                list = {eventList.events}
                            />
                        </div>
                        <div className='col-6'>
                            {/* <Filter label='Refresh Frequency:' /> */}
                        </div>
                    </div>
                </div>
                <ScoreBoard />
            </div>
        </>
    );
}

export default App;
