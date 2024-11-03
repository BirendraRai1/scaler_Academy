/*Use React Suspense and React.lazy to fetch data and lazy-load components with a
 fallback UI while loading
*********/ 




import { Suspense,lazy } from 'react'
import './App.css'
const UserProfile = lazy(()=>import("./UserProfile"))
function App() {
  return (
    <div>
      <h1>Welcome to the user dashboard</h1>
      <Suspense fallback={<div>Loading Profile...</div>}>
        <UserProfile></UserProfile>
      </Suspense>
    </div>
  )
}

export default App


/*
Using React.Suspense and React.lazy is an effective way to lazy-load components and display 
a fallback UI while the component is loading. This is especially useful for optimizing load 
times, as it allows you to load components only when they are needed.

Here’s how you can set up data fetching and lazy-loading with a fallback UI in a React 
application



Step 3: Explanation
React.lazy(): Allows us to import UserProfile only when it’s needed, saving the initial 
loading time for components not immediately required on screen.
React.Suspense: Wraps the lazy-loaded component and displays a fallback UI until the 
component has fully loaded.
fallback prop: Defines what to display while loading (in this case, Loading profile...).
*******/ 