const dropdown = document.getElementById("dropdown")
const dropdownList = document.getElementById("dropdown-list")
const selectedItem = document.getElementById("selected-item")

// Initial list of items
let item = ["Option 1","Option 2","Option 3","Option 4"]
let selected = null

// Populate dropdown list
function populateDropdown(){
    dropdownList.innerHTML = "" // Clear existing list
    item.forEach((item,index)=>{
        const li = document.createElement("li")
        li.textContent = item
        li.addEventListener('click',()=>selectItem(index))
        dropdownList.appendChild(li)
    })
}
selectedItem.addEventListener('click',()=>{
    dropdown.style.display = dropdown.style.display ==='none' || !dropdown.style.display?"block":"none"
})

// Handle item selection
function selectItem(index){
    selected = item[index]
    item.splice(index,1) // Remove from list
    selectedItem.textContent = selected // Update the selected item
    populateDropdown() // Refresh dropdown
    dropdown.style.display = "none" // Close dropdown
}

// Revert selected item back to dropdown when clicked
selectedItem.addEventListener('dblclick',()=>{
    if(selected){
        item.push(selected)// Add back to the list
        selected = null
        selectedItem.textContent = "Select an item"
        populateDropdown()// Refresh dropdown
    }
})

populateDropdown()