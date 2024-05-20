import { Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
import { useEffect, useState } from "react";
import { userData } from '../recoil/userData'
import { useRecoilState, useRecoilValue } from "recoil"
import {avgBP} from '../recoil/userData'

Chart.register(...registerables);

const Linechart = ({id}) => {

    const allChat = useRecoilValue(userData);
    const chat = allChat.filter(ch => id===ch.date_of_birth)
    console.log('id matched :',chat);

    const [systolicBP, setSystolicBP] = useState([]);
    const [diastolicBP, setDiastolicBP] = useState([]);
    const [averageSystolic , setAvgSystolic] = useRecoilState(avgBP);

    useEffect(() => {
        if (chat) {
            const systolic = [];
            const diastolic = [];
            const diagnosisHistory =chat[0]?.diagnosis_history;
            console.log('chat:####',diagnosisHistory)
            console.log('Systolic:1', systolic, 'Diastolic:1', diastolic);
            diagnosisHistory?.forEach(ch => {
                const systolicBp = ch?.blood_pressure.systolic.value;
                const distolicBp = ch?.blood_pressure.diastolic.value;
                systolic.push(systolicBp);
                diastolic.push(distolicBp);
            });
            if(systolic.length >0  && diastolic.length >0){

                setSystolicBP(systolic);
                setDiastolicBP(diastolic);
                const avgSys = parseInt(systolic.slice(0,6).reduce((acc,curr)=>acc+curr,0) / 6)
                const avgdis = parseInt(diastolic.slice(0,6).reduce((acc,curr)=> acc+ curr,0) / 6)
                setAvgSystolic({
                    avgSys:avgSys,
                    avgDis:avgdis
                })
            }
        }
        console.log('##########')


    }, [id]);
    

    const data = {
        labels: ['OCT', 'NOV', 'DEC', 'JAN', 'FEB', 'MAR'],
        datasets: [
            {
                label: 'Systolic BP',
                backgroundColor: 'rgba(230,111,210,0.2)',
                borderColor: 'rgba(230,111,210)',
                fill: false,
                tension: 0.25,
                borderWidth: 2,
                data: systolicBP,
            },
            {
                label: 'Diastolic BP',
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                fill: false,
                tension: 0.25,
                borderWidth: 2,
                data: diastolicBP,
            }
        ]
    };


    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Blood Pressure Over Time',
                font: {
                    size: 20
                }
            },
            legend: {
                display: true,
                position: 'right'
            }
        },
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        }
    };
    
    console.log('Systolic:', systolicBP, 'Diastolic:', diastolicBP);
    console.log('################',averageSystolic)
    return (
        <div className=" w-full h-full">
            <Line data={data} options={options} />
        </div>
    );
};

export default Linechart;
