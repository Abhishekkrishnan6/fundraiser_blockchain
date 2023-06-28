import React from 'react'
import  styled  from 'styled-components'
import Brightness7Icon from '@mui/icons-material/Brightness7';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import {App} from '../Layout';
import { useContext } from 'react';
import Wallet from './Wallet';
const HeaderRight = () => {
    const ThemeToggler = useContext(App);
    
  return (
    <HeaderRightWrapper> 
      <Wallet />
        <ThemeToggle>
            {ThemeToggler.theme === 'light' ? <DarkModeIcon onClick={ThemeToggler.changetheme}/> : <Brightness7Icon onClick={ThemeToggler.changetheme} /> }
         
        </ThemeToggle>
    </HeaderRightWrapper>
  )
}
const HeaderRightWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-right: 15px;
height: 50%;



`
const ThemeToggle = styled.div`
background-color: ${(props) => props.theme.bgDiv};
display: flex;
justify-content: center;
align-items: center;
height: 100%;
padding: 5px;
width: 45px;
border-radius: 12px;
cursor: pointer;
`
export default HeaderRight