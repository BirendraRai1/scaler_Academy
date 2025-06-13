function findMatchingElementInDOM(container1,container2,targetElement){
    if(container1===targetElement)
        return container2
    const children1 = [...container1.children]
    const children2 = [...container2.children]
    for(let i=0;i<children1.length;i++){
        if(children1[i] && children2[i]){
            const result = findMatchingElementInDOM(children1[i],children2[i],targetElement)
            if(result)
                return result
        }
    }
    return null
}

const positiveResult = findMatchingElementInDOM(document.getElementById("container1"),
                        document.getElementById("container2"),
                    document.getElementById("span_id_2"))
console.log("positiveResult is",positiveResult)