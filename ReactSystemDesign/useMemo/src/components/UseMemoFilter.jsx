import React,{useMemo,useState} from 'react'

function UseMemoFilter(){
    const [query,setQuery] = useState("")
    const items = ["apple","banana","orange","grape","peach"]
    // const filteredItems = items.filter((item)=>{
    //     console.log("Filtering items....")
    //     return item.toLowerCase().includes(query.toLowerCase())
    // })

    const filteredItems = useMemo(()=>{
        console.log("Filtering items....")
        return items.filter((item)=>item.toLowerCase().includes(query.toLowerCase()))
    },[query,items])
        
    
    return (
        <div>
            <input 
            type="text"
            placeholder='Search'
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            />
            <ul>
                {
                    filteredItems.map((item,index)=><li key={index}>{item}</li>)
                }
            </ul>
        </div>
    )
}

export default UseMemoFilter

/*Here, useMemo ensures the filter logic only runs when query or items changes.
Imagine you are filtering a large dataset and want to avoid unnecessary recalculations:
*
**/ 