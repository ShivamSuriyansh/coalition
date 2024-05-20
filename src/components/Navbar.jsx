import Home from '../assets/home_FILL0_wght300_GRAD0_opsz24.svg'
import people from '../assets/group_FILL0_wght300_GRAD0_opsz24.svg'
import schedule from '../assets/schedule.svg'
import message from '../assets/message.svg'
import transactions from '../assets/transactions.svg'
const Navbar = () => {
  return (
    <div className=' flex gap-5 justify-center items-center'>
        <div className='Honme flex gap-2'> 
            <img src={Home}/>
            <span>Overview</span>
        </div>
        <div className='patients flex gap-2 bg-[#01F0D0] py-2 px-3 rounded-full' >
            <img src={people} alt="group" />
            <span>Patients</span>
        </div>
        <div className='schedule flex gap-2' >
            <img src={schedule} alt="Schedule" />
            <span>Schedule</span>
        </div>
        <div className='schedule flex gap-2' >
            <img src={schedule} alt="Schedule" />
            <span>Schedule</span>
        </div>
        <div className='message flex gap-2' >
            <img src={message} alt="message" />
            <span>Message</span>
        </div>
        <div className='transactions flex gap-2' >
            <img src={transactions} alt="transaction" />
            <span>Transactions</span>
        </div>
    </div>
  )
}

export default Navbar