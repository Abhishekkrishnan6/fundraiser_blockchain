import { Input } from 'postcss';
import React from 'react'
import styled from 'styled-components';

const FormLeftWrapper = () => {
  return (
    <FormLeft>
        
        <FormInput>
            <label>Campaign Title</label>
            <InputWrapper placeholder='Campaign Title'>
            </InputWrapper>
        </FormInput>
        <FormInput>
            <label>Story</label>
            <TextArea placeholder='Describe Your Story'>
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