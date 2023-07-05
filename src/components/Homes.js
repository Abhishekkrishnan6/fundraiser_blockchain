import styled from 'styled-components';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PaidIcon from '@mui/icons-material/Paid';
import EventIcon from '@mui/icons-material/Event';
import { Link } from 'react-router-dom';
import { ethers } from 'ethers';
import CampaignFactory from '../artifacts/contracts/Campaign.sol/CampaignFactory.json'
import { useState,useEffect } from 'react';
export default function Index() {  
  const [filter, setFilter] = useState();
  const [data, setdata] = useState();
  const [health, sethealth] = useState();
  const [EducationData, setEducationData] = useState();
  const [AnimalData, setAnimalData] = useState();
  useEffect(()=>{
    async function getdata(){
      const contractAddresss = "0xDD4C0a2c031d003C3f3d1863063aF4554F9C6814"
      const provider = new ethers.providers.JsonRpcProvider(
        "https://sepolia.infura.io/v3/ead4798d643d4f1ea18dff99d6a87ab7"
       );
  const contract = new ethers.Contract(
    contractAddresss,
    CampaignFactory.abi,
    provider
  );
  const getAllCampaigns =  contract.filters.campaigncreated();
  const AllCampaigns =  await contract.queryFilter(getAllCampaigns);
  const AllData = AllCampaigns.map((e) => {
        return {
      title: e.args.title,
      image: e.args.imgurl,
      owner: e.args.owner,
      timeStamp: parseInt(e.args.timestamp),
      
      amount: ethers.utils.formatEther(e.args.requiredamount),
      address: e.args.campaignaddress    
    
    }
      });
      setFilter(AllData);
    setdata(AllData);
    
    }
    getdata();
 
  },[])
  useEffect(()=>{
    async function getdata(){
      const contractAddresss = "0xDD4C0a2c031d003C3f3d1863063aF4554F9C6814"
      const provider = new ethers.providers.JsonRpcProvider(
        "https://sepolia.infura.io/v3/ead4798d643d4f1ea18dff99d6a87ab7"
       );
  const contract = new ethers.Contract(
    contractAddresss,
    CampaignFactory.abi,
    provider
  );
  const getHealthCampaigns = contract.filters.campaigncreated(null,null,null,null,null,null,'Health');
  const HealthCampaigns = await contract.queryFilter(getHealthCampaigns);
  const HealthData = HealthCampaigns.map((e) => {
    return {
      title: e.args.title,
      image: e.args.imgurl,
      owner: e.args.owner,
      timeStamp: parseInt(e.args.timestamp),
      
      amount: ethers.utils.formatEther(e.args.requiredamount),
      address: e.args.campaignaddress 
    }
  });
  sethealth(HealthData)
    }
    getdata();
   
  },[])

  useEffect(()=>{
    async function getdata(){
      const contractAddresss = "0xDD4C0a2c031d003C3f3d1863063aF4554F9C6814"
      const provider = new ethers.providers.JsonRpcProvider(
        "https://sepolia.infura.io/v3/ead4798d643d4f1ea18dff99d6a87ab7"
       );
       

  const contract = new ethers.Contract(
    contractAddresss,
    CampaignFactory.abi,
    provider
  );
     const getEducationCampaigns = contract.filters.campaigncreated(null,null,null,null,null,null,'Education');
     const EducationCampaigns = await contract.queryFilter(getEducationCampaigns);
     const EducationData = EducationCampaigns.map((e) => {
    return {
      title: e.args.title,
      image: e.args.imgurl,
      owner: e.args.owner,
      timeStamp: parseInt(e.args.timestamp),
      
      amount: ethers.utils.formatEther(e.args.requiredamount),
      address: e.args.campaignaddress 
    }
  });
  setEducationData(EducationData)
    }
    getdata();
    console.log(EducationData)
   
  },[])

  
  useEffect(()=>{
    async function getdata(){
      const contractAddresss = "0xDD4C0a2c031d003C3f3d1863063aF4554F9C6814"
      const provider = new ethers.providers.JsonRpcProvider(
        "https://sepolia.infura.io/v3/ead4798d643d4f1ea18dff99d6a87ab7"
       );
       

  const contract = new ethers.Contract(
    contractAddresss,
    CampaignFactory.abi,
    provider
  );
     const getAnimalCampaigns = contract.filters.campaigncreated(null,null,null,null,null,null,'Animal');
  const AnimalCampaigns = await contract.queryFilter(getAnimalCampaigns);
  const AnimalData = AnimalCampaigns.map((e) => {
    return {
      title: e.args.title,
      image: e.args.imgurl,
      owner: e.args.owner,
      timeStamp: parseInt(e.args.timestamp),
      
      amount: ethers.utils.formatEther(e.args.requiredamount),
      address: e.args.campaignaddress 
    }
  });
  setAnimalData(AnimalData)
    }
    getdata();
    console.log(EducationData)
   
  },[])
 console.log(EducationData)
  return (
    <HomeWrapper>

     
      <FilterWrapper>
        <FilterAltIcon style={{fontSize:40}} />
        <Category onClick={() => setFilter(data)}>All</Category>
        <Category onClick={() => setFilter(health)}>Health</Category>
        <Category onClick={() => setFilter(EducationData)}>Education</Category>
        <Category onClick={() => setFilter(AnimalData)}>Animal</Category>
      </FilterWrapper>

   
      <CardsWrapper>


      {filter && filter.map((e) => {
        return (
          <Card key={e.title}>
          <CardImg>
            <img 
              alt="Crowdfunding"
              layout='fill' 
              src="https://via.placeholder.com/150/0000FF/808080 ?Text=PAKAINFO.com" style={{height: "120px"}}
            />
          </CardImg>
          <Title>
            {e.title}
          </Title>
          <CardData>
            <Text>Owner<AccountBoxIcon /></Text> 
            <Text>{e.owner.slice(0,6)}...{e.owner.slice(39)}</Text>
          </CardData>
          <CardData>
            <Text>Amount<PaidIcon /></Text> 
            <Text>{e.amount} Sepolia ETH</Text>
          </CardData>
          <CardData>
            <Text><EventIcon /></Text>
            <Text>{new Date(e.timeStamp * 1000).toLocaleString()}</Text>
          </CardData>
          <Link  to={'/' + e.address}>
            <Button>
            Go to Campaign 
          </Button>
          </Link>
        </Card>
        )
      })}
      </CardsWrapper>
    </HomeWrapper>
  )
}
const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin-top: 15px;
`
const Category = styled.div`
  padding: 10px 15px;
  background-color: ${(props) => props.theme.bgDiv};
  margin: 0px 15px;
  border-radius: 8px;
  font-family: 'Poppins';
  font-weight: normal;
  cursor: pointer;
`
const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 80%;
  margin-top: 25px;
`
const Card = styled.div`
  width: 30%;
  margin-top: 20px;
  background-color: ${(props) => props.theme.bgDiv};

  &:hover{
    transform: translateY(-10px);
    transition: transform 0.5s;
  }
  
  &:not(:hover){
    transition: transform 0.5s;
  }
`
const CardImg = styled.div`
  position: relative;
  height: 120px;
  width: 100%;
`
const Title = styled.h2`
  font-family: 'Roboto';
  font-size: 18px;
  margin: 2px 0px;
  background-color: ${(props) => props.theme.bgSubDiv};
  padding: 5px;
  cursor: pointer;
  font-weight: normal;
`
const CardData = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2px 0px;
  background-color: ${(props) => props.theme.bgSubDiv};
  padding: 5px;
  cursor: pointer;
  `                                                                   
const Text = styled.p`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;                                                                                                                                                                                      
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: bold;
`
const Button = styled.button`
  padding: 8px;
  text-align: center;
  width: 100%;
  background-color:#00b712 ;
  background-image:
      linear-gradient(180deg, #00b712 0%, #5aff15 80%); 
  border: none;
  cursor: pointer;
  font-family: 'Roboto';
  text-transform: uppercase;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`