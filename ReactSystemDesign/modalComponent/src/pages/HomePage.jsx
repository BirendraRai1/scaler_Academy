import React ,{useState} from 'react'

function HomePage() {
    const [displayModal,setDisplayModal] = useState(false)

    function handleCloseClick(){
        setDisplayModal(false)
    } 

    function handleOpenClick(){
        setDisplayModal(true)
    }

  return (
    <div>HomePage
        <Button text={'show modal'} handleClick = {handleOpenClick}/>
        {displayModal && <Modal handleClick={handleCloseClick}/>}
    </div>
  )
}

export default HomePage