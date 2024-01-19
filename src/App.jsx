import { Outlet } from "react-router-dom"
import MainLayOut from "./components/layout/MainLayOut"
import Home from "./page/Home"



function App() {
    return (
    <div>
      
      <MainLayOut>
        <Outlet></Outlet>
      </MainLayOut>
      
      
      
    </div>
  )
}

export default App
