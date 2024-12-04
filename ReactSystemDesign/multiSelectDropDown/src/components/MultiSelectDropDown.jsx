import React,{useState} from "react";
function MultiSelectDropDown({ options }) {
  const [search, setSearch] = useState(""); //search input
  const [selected, setSelected] = useState([]); //selected items
  const [isOpen, setIsOpen] = useState(false); //dropdown state

  let filteredOptions = options.filter((item)=>item.toLowerCase().includes(search.toLowerCase()))
      filteredOptions = filteredOptions.map((item)=>{
        if(!selected.includes(item))
          return item
      })
  console.log("filteredOptions is",filteredOptions)

  function toggleDropdown(){
    setIsOpen(!isOpen)
  }

  function removeSelected(item){
    setSelected(selected.filter((i)=>i !=item))
  }

  function toggleSelect(item){
    if(selected.includes(item)){
      setSelected(selected.filter((i)=>i !=item))
    }
    else{
      setSelected([...selected,item])
    }
  }


  return (
    <div className="dropDown">
      {/* selected Items display */}
      <div className="selected-items">
        {selected.map((item) => (
          <div key={item} className="selected-item">
            {item}{" "}
            <span className="remove-btn" onClick={() => removeSelected(item)}>
              &times
            </span>
          </div>
        ))}
      </div>
      {/* search and toggle */}
      <div className="dropdown-header" onClick={toggleDropdown}>
        <input 
          type="text"
          placeholder="Search or select...."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          onClick={(e)=>e.stopPropagation}
          />
          <span className="arrow">{isOpen ? "▲" : "▼"}</span>
      </div>
      {/* DropDown options */}
      {
        isOpen && (
          <div className="dropdown-options">
            {
              filteredOptions.map((item)=>(
                <div
                key={item}
                className={`dropdown-item ${selected.includes(item)?"selected":""}`}
                onClick={()=>toggleSelect(item)}
                >
                  {item}
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  );
}

export default MultiSelectDropDown;
