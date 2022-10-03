import React from 'react'

const Table = ({data}) => {
  return (
    <table style={{paddingInlineStart:"100px" , marginTop:"50px"}}>
        <tbody>
            <tr>
                <th style={{paddingInlineStart:"300px"}}>name</th>
                <th style={{paddingInlineStart:"300px"}}>Surname</th>
                <th style={{paddingInlineStart:"300px"}}>Email</th>
            </tr>
            {data.map((item) => (
                <tr key={item.id}>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default Table