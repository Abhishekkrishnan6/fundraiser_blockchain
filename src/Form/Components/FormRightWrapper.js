import { Button } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import { FormState } from '../Form';
import { useContext,useState } from 'react';
import { toast } from 'react-toastify';
import { TailSpin } from 'react-loader-spinner';
import { Buffer } from 'buffer';
import {create as IPFSHTTPClient} from 'ipfs-http-client';
import  {ethers} from 'ethers';
import CampaignFactory from '../../artifacts/contracts/Campaign.sol/CampaignFactory.json'
const projectId='2RvuhaUAmmOXRQJ5gIPRdqHkZCd';
const projectSeceret='ed54e01c81657ded73ef38b397022527';
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
    const contractAddresss = "0x2310160A5b89AB02620E2087429a4C1B37DF11Bb"
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
       console.log(Handler.StoryUrl);
       //console.log(Handler.image);

    }

const startcampaign = async (e)=>{
    e.preventDefault();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
     if(Handler.form.campaignTitle===""){
        toast.warn("Title Field Is Empty");
     }
     else if(Handler.form.story===""){
        toast.warn("Story Field Is Empty");
     }
     else if(Handler.form.requiredAmount===""){
        toast.warn("RequiredAmount Field Is Empty");
     }
     else if(Handler.form.uploaded===false){
        toast.warn("Files Upload Required");
     }
     else{
        console.log("error");
        Handler.setloading(true);
        const contract = new ethers.Contract(
            contractAddresss,
            CampaignFactory.abi,
            signer

        );
        
        console.log("Started new campaign ......");
        console.log(Handler.imageUrl);
        const campaignData = await contract.createCampaign(
             Handler.form.campaignTitle,
            parseInt(Handler.form.requiredAmount),
            Handler.imageUrl,
            Handler.form.category,
            Handler.storyUrl
            
        );
        await campaignData.wait();   
          Handler.setaddress(campaignData.to);

     }

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
<ButtonWrapper onClick={startcampaign}>
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