import { Button } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
const FormRightWrapper = () => {
  return (
<FormRight>
   <FormInput>
       <FormRow>
        <RowFirstInput>
            <label>Required Amount</label>
            <InputWrapper type='number' placeholder='Required Amount'>
            </InputWrapper>
        </RowFirstInput>

        <RowSecondInput>
            <label>Choose Category</label>
            <SelectWrapper > 
                <option>
                Education
                </option>
                <option>
                 Health   
                </option>
                <option>
                 Animal   
                </option>
            </SelectWrapper>
        </RowSecondInput>


        </FormRow>
    </FormInput>


    <FormInput>

        <label>Select Image</label>
        <ImageWrapper type='file' accept='image/*'></ImageWrapper>
    </FormInput>
<ButtonWrapper>
    Upload Files to IPFS
</ButtonWrapper>
<ButtonWrapper>
    Start Campaign
</ButtonWrapper>


</FormRight>
  )
}
const FormRight =styled.div`
width: 45%;

`
const FormInput = styled.div`
display: flex;
flex-direction: column;
font-family: 'poppins';
margin-top: 10px;

`
const FormRow = styled.div`
display: flex;
justify-content: space-between;
width: 100%;

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
const RowFirstInput = styled.div`
display: flex;
flex-direction: column;
width: 45%;

`

const RowSecondInput = styled.div`
display: flex;
flex-direction: column;
width: 45%;

`
const SelectWrapper=styled.select`
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
const ImageWrapper = styled.input`

background-color: ${(props)=>props.theme.bgDiv};
color: ${(props)=>props.theme.color};
margin-top: 4px;
border: none;
border-radius: 8px;
outline: none;
font-size: large;
width: 100%;

&::-webkit-file-upload-button{
padding: 15px;
background-color: ${(props)=>props.theme.bgSubDiv};
color: ${(props)=>props.theme.color};
outline: none;
border: none;
font-weight: bold;
}

`
const ButtonWrapper=styled.button`
width: 100%;
padding: 15px;
color: white;
background-color: #00b712;
background-image: linear-gradient(180deg,#00b712 0%,#5aff15 80%);
border: none;
margin-top: 30px;
cursor: pointer;
font-weight: bold;
font-size: large;

`

export default FormRightWrapper