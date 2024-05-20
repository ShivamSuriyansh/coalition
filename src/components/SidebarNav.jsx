import propic from '../assets/propic/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc@2x.png'
import settings from '../assets/settings/settings_FILL0_wght300_GRAD0_opsz24.png'
import menu from '../assets/menu/more_vert_FILL0_wght300_GRAD0_opsz24.png'


const SidebarNav = () => {
  return (
    <div className=' text-sm flex justify-center items-center gap-2'>
        <div className="propic rounded-full">
            <img src={propic} alt="Profile picture rounded-full" style={{height: 44 , width: 44}} />
        </div>
        <div className="name flex flex-col" style={{lineHeight: 1.3}}>
            <span>Dr.Jose Simmons</span>
            <span className=' text-gray-500'> General practitioner</span>
        </div>
        <div className="inline-block  min-h-[1em] w-0.5 self-stretch bg-neutral-200"></div>
        <div className='flex gap-2 justify-center items-center'>
                <img src={settings} alt="Settings" className=' h-5 w-5'/>
                <img src={menu} alt="Menu" className=' h-5 w-2' />
        </div>
    </div>
  )
}

export default SidebarNav