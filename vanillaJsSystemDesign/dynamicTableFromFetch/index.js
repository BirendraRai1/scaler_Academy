const apiUrl = "https://jsonplaceholder.typicode.com/users"
async function fetchData(){
    try{
        const response = await fetch(apiUrl)
        if(!response.ok)
            throw new Error("Failed to fetch data")
        const data = await response.json()
        console.log("data is",data)
        renderTable(data)
    }catch(error){
        document.getElementById("error").textContent = error.message
    }finally{
        document.getElementById("loading").style.display = "none"
    }
}

function renderTable(data){
    if(!data.length)
        return document.getElementById("error").textContent = "No data available"
    const table = document.getElementById("data-table")
    const headers = Object.keys(data[0])
    const thead = document.createElement("thead")
    const headerRow = document.createElement("tr")
    headers.forEach(header=>{
        const th = document.createElement("th")
        th.textContent = header.toUpperCase()
        headerRow.appendChild(th)
    })
    thead.appendChild(headerRow)
    table.appendChild(thead)
    const tbody = document.createElement("tbody")
    data.forEach(item=>{
        const row = document.createElement("tr")
        headers.forEach(key=>{
            const td = document.createElement("td")
            td.textContent = item[key]
            row.appendChild(td)
        })
        tbody.appendChild(row)
    })
    table.appendChild(tbody)
}
fetchData()