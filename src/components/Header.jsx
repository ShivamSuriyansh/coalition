import LOGO from '../assets/TestLogo.svg'
import Navbar from './Navbar'
import SidebarNav from './SidebarNav'

const Header = () => {
  return (
    <div className=' flex justify-between items-center h-fit p-2 border bg-slate-50 rounded-full'>
        <div className=' logo' style={{height : 48 , width : 210.58}}>
            <img src={LOGO} alt="company's logo" />
        </div>
        <div className='middle'>
            <Navbar/>
        </div>
        <div className='sidebar'>
            <SidebarNav/>
        </div>
    </div>
  )
}

export default Header