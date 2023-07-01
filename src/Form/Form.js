import React from 'react'
import styled from 'styled-components'
import FormLeftWrapper from './Components/FormLeftWrapper'
import FormRightWrapper from './Components/FormRightWrapper'
import { createContext,useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
const FormState = createContext();
const Form = () => {
    const[form,setform]=useState({
        campaignTitle: "",
        story: "",
        requiredAmount: "",
        category: "Education",
    });
    const[loading,setloading]=useState(false);
    const[address,setaddress]=useState("");

    const[storyUrl,setStoryUrl]=useState();
    const[imageUrl,setImageUrl]=useState();
    const Formhandler =(e)=>{
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const[image,setimage]=useState(null);
    const ImageHandler = (e)=>{
        setimage(e.target.files[0]);
    }
   console.log(imageUrl);
  return (
    <FormState.Provider value={{form,setform,image,setimage,ImageHandler,Formhandler,setImageUrl,setStoryUrl,setloading,setaddress,storyUrl,imageUrl}}>
    <FormWrapper>
        
        <FormMain>
    {/* <FormTitle>
        Create Campaign
    </FormTitle> */}

       
    {
        loading==true ?
        address === "" ?
        <Spinner>
        <TailSpin height={60}/>
        </Spinner> :
        <Address>
            <h1>Campagin Started Successfully</h1>
            <h1>{address}</h1>
              <ButtonWrapper>
                 GO To Campagin

                </ButtonWrapper>  
        </Address>
        :
       
        <FormInputWrapper>
            <FormLeftWrapper />
            <FormRightWrapper />
        </FormInputWrapper>


       }
        </FormMain>
        </FormWrapper>
        </FormState.Provider>
  )
}
const FormWrapper=styled.div`

width: 100%;
display: flex;
justify-content: center;
`
const FormMain = styled.div`
width: 80%;

`

const FormTitle=styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
text-transform: capitalize;
font-weight: bold;
color: ${(props)=> props.theme.color};
font-size: 40px; 
font-family: 'poppins';
margin-top: 20px;
`
const FormInputWrapper = styled.div`
display: flex;
justify-content:space-between ;
margin-top: 45px;

`
const Spinner = styled.div`
width: 100%;
height: 80vh;
display: flex;
justify-content: center;
align-items: center;
`
const Address = styled.div`

width: 100%;
height: 80vh;
display: flex;
flex-direction: column;
background-color:${(props)=> props.theme.bgSubDiv};
border-radius: 8px;
align-items: center;
`
const ButtonWrapper = styled.button`
display: flex;
justify-content: center;
width: 30%;
padding: 15px;
color: white;
background-color: #00b712;
background-image: linear-gradient(180deg, #00b712 0%, #5aff15 80%);
border: none;
margin-top: 30px;
cursor: pointer;
font-weight: bold;
font-size: large;

`
export default Form;
export {FormState};