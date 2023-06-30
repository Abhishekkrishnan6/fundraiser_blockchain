import { Button } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import { FormState } from '../Form';
import { useContext,useState } from 'react';
import { toast } from 'react-toastify';
import { TailSpin } from 'react-loader-spinner';
import { Buffer } from 'buffer';
import {create as IPFSHTTPClient} from 'ipfs-http-client';
const projectId='';
const projectSeceret='';
const auth = 'Basic ' + Buffer.from(projectId + ":" + projectSeceret).toString('base64')
const client = IPFSHTTPClient({
    host:'ipfs.infura.io',
    port:5001,
    protocol:'https',
    headers:{
        authorization: auth
    }
})
const FormRightWrapper = () => {
    const Handler = useContext(FormState)
    const[uploading,setuploading]=useState(false);
    const[uploaded,setuploaded]=useState(false);
    
    const uploadFiles = async(e) =>{
       e.preventDefault();
       setuploading(true);
       if(Handler.form.story !== ""){
        try{
          const added =  await client.add(Handler.form.story);
           Handler.setStoryUrl(added.path)
        }
        catch(error){
            toast.warn(`Error Uploading Story`);
        }
       } 
       if(Handler.image !== null){
        try{
            const added = await client.add(Handler.image);
            Handler.setImageUrl(added.path)
        }
        catch(error){
            toast.warn(`Error Uploading Image`);
        }
       } 
       setuploading(false);
       setuploaded(true);
       toast.success("Files Uploaded Successfully");
       //console.log(Handler.setStoryUrl);
       console.log(Handler.image);

    }



  return (
   
<FormRight>
   <FormInput>
       <FormRow>
        <RowFirstInput>
            <label>Required Amount</label>
            <InputWrapper  value={Handler.form.requiredAmount}  onChange={(event) => Handler.setform({...Handler.form, requiredAmount: event.target.value})}  type='number' placeholder='Required Amount' name='requiredAmount'>
            </InputWrapper>
        </RowFirstInput>

        <RowSecondInput>
            <label>Choose Category</label>
            <SelectWrapper value={Handler.form.category}  onChange={(event) => Handler.setform({...Handler.form, category: event.target.value})} name='category'> 
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
        <ImageWrapper onChange={Handler.ImageHandler}  type='file' accept='image/*'></ImageWrapper>
    </FormInput>
{ uploading == true ? <ButtonWrapper><TailSpin color='#fff' height={20}/> </ButtonWrapper>:
 uploaded == false ? 
 <ButtonWrapper onClick={uploadFiles}>
  Upload Files to IPFS
</ButtonWrapper> 
: <ButtonWrapper style={{cursor: "no-drop"}}>
File Uploaded successfully
</ButtonWrapper>
}
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
display: flex;
justify-content: center;
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