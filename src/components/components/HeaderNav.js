import React from 'react'
import styled from 'styled-components';
const HeaderNav = () => {
  return (
    <HeaderWrapper> 
        <HeaderNavLinks>
            Campaigns
        </HeaderNavLinks>
        <HeaderNavLinks>
            Create Campaigns
        </HeaderNavLinks>
        <HeaderNavLinks>
           Dashboard
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
background-color: ${(props) => props.theme.bgSubDiv} ;
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