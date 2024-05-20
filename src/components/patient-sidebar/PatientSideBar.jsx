import React, { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import {singleUserDate} from '../../recoil/userData'
import birthIcon from '../../assets/BirthIcon.svg'
import femaleIcon from '../../assets/FemaleIcon.svg'
import phoneIcon from '../../assets/PhoneIcon.svg'
import insuranceIcon from '../../assets/InsuranceIcon.svg'

const PatientSideBar = () => {

    const patientData = useRecoilValue(singleUserDate);
    console.log('Patient data : ',patientData);

  return (
    <div className='w-full'>
        <div className=' flex flex-col justify-center items-center'>
            <img src={patientData.profile_picture} alt="Patient's pic" className=' h-[10rem] shadow-xl rounded-full'/>
            <div className=' font-bold text-lg mt-5'>{patientData.name}</div>
        </div>
        <div className='information flex flex-col gap-4 mt-5'>
            <div className='flex gap-2'>
                <img src={birthIcon} alt="" className=' bg-transparent' />
                <div className=' flex flex-col '>
                    <div className='text-sm'>Date of Birth</div>
                    <div className='text-sm font-semibold'>{(patientData.date_of_birth)}</div>
                </div>
            </div>
            <div className='flex gap-2'>
                <img src={femaleIcon} alt="" className=' bg-transparent' />
                <div className=' flex flex-col '>
                    <div className='text-sm'>Gender</div>
                    <div className='text-sm font-semibold'>{(patientData.gender)}</div>
                </div>
            </div>
            <div className='flex gap-2'>
                <img src={phoneIcon} alt="" className=' bg-transparent' />
                <div className=' flex flex-col '>
                    <div className='text-sm'>Contact no.</div>
                    <div className='text-sm font-semibold'>{(patientData.phone_number)}</div>
                </div>
            </div>
            <div className='flex gap-2'>
                <img src={phoneIcon} alt="" className=' bg-transparent' />
                <div className=' flex flex-col '>
                    <div className='text-sm'>Emergency Contact</div>
                    <div className='text-sm font-semibold'>{(patientData.emergency_contact)}</div>
                </div>
            </div>
            <div className='flex gap-2'>
                <img src={insuranceIcon} alt="" className=' bg-transparent' />
                <div className=' flex flex-col '>
                    <div className='text-sm'>Insurance Provider</div>
                    <div className='text-sm font-semibold'>{(patientData.insurance_type)}</div>
                </div>
            </div>
        </div>
        <div className=' button flex justify-center items-center mt-10'>
            <div className='bg-[#01F0D0] rounded-full h-[3rem] w-full px-4 py-2 flex justify-center hover:bg-[#11D0D0]'>
                <button>
                    Show All Notifications
                </button>
            </div>
        </div>
    </div>
  )
}

export default PatientSideBar