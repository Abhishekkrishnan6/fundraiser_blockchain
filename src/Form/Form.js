import React from 'react'
import styled from 'styled-components'
import FormLeftWrapper from './Components/FormLeftWrapper'
import FormRightWrapper from './Components/FormRightWrapper'
import { createContext,useState } from 'react';

const FormState = createContext();
const Form = () => {
    const[form,setform]=useState({
        campaignTitle: "",
        story: "",
        requiredAmount: "",
        category: "Education",
    });
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
   
  return (
    <FormState.Provider value={{form,setform,image,setimage,ImageHandler,Formhandler,setImageUrl,setStoryUrl}}>
    <FormWrapper>
        
        <FormMain>
        <FormTitle>
            Create Campaign
        </FormTitle>
        <FormInputWrapper>
            <FormLeftWrapper />
            <FormRightWrapper />
        </FormInputWrapper>
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
export default Form;
export {FormState};