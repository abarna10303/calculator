import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

function App() {
  const operations = ["AC","+/-","c","%",7,8,9,"x",4,5,6,"-",1,2,3,"+","RE",0,".","="];
  const [numbers,setNumber]=useState('');
  const [oprater,setoperator]=useState('');
  const [preValue,setPreValue]=useState(0);
  const[answer,setAnswer]=useState('');
  const handlingInputs=(e)=>{
    let click=e.target.innerText;
    if(click==='+' || click==='-' || click==='%'|| click==='x')
    {
      setPreValue(numbers);
      setNumber('');
      setoperator(click);
      console.log(numbers);
    }
    else if(click==='c')
    {
      setNumber('');
    }
    else if(click==='AC')
    {
      setAnswer(numbers);
      setNumber('');
    }
    else if(click==='RE')
    {
      setNumber(answer);
    }
    else if(click==='=')
    {
      switch (oprater){
        case '+':
          setNumber(Number(preValue)+Number(numbers));
          console.log(preValue,numbers);
        break;
        case '-':
          setNumber(Number(preValue)-Number(numbers));
          console.log(preValue,numbers);
        break;
        case 'x':
          setNumber(Number(preValue)*Number(numbers));
          console.log(preValue,numbers);
        break;
        case '%':
          setNumber(Number(preValue)/Number(numbers));
          console.log(preValue,numbers);
        break;
        default :
          break;
      }
    }
    else{
      setNumber(numbers+e.target.innerText);
      console.log(numbers+e.target.innerText);
    }
  }
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#e7e7e7",
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#22252d",
          height: "700px",
          width: "400px",
          borderRadius: "25px",
        }}
      >
        <Stack height="280px" sx={{justifyContent:'end' ,marginBottom:'15px','& div input':{color:'white',textAlign:'right',fontSize:'20px',fontWeight:'bold',padding:'20px'}}} >
          <TextField value={numbers} variant="standard" onChange={(e)=>setNumber(e.target.value)}/>
        </Stack>
        <Stack direction="row" flexWrap="wrap" gap="10px" sx={{'& button':{
          width:"23%",
          color:"white",
          fontWeight:'bold',
        },
        height:"400px",
        backgroundColor:'#292d36',
        borderRadius:'20px'
        }}>
          {operations.map((val, index) => {
            return <Button key={index} variant="text" onClick={handlingInputs} sx={{textTransform:'none'}}>{val}</Button>;
          })}
        </Stack>
      </Box>
    </Box>
  );
}

export default App;
