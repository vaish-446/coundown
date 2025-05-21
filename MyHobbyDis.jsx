import {useState} from 'react'

const MyHobbyDis = ({myHobby})=>{
    console.log("This is myhobbydis component",myHobby);
    const[data, setData]=useState("")
    return(
        <div>
            <input type="text" value={data} onChange={(e) =>setData(e.target.value)}/>
            <p>My hobby si {myHobby}</p>
        </div>
    )
}
export default MyHobbyDis
