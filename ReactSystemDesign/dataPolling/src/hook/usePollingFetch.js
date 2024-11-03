import { useState,useEffect } from "react";
function usePollingFetch(url,interval=5000){
    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)
    useEffect(()=>{
        let intervalId
        const fetchData = async()=>{
            setLoading(true)
            setError(null)
            try{
                const response = await fetch(url)
                if(!response.ok)
                    throw new Error(`Error:${response.status}`)
                const result = await response.json()
                setData(result)
            }catch(err){
                setError(err.message)
            }finally{
                setLoading(false)
            }
        }
        fetchData()
        if(interval>0)
            intervalId = setInterval(fetchData,interval)
        return ()=>clearInterval(intervalId)
    },[url,interval])
    return {data,loading,error}
}
export default usePollingFetch


/*Data polling is a technique where a system repeatedly requests updated data from a server
 or API at regular intervals. This approach allows applications to stay updated with the 
 latest information, making it useful for real-time applications like dashboards, social 
 feeds, or any system that benefits from constant data refreshes



 How Data Polling Works
Initial Request: The client (usually the browser or application) sends a request to the 
server for data.
Set Interval: After receiving the data, the client waits for a specified interval.
Repeated Requests: After each interval, the client sends another request to the server 
to fetch updated data.
Update Display: Each time new data is fetched, the application updates the display to 
reflect the most recent data.



Example Use Cases
Live stock or cryptocurrency prices: Polling for prices every few seconds to show live 
values.
Social media feeds: Continuously updating posts or notifications without requiring a page 
refresh.
Online multiplayer games: Regularly updating the status or positions of players.
Pros and Cons of Data Polling
Pros:

Simple to implement and control, especially for infrequent updates.
Works across all browsers and systems, as it uses simple HTTP requests.
Cons:

Inefficient for frequent updates: If polling happens too frequently, it can lead to 
wasted resources on both the client and server.
Latency: Updates only occur at set intervals, so it may not be truly real-time.
Alternatives to Polling
WebSockets: Provides a persistent connection, allowing the server to push updates to 
the client as soon as data changes.
Server-Sent Events (SSE): A one-way, server-to-client event stream over HTTP, often 
used for real-time notifications.
Data polling is a useful tool for building applications that need periodic data updates, 
especially when real-time technologies like WebSockets aren’t feasible.
********/ 