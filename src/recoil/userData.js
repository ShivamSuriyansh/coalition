import { atom } from "recoil";


export const userData= atom({
    key : "userData",
    default : []
})

export const userId = atom({
    key: "userId",
    default : ''
})

export const singleUserDate = atom({
    key:"singleUserData",
    default : []
})

export const avgBP = atom({
    key: 'avgSys',
    default:{}
})