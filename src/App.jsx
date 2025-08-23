
import Wrapper from "./Components/Wrapper"
import Home from "./Sections/Home"
import Featured from "./Sections/Featured"
import Gallery from "./Sections/Gallery"

function App() {
  

  return (
    <>
    <main className="w-full min-h-screen grid grid-rows-[auto_auto] md:h-auto lg:grid-rows-1 lg:grid-cols-[1fr_1fr] lg:p-4 lg:gap-4">
      <div className="w-full min-h-screen flex flex-col md:min-h-[300px]">
        <Home/>
        <Featured/>
      </div>
      <div className="w-full h-auto flex flex-col justify-start">
        <Gallery/>
      </div>
      </main>
    </>
  )
}

export default App
