import Header1 from './Header1';
import Themes from './themes';
import styled, {ThemeProvider, createGlobalStyle} from 'styled-components'
import  {useState, createContext}  from 'react';
import Createcampaign from './components/Createcampaign';
import Dashboard from './components/Dashboard';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
const App = createContext();
const Layout = ({children}) => {
  const [theme,setTheme] = useState('light');
  const changetheme =() =>{
    setTheme(theme=="light"?"dark":"light");
  }
   return (

    <App.Provider value={{changetheme, theme}}>
   <ThemeProvider theme={Themes[theme]}>
    <LayoutWrapper >
      <GlobalStyle />
    
     {children}

     <Router>
    
     <Header1 />
      <Routes>
         
        <Route path = '/dashboard' element={<Dashboard/>}></Route> 
        <Route path = '/createcampaign' element={<Createcampaign/>}></Route> 
       
      </Routes>
     
     </Router>
    
     

     </LayoutWrapper>
    </ThemeProvider>
   
    </App.Provider>
   
  )
}
const GlobalStyle=createGlobalStyle`
body{
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
`
const LayoutWrapper = styled.div`
    min-height: 100vh;
    background-color: ${(props)=> props.theme.bgcolor};
    background-image: ${(props)=> props.theme.bgImage};
    color: ${(props)=> props.theme.color};
`

export default Layout
export {App};