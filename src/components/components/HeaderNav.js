import React from 'react'
import styled from 'styled-components';
import { Link , NavLink} from "react-router-dom"
import { useRoutes } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import '../../App.css';
const HeaderNav = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  return (
    <HeaderWrapper> 
     
        <HeaderNavLinks className={splitLocation[1] === "" ? "active" : ""}   >
        <NavLink to={'/'} style={{textDecoration: 'none' , color: 'inherit'}}>
            Campaigns
        </NavLink>
        </HeaderNavLinks >
       
        <HeaderNavLinks className={splitLocation[1] === "createcampaign" ? "active" : ""}>
        <NavLink  to='/createcampaign' style={{textDecoration: 'none' , color: 'inherit'}}>
        
            Create Campaigns
            </NavLink>
        </HeaderNavLinks>
       
        <HeaderNavLinks className={splitLocation[1] === "dashboard" ? "active" : ""} >
        <NavLink  to='/dashboard' style={{textDecoration: 'none' , color: 'inherit'}}>
        
           Dashboard
           </NavLink>
        </HeaderNavLinks>
       



        

    </HeaderWrapper> 
  )
}
const HeaderWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
background-color: ${(props) => props.theme.bgDiv};
padding: 6px;
height: 50%;
border-radius: 10px;
`
const HeaderNavLinks = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
//background-color: ${(props)=> props.active ? props.theme.bgDiv : props.theme.bgSubDiv};
font-family: 'Roboto';
margin: 2px;
border-radius: 10px;
padding:  7px ;
cursor: pointer;
text-transform: uppercase;
font-weight: bold;
font-size: small;


`

export default HeaderNav