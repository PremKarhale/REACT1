import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {

    const data = useLoaderData()
    // const [data, setdata] = useState({})
    // useEffect(() => {
    //     fetch(`https://api.github.com/users/premkarhale`)
    //         .then((response) => response.json())
    //         .then((response) => {
    //             console.log(response)
    //             setdata(response)
    //         })
    // }, [])
    return (
        <div className='text-center m-4  bg-yellow-600 text-white p-4 text-3xl'>

            <div>{data.name}</div>
            <div> GitHub followers : {data.followers}</div>
            <img src= {data.avatar_url} alt="avatar"  width={300}/>


        </div>
    )
}

export default Github
export const githubInfoLoader = async()=>{
    const response  = await fetch(`https://api.github.com/users/premkarhale`)
    return response.json()

}
