const withTimeStamp = (WrappedComponent)=>{
    return function (props){
        const timestamp = new Date().toLocaleString()
        return <WrappedComponent {...props} timestamp={timestamp}/>
    }
}

export default withTimeStamp