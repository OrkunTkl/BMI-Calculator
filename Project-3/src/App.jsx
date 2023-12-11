import { useState } from "react"


function App() {
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState("")
  const [message, setMessage] = useState("")



  let calcBmi = (e) => {
    e.preventDefault()

    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height")
    }else {
      let bmi = (weight / (height * height) * 703)
      setBmi(bmi.toFixed(1))

      if (bmi <25) {
        setMessage ("You are underweight")
      }else if (bmi >= 25 && bmi < 35) {
        setMessage ("You are a healthy weight")
      }else {
        setMessage ("You are overweight")
      }
    }
  }

  let imgSrc;
  if (bmi < 1) {
    imgSrc = null
  }else {
    if (bmi < 25) {
      imgSrc = "../src/assets/underweight.png"
    } else if (bmi >= 25 && bmi < 35) { 
        imgSrc = "../src/assets/healthy.png"
    } else {
      imgSrc = "../src/assets/overweight.png"
    }
  }

 
 
  let reload = () => {
    window.location.reload()
  }

  return (
    <div className="p-20 flex flex-col justify-center items-center w-[100%] max-h-[100vh]">
      <div className="border-4  rounded-lg p-4 shadow-lg">
        <h2 className="font-bold text-4xl text-center p-8">BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label className="text-xl font-bold px-2">Weight (lbs)</label>
            <input className="w-[100%] text-xl px-2 py-1 mx-2 rounded-lg border-4 border-black" 
            value={weight} onChange={(e)=> setWeight(e.target.value)}/>
          </div>
          <div>
            <label className="text-xl font-bold px-2">Height (in)</label>
            <input className="w-[100%] text-xl px-2 py-1 mx-2 rounded-lg border-4 border-black " 
            value={height} onChange={(e)=> setHeight(e.target.value)}/>
          </div>
          <div className="py-4">
            <button className="py-2 block w-[100%] text-xl font-bold mx-2 px-[10px] bg-gray-800 text-white border-solid border-white rounded-lg cursor-pointer"
            type="submit">Submit</button>
            <button className="bg-white text-gray-800 text-xl mx-2 py-2 my-4 font-bold border border-gray-800 px-2 w-[100%] border-solid rounded-lg cursor-pointer"
             type="submit" onClick={reload}>Reload</button>
          </div>
        </form>
        <div className="flex flex-col justify-center items-center ">
          <h3 className="font-bold text-black text-xl">Your BMI is: {bmi}</h3>
          <p className="mx-[10px] font-bold ">{message}</p>
        </div>
        <div className="flex justify-center text-center">
          <img src={imgSrc} className="max-h-[250px]" alt="" />
        </div>
      </div>
    </div>
  )
}

export default App
