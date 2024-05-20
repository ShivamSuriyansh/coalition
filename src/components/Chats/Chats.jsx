import { useEffect, useState } from 'react'
import search from '../../assets/search.svg'
import Chat from './Chat';
import { useRecoilState } from 'recoil';
import { userData } from '../../recoil/userData';
import { userId } from '../../recoil/userData.js'
import Bloodpressure from '../Diagnosis/Bloodpressure';
import FlashCard from '../FlashCard.jsx';
import respiratory from '../../assets/respiratory rate.svg'


const Chats = () => {

    const [allPatients , setAllPatients] = useState([]);
    const [isClicked , setIsClicked] = useState({});
    const [usersData, setUsersData] = useRecoilState(userData);
    const [id , setId] = useRecoilState(userId);

    useEffect(()=>{
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic Y29hbGl0aW9uOnNraWxscy10ZXN0");

        const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
        };

        fetch("https://fedskillstest.coalitiontechnologies.workers.dev", requestOptions)
        .then((response) => response.text())
        .then((result) => {
            const parsedPatients = JSON.parse(result);
            setAllPatients(parsedPatients);
            setUsersData(parsedPatients);
            // console.log(parsedPatients)
        })
        .catch((error) => console.error(error));
        },[])

        const onClick = (chat)=>{
            console.log(chat.date_of_birth)
            setId(chat.date_of_birth);
            setIsClicked({
                chat : chat.date_of_birth,
                clicked : true
            });
        }

  return (
    <div className=' flex justify-between gap-5' style={{ scrollbarWidth: 'none'}}>

        <div className=' w-[18.5rem] bg-slate-50 mt-[32px] p-1 rounded-2xl'>
            
            <div className=' patients search flex justify-between items-center'>
                <span>Patients</span>
                <span>
                    <img src={search} alt="search" />
                </span>
                
            </div>
            <div className='chats max-h-[600px] overflow-auto'>
                {usersData.map((chat,i)=>(
                    <div key={i}>
                        <Chat chat={chat} onClick={onClick} isClicked={isClicked} />
                    </div>

                ))}
            </div>
        
        </div>
        <div className='w-fit bg-slate-50 mt-[32px] px-10 py-5 rounded-2xl h-fit'>
            <span className='text-2xl font-semibold mb-7 block'>Diagnosis History</span>
            <Bloodpressure id={id} />
            <div className='flex gap-5'>
                <FlashCard image={respiratory} text={'Respiratory Rate'} bg={'#E0F3FA'} />
                <FlashCard image={respiratory} text={'Blood Pressure'} bg={'#927eed'}/>
                <FlashCard image={respiratory} text={'Heart Rate'} bg={'#ed7e8b'}/>
            </div>
        </div>
    </div>
  )
}

export default Chats