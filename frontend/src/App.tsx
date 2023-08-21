import { type Component } from "solid-js"
import Sloc from "./components/Sloc"

const App: Component = () => {
  return (
    <div class="bg-pm-dark-1 h-[100vh] w-[100vw] flex flex-col justify-evenly content-center ">
      <div class="w-[100%w] md:[70%] lg:[70%] grid place-content-center">
        <Sloc />
      </div>
    </div>
  )
}

export default App
