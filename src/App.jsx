
import './App.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';



function App() {
  const [weight,setWeight] =useState(0)
  const [height,setHeight] =useState(0)
  const [BMI,setBMI] =useState(0)
  const [age,setAge] =useState(0)

//  conditionaly render
  const [isWeight,setIsWeight] =useState(true)
  const [isHeight,setIsHeight] =useState(true)
  const [isAge,setIsAge] =useState(true)
  const [alert,setAlert]=useState("")

 const validate = (e)=>{
   const {name,value}=e.target
  console.log(name,value);
  
   if(!!value.match(/^[0-9]*$/)){
     if(name=="weight"){
       setWeight(value)
       setIsWeight(true)
   }else if(name=="height"){
    setHeight(value)
    setIsHeight(true)
   }else{
    setAge(value)
    setIsAge(true)
   }

 }else{
   if(name=="weight"){
    setWeight(value)
     setIsWeight(false)
   }else if(name=="height"){
    setHeight(value)
    setIsHeight(false)
   }else{
    setAge(value)
    setIsAge(false)
   }
 }
}
 const handlereset =()=>{
   setWeight(0)
   setHeight(0)
   setIsWeight(true)
   setIsHeight(true)
   setBMI(0)
   setAlert("")
 }

 const handleclick =()=>{
  let newBMI = (weight/height**2)*10000
    newBMI = newBMI.toFixed(2)
   setBMI(newBMI)

  if(age>=20){
    if(newBMI<=16){
      setAlert(<span className='text-danger fs-2'>Severe Thinness</span>)
     }else if(newBMI>16 && newBMI<=17){
      setAlert(<span className='text-warning fs-2'>Moderate Thinness</span>)
     }else if(newBMI>17 && newBMI<=18.5){
      setAlert(<span className='text-warning fs-2'>Mild Thinness</span>)
     }else if(newBMI>18.5 && newBMI<=25){
      setAlert(<span className='text-success fs-2'>Healthy Weight</span>)
     }else if(newBMI>25 && newBMI<=30){
      setAlert(<span className='text-warning fs-2'>Overweight</span>)
     }else if(newBMI>30 && newBMI<=35){
      setAlert(<span className='text-warning fs-2'>Obese Class I</span>)
     }else if(newBMI>35 && newBMI<=40){
      setAlert(<span className='text-danger fs-2'>Obese Class II</span>)
     }else if(newBMI>40 ){
      setAlert(<span className='text-danger fs-2'>Obese Class III</span>)
     }
  }else{
    if(age<=8){
      if(newBMI<=12){
        setAlert(<span className='text-danger fs-2'>Severe Thinness</span>)
       }else if(newBMI>12 && newBMI<=13){
        setAlert(<span className='text-warning fs-2'>Moderate Thinness</span>)
       }else if(newBMI>13 && newBMI<=18){
        setAlert(<span className='text-success fs-2'>Normal</span>)
       }else if(newBMI>18 && newBMI<=21){
        setAlert(<span className='text-warning fs-2'>Overweight</span>)
       }else if(newBMI>21){
        setAlert(<span className='text-danger fs-2'>Obese</span>)
 
      }
     }else if(age>8 && age<=11){
      if(newBMI<=13){
        setAlert(<span className='text-danger fs-2'>Severe Thinness</span>)
       }else if(newBMI>13 && newBMI<=14){
        setAlert(<span className='text-warning fs-2'>Moderate Thinness</span>)
       }else if(newBMI>13 && newBMI<=18){
        setAlert(<span className='text-success fs-2'>Normal</span>)
       }else if(newBMI>18 && newBMI<=21){
        setAlert(<span className='text-warning fs-2'>Overweight</span>)
       }else if(newBMI>21){
        setAlert(<span className='text-danger fs-2'>Obese</span>)
 
      }

     }else if(age>11 && age<=14){
      if(newBMI<=14){
        setAlert(<span className='text-danger fs-2'>Severe Thinness</span>)
       }else if(newBMI>14 && newBMI<=15){
        setAlert(<span className='text-warning fs-2'>Moderate Thinness</span>)
       }else if(newBMI>15 && newBMI<=21){
        setAlert(<span className='text-success fs-2'>Normal</span>)
       }else if(newBMI>22 && newBMI<=26){
        setAlert(<span className='text-warning fs-2'>Overweight</span>)
       }else if(newBMI>26){
        setAlert(<span className='text-danger fs-2'>Obese</span>)
 
      }


     }else if(age>14 && age<=16){
      if(newBMI<=14.5){
        setAlert(<span className='text-danger fs-2'>Severe Thinness</span>)
       }else if(newBMI>14.5 && newBMI<=16){
        setAlert(<span className='text-warning fs-2'>Moderate Thinness</span>)
       }else if(newBMI>16 && newBMI<=22){
        setAlert(<span className='text-success fs-2'>Normal</span>)
       }else if(newBMI>22 && newBMI<=27){
        setAlert(<span className='text-warning fs-2'>Overweight</span>)
       }else if(newBMI>27){
        setAlert(<span className='text-danger fs-2'>Obese</span>)
 
      }

     }else if(age>16 && age<=19){
      if(newBMI<=15){
        setAlert(<span className='text-danger fs-2'>Severe Thinness</span>)
       }else if(newBMI>15 && newBMI<=17){
        setAlert(<span className='text-warning fs-2'>Moderate Thinness</span>)
       }else if(newBMI>17 && newBMI<=24){
        setAlert(<span className='text-success fs-2'>Normal</span>)
       }else if(newBMI>24 && newBMI<=30){
        setAlert(<span className='text-warning fs-2'>Overweight</span>)
       }else if(newBMI>30){
        setAlert(<span className='text-danger fs-2'>Obese</span>)
 
      }
     }else{

     }
  }
 }

 


  return (
    <>
     <div className='main '>
      <div className='calculator rounded p-4'>
       <h1 className='text-center mt-2 '>BMI calculator</h1>
       <div className='bg-light border border-dark rounded w-100 h-25 p-4 mt-3'>
        <h1 className='text-center '>{BMI} kg/m²</h1>
        <p className='text-center' >{alert}</p>
       </div>

       <div className='mt-4'>
       <TextField id="outlined-basic" name='age' value={age || ""} className='w-100 ' label="Enter your age" variant="outlined"  onChange={(e)=>validate(e)}/>
        {!isWeight && <p className='text-danger mt-1'>Invalid input</p>} 
         <TextField id="outlined-basic" name='weight' value={weight || ""} className='w-100 mt-3' label="Enter Weight in kg" variant="outlined"  onChange={(e)=>validate(e)}/>
        {!isWeight && <p className='text-danger mt-1'>Invalid input</p>}
         <TextField id="outlined-basic" name='height' value={height ||""} className='w-100 mt-3'label="Enter Height in cm" variant="outlined"  onChange={(e)=>validate(e)} />
        {!isHeight && <p className='text-danger mt-1'>Invalid input</p>}
       </div>

        <div className='mt-4 d-flex'>
        <Button variant="contained" color="success" className='w-50 p-3 me-2 ' disabled={!isWeight || !isHeight ||!weight || !height || !age }   onClick={handleclick}>Calculate</Button>
        <Button variant="outlined" color="error" className='w-50 p-3 ' onClick={handlereset}>Reset</Button>
        </div>

      </div>

     </div>
    </>
  )
}

export default App
