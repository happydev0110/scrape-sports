import React, { useEffect, useState } from "react";
import axios from "axios";


import { URL } from '../../CONST'
import TableComponent from "../../layouts/Table";

const TABLE_HEADER = [
    {
        label: 'Time'
    },
    {
        label: 'Name'
    }
]

function ScoreBoard(props) {
    const [data, setData] = useState();

    useEffect(() => {
        axios.get(URL.BASKETBALL).then((response) => {
            setData(response.data)
            console.log(data)
        });
        // getData(URL.BASKETBALL)
    }, [])

    return <TableComponent
        header={TABLE_HEADER}
        list={[]}
    />;
}

export default ScoreBoard;