
import Wrapper from "./Components/Wrapper"
import Home from "./Sections/Home"
import Featured from "./Sections/Featured"

function App() {
  

  return (
    <>
      <div className="w-full min-h-screen flex flex-col">
        <Home/>
        <Featured/>
      </div>
    </>
  )
}

export default App
