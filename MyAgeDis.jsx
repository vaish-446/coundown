import {useState} from 'react'

const MyAgeDis = ({Age})=>{
    console.log("This is myagedis component",Age);
    const[data, setData]=useState("")
    return(
        <div>
            <input type="text" value={data} onChange={(e) =>setData(e.target.value)}/>
            <p>My hobby si {Age}</p>
        </div>
    )
}
export default MyAgeDis