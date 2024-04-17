import React, { useEffect,useState } from 'react'

const Covid = () => {

const[data,setData]=useState([]);

    const getCovidData=async ()=>{
        try {
            const res=await  fetch('https://api.covid19india.org/data.json');
           const actualData=await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        } catch (error) {
            console.log(error);
        }
    }
useEffect(() => {
getCovidData();
}, []);


  return (
    <>
    <section>
    <h1>LIVE</h1>
    <h2>Covid Tracker</h2>
    <ul>
        <li className='card'>
            <div>
                <div>
                    <p> <span>OUR</span>COUNTRY </p>
                    <p>{data.country}</p>
                </div>
            </div>
        </li>
        <li className='card'>
            <div>
                <div>
                    <p> <span>total</span>recoverd </p>
                    <p>{data.recovered}</p>
                </div>
            </div>
        </li>
        <li className='card'>
            <div>
                <div>
                    <p> <span>total</span>deaths </p>
                    <p>{data.deaths}</p>
                </div>
            </div>
        </li>
        <li className='card'>
            <div>
                <div>
                    <p> <span>total</span>active </p>
                    <p>{data.active}</p>
                </div>
            </div>
        </li>
        <li className='card'>
            <div>
                <div>
                    <p> <span>total</span>updated </p>
                    <p>{data.updated}</p>
                </div>
            </div>
        </li>
    </ul>
    </section>
    </>
  )
}

export default Covid