import React from 'react'

const index = ({ placeholder, value, type, name }) => {
    return (
        <input className="mb-4 p-2 w-full border border-gray-300 rounded"
            placeholder={placeholder} name={name} value={value} type={type} />)
}

export default index