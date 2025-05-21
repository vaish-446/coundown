import Sample from "./Components/sample"

function App() {
  const myName = "vaishnavi"
  const Age="19"
  const hobby="drawing"
  return (
    <>
    <h1>My React App</h1>
    <h1 className=" text-30x1 font-bold underline text-pink-600">Hello world</h1>
    <Sample myName={myName} Age={Age} hobby={hobby}/>
    </>
  )
}


export default App


