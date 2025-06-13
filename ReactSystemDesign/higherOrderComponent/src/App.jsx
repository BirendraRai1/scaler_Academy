import './App.css'
import DashBoard from './DashBoard'
import withAuth from './withAuth'
import withTimeStamp from './withTimeStamp'
import DisplayMessage from './DisplayMessage'

const ProtectedDashboard = withAuth(DashBoard)

const EnhancedDisplayMessage = withTimeStamp(DisplayMessage)
function App() {


  // return (
  //   <ProtectedDashboard hello={"hi"}/>
  // )

  return <EnhancedDisplayMessage message="Hello,HOC"/>
}

export default App


/*Key Characteristics of HOCs
Pure Function:
An HOC is a pure function that enhances a component.
It doesn't modify the original component but wraps it with additional functionality.


Code Reusability:
Promotes code reuse by abstracting shared logic into a single HOC.



Wrapper Component:
The HOC typically wraps the input component, allowing it to manipulate props or add logic.
Props Manipulation:

HOCs can add, modify, or filter props passed to the wrapped component.

*
*
***********/ 
