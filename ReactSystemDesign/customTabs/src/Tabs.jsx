import React ,{useState} from 'react'

function Tabs({currentIndex=0,tabsData}) {
    console.log('tabsData is',tabsData)
    //const [tabs] = useState(tabsData)
    //the below syntax can also be used
    const tabs = [...tabsData]
    const [currentTab,setCurrentTab] = useState(currentIndex)


    function generateTabsHeading(){
        return (
            <div className='tabs-heading'>
                {
                    tabs.length && tabs.map((tab,index)=>{
                        console.log("tab level is",tab.label)
                        return(
                            <button onClick={()=>setCurrentTab(index)} key={index}>{tab.label}</button>
                        )
                    })
                }
            </div>
        )
    }

    function generateTabsContent(){
        return (
            <div className='tabs-content'>
                {
                    tabs.length && tabs.map((tab,index)=>{
                        return (
                            <p className={`${index==currentTab?'active':'inactive'}`} key={index}>{tab.content}</p>
                        )
                    })
                }

            </div>
        )
    }
  return (
    <>
    {generateTabsHeading()}
    {generateTabsContent()}
    </>
  )
}

export default Tabs