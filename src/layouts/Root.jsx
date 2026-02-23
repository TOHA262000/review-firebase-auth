
import { Outlet } from 'react-router-dom'
import NavBar from '../components/Nav/NavBar'

function Root() {
  return (
    <div>
    <NavBar></NavBar>
    <Outlet></Outlet>
    </div>
  )
}

export default Root