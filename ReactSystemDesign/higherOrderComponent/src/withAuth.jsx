const withAuth = (WrappedComponent)=>{
    console.log("wrappedComponent is",WrappedComponent)
    return function (props){
        const isLoggedIn = true
        if(!isLoggedIn)
            return <div>Please login to view this content</div>
        return <WrappedComponent {...props}/>
    }
}
export default withAuth