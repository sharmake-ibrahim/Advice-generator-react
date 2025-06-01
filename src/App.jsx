import { useState , useEffect} from 'react'
import './App.css'

function App() {

  const [adviice, setAdvice] = useState({})
 const ApiUrl = "https://api.adviceslip.com/advice"

 const handleFetchAdvice = async () => {
  try {
    const res = await fetch(ApiUrl);
    const data = await res.json()
   console.log(data)
    setAdvice(data?.slip)
  } 
    catch(error) {
      console.log(error.message)
    }
 }

 useEffect(()=> {
  handleFetchAdvice()
 },[])



 const handleClick = ()=> {
  handleFetchAdvice()
 }



 const {id, advice} = adviice
  return (
    <>
      <h1 key={id}> {advice}</h1>
      <button onClick={()=> handleClick()}>Generate Advice</button>
    </>
  )
}

export default App
