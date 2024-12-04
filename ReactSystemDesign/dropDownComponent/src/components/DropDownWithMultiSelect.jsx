import React ,{useState} from 'react'

function DropDownWithMultiSelect({options}) {
    const [selectedItems,setSelectedItems] = useState([])
    const [searchTerm,setSearchTerm] = useState("")
    const [isOpen,setIsOpen] = useState(false)

    // Filtered options based on search term
    const filteredOptions = options.filter((option)=>option.toLowerCase().includes(searchTerm.toLowerCase()) && !selectedItems.includes(option))

    // Handle item selection
    const handleSelect = (item)=>{
        setSelectedItems([...selectedItems,items])
    }

    // Handle item removal
    const handleRemove = (item)=>{
        setSelectedItems(selectedItems.filter((selected)=>selected !=item))
    }

  return (
    <div style={{width:"300px",margin:"20px auto",position:"relative"}}>
        <div style={{display:"flex",flexWrap:"wrap",gap:"5px"}}>
            {
                selectedItems.map((item)=>{
                    return (
                        <span
                        key={item}
                        style={{
                            display:"inline-flex",
                            alignItems:"center",
                            padding:"5px 10px",
                            borderRadius:"5px",
                            backgroundColor: "#e0e0e0"
                        }}
                        >
                            {item}
                            <button 
                                style={{
                                    marginLeft:"8px",
                                    border:"none",
                                    background:"none",
                                    cursor:"pointer"
                                }}
                                onClick={()=>handleRemove(item)}
                            >
                            ✖
                            </button>
                        </span>
                    )
                })
            }
        </div>
    </div>
  )
}

export default DropDownWithMultiSelect