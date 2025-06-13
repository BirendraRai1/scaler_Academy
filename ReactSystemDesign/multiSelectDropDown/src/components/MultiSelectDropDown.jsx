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
    // if(selected.includes(item)){
    //   setSelected(selected.filter((i)=>i !=item))
    // }
    // else{
    //   setSelected([...selected,item])
    // }
    setSelected([...selected,item])
  }


  return (
    <div >
      {/* selected Items display */}
      <div >
        {selected.map((item) => (
          <div key={item} >
            {item}{" "}
            <span onClick={() => removeSelected(item)}>
              X
            </span>
          </div>
        ))}
      </div>
      {/* search and toggle */}
      <div onClick={toggleDropdown}>
        <input 
          type="text"
          placeholder="Search or select...."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          onClick={(e)=>e.stopPropagation}
          />
          <span>{isOpen ? "▲" : "▼"}</span>
      </div>
      {/* DropDown options */}
      {
        isOpen && (
          <div>
            {
              filteredOptions.map((item)=>(
                <div
                key={item}
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
