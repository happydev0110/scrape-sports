import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { URL } from '../../CONST';

import DataTable from '../../layouts/DataTable';
import Filter from '../../layouts/Filter';

const columns = [
    { Header: 'TeamId', accessor: 'team.id' },
    { Header: 'TeamUid', accessor: 'team.uid' },
    // Add more columns based on your data structure
];

function App() {
    const [eventList, setEvenList] = useState([]);

    useEffect(() => {
        axios.get(URL.BASKETBALL,
            {
                params: {
                    event: 401584705
                }
            }
        ).then((response) => {
            console.log(response.data)
            setEvenList(response.data);
        });
    }, [])

    return (
        <>
            <div className='row my-3'>
                <div className='col-md-6'>
                    <Filter />
                </div>
                {/* <div className='col-md-6'>
                    <Filter />
                </div> */}
            </div>
            <DataTable 
                columns={columns} 
                data={eventList.againstTheSpread ? eventList.againstTheSpread : []} 
                IndexCell
            />
        </>
    );
}

export default App;
