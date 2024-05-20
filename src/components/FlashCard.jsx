import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import {singleUserDate} from '../recoil/userData'


const FlashCard = ({image,text,bg}) => {

  console.log('------------------------------');
  const patientData = useRecoilValue(singleUserDate)
  const [data, setData] = useState({})

  useEffect(()=>{
    if(patientData){
      const {diagnosis_history} =patientData;
      console.log('diagnosis: ',diagnosis_history?.[0])
      const diagnosisHistory = diagnosis_history?.[0];
      const respiratoryRate = diagnosisHistory?.respiratory_rate?.value;
      const respiratoryRateLevl = diagnosisHistory?.respiratory_rate?.levels
      const heart_rate= diagnosisHistory?.heart_rate?.value;
      const heartRateLevel = diagnosisHistory?.heart_rate?.levels
      const temperature = diagnosisHistory?.temperature?.value;
      const temperatureLevel = diagnosisHistory?.temperature?.levels;

      setData({
        diagnosis_history,
        respiratoryRate,
        respiratoryRateLevl,
        heart_rate,
        heartRateLevel,
        temperature,
        temperatureLevel
      })
    }
    
  },[patientData])

  const getValue = () => {
    if (text === 'Respiratory Rate') {
      return data.respiratoryRate;
    } else if (text === 'Temperature') {
      return data.temperature;
    } else if (text === 'Heart Rate') {
      return data.heart_rate;
    }
  };

  const getLevel = () => {
    if (text === 'Respiratory Rate') {
      return data.respiratoryRateLevl;
    } else if (text === 'Temperature') {
      return data.temperatureLevel;
    } else if (text === 'Heart Rate') {
      return data.heartRateLevel;
    }
  };


  return (
    <div className=" w-full">
        <div className=' mt-3 '>
                <div className={`respiratory-rate h-[14rem] w-[14rem] rounded-xl p-2 `} style={{background : bg}}>
                    <div className=' rounded-full h-[5rem] w-[5rem]'>
                        <img src={image} alt="" />
                    </div>
                    <div className=" text-sm mt-3"> 
                        {text}
                    </div>
                    <div className=" text-lg font-bold"> 
                        {getValue()}
                    </div>
                    <div className=" text-sm font-thin mt-3"> 
                      {getLevel()}
                    </div>
                </div>
            </div>
    </div>
  )
}

export default FlashCard