import {atom, useRecoilState} from "recoil"

export const userState=atom({
    key:'userState',
    default:{
        isLoading:true,
        userEmail:null
    }
})


// const setUser=useRecoilState(userState)