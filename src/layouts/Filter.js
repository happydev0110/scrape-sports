import React, { useEffect, useState } from "react";

function Filter({ handleChange, columns, label, list }) {
    const [id, setId] = useState(-1);

    useEffect(() => {

    }, [id])

    const setValue = (evt) => {
        setId(evt.target.value);
        if (handleChange) {
            handleChange(evt.target.value)
        }
    }

    return (
        <div>
            <label className="form-label" style={{ float: "left" }}>{label && label}</label>
            <select className="form-select form-select-sm"
                value={id}
                onChange={setValue}
            >
                <option value={-1}>Choose One</option>
                {
                    list && list.map((item, index) => {
                        return (
                            <option key={index} value={item[columns.value]}>{item[columns.label]}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default Filter;