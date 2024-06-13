import React from 'react'

export default function Article({articles}) {

    const allarticles = articles;

    return (
        <div>
            {allarticles.map((c) => {
                return <div>
                    <table>
                        <tbody>
                            <tr>
                                <td style={{width:"100px"}} > {c.name}</td>
                                <td style={{width:"100px"}}  >{c.vote}</td>
                                <td>{c.date.toDateString()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            })}
        </div>
    )
}
