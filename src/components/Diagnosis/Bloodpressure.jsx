import { useRecoilValue } from "recoil"
import Linechart from "../Linechart"
import { userData } from '../../recoil/userData'
import { useEffect, useState } from "react";
import {avgBP} from '../../recoil/userData'
import arrow from '../../assets/ArrowUp.svg'
import arrowDown from '../../assets/ArrowDown.svg'





const Bloodpressure =({id}) => {

    const allChat = useRecoilValue(userData);
    console.log('all chat',allChat);
    const avgBp = useRecoilValue(avgBP);

  return (
    <div className=" bg-[#F4F0FE] w-fit px-5 py-4 rounded-2xl h-[20rem] flex gap-10">
        <div className=" chart flex flex-col gap-2 w-[30rem]">
            <div className="flex justify-between items-center">
                <div className="BP">
                    Blood Pressure
                </div>
                <div className="time span">
                    Last 6 Months  <span className=" rotate-45"> &gt;</span>
                </div>
            </div>
            <div className=" w-[35rem] h-[15rem]">
                {allChat.length > 1 && <Linechart id={id}/>}
            </div>
        </div>
        {id && <div className="report flex flex-col gap-3 w-[15rem]">
            <div className="systolic flex flex-col gap-2 border-b-2 border-slate-300">
                <div className="flex justify-start items-center gap-1 ">
                    <div class="w-3 h-3  bg-[#E66FD2] rounded-full"></div>
                    <div className="text-md font-semibold text-slate-700">Systolic</div>
                </div>
                <div className=" text-2xl font-semibold">{ avgBp.avgSys}</div>
                <div className=" flex justify-start items-center gap-3 mb-3">
                {
                        avgBp.avgSys <= 120 ?  <img src={arrowDown} alt="" /> : <img src={arrow} alt="" /> 
                    }
                    <span>{` ${avgBp.avgSys <= 120 ? ' Lower than Average' : ' Higher than average'}`}</span>
                </div>
            </div>
            <div className="systolic flex flex-col gap-2 ">
                <div className="flex justify-start items-center gap-1 ">
                    <div class="w-3 h-3  bg-[#01F0D0] rounded-full"></div>
                    <div className="text-md font-semibold text-slate-700">Diastolic</div>
                </div>
                <div className=" text-2xl font-semibold">{ avgBp.avgDis}</div>
                <div className=" flex justify-start items-center gap-3">
                    {
                        avgBp.avgDis <= 88 ?  <img src={arrowDown} alt="" /> : <img src={arrow} alt="" /> 
                    }
                    <span>{` ${avgBp.avgDis <= 88 ? ' Lower than Average' : ' Higher than average'}`}</span>
                </div>
            </div>
        </div>}
    </div>
  )
}

export default Bloodpressure