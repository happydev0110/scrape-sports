import React, { useEffect, useState } from "react";
import axios from "axios";

function TableComponent(props) {
    const [data, setData] = useState();

    useEffect(() => {
        axios.get('https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401584705').then((response) => {
            // console.log(response.data)
            setData(response.data)
            console.log('table render')
        });
    }, [])

    console.log(props, 'props')
    return (
        <table className="table">
            <thead className="table-dark">
                <tr>
                    {
                        props.header.map((item, index) => {
                            return (
                                <th key={index}>{item.label}</th>
                            )
                        })
                    }
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>John</td>
                    <td>Doe</td>
                </tr>
            </tbody>
        </table>
    );
}

export default TableComponent;