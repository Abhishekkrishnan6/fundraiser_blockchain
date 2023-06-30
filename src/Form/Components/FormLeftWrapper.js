import { Input } from 'postcss';
import React from 'react'
import styled from 'styled-components';
import { FormState } from '../Form';
import { useContext } from 'react';
const FormLeftWrapper = () => {
    const Handler = useContext(FormState);
  return (
    <FormLeft>
        
        <FormInput>
            <label>Campaign Title</label>
            <InputWrapper value={Handler.form.campaignTitle}  onChange={(event) => Handler.setform({...Handler.form, campaignTitle: event.target.value})} placeholder='Campaign Title' name='campaignTitle'>
            </InputWrapper>
        </FormInput>
        <FormInput>
            <label>Story</label>
            <TextArea  value={Handler.form.story}  onChange={(event) => Handler.setform({...Handler.form, story: event.target.value})} placeholder='Describe Your Story' name='story'>
            </TextArea>
        </FormInput>
       



    </FormLeft>
  )
}
const FormLeft =styled.div`
width: 48%;
`
const FormInput = styled.div`
display: flex;
flex-direction: column;

font-family: 'poppins';
margin-top: 10px;

`
const InputWrapper =styled.input`
padding: 15px;
background-color: ${(props)=>props.theme.bgDiv};
color: ${(props)=>props.theme.color};
margin-top: 4px;
border: none;
border-radius: 8px;
outline: none;
font-size: large;
width: 100%;
`
const TextArea = styled.textarea`
padding: 15px;
background-color: ${(props)=>props.theme.bgDiv};
color: ${(props)=>props.theme.color};
margin-top: 4px;
border: none;
border-radius: 8px;
outline: none;
font-size: large;
max-width: 100%;
min-width: 100%;
overflow-x: hidden;
`
export default FormLeftWrapper