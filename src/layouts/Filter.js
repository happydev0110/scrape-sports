import React, { useEffect, useState } from "react";

function Filter(props) {
    const [id, setId] = useState(-1);

    useEffect(() => {

    }, [id])

    const handleChange = (evt) => {
        setId(evt.target.value);
        console.log('id', evt.target.value);
    }

    return (
        <div>
            <label className="form-label" style={{ float: "left" }}>{props.label && props.label}</label>
            <select className="form-select form-select-sm"
                value={id}
                onChange={handleChange}
            >
                <option value={-1}>All</option>
                {
                    props.list && props.list.map((item, index) => {
                        return (
                            <option key={index} value={item.id}>{item.name}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default Filter;