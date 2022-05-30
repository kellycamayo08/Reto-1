import styled from "styled-components";


export const StyleNav = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
   
    align-items: center;
    
   
    @media (max-width: 480px) {

   display: flex;
   justify-content: center;
   padding: 0 !important;
}
    @media (max-width:1280px){
        padding-left: 40px;
    }
    @media (min-width:1480px){
        padding-left: 40px;
    }



`

export const StyleDiv = styled.div`
margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left:250px;
    @media (max-width:760px) {
     
        justify-content: center;
      background-color: aliceblue;
       
    }

    @media (max-width:1280px){
        padding-left:450px;
    }
    @media (min-width:1480px){
        padding-left: 570px;
    }
`
export const StyleH2 = styled.h2`
    margin: 0 20px;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
   
`

export const ButtonGreen = styled.button`
    color: white;
    border: none ;
    width: 96px;
    height: 34px;
    background: #24B26B;
    border-radius: 4px;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    :hover{
        background-color: white;
        color: #333333;
        border: 1px solid #CCCCCC;
    }
    
`

export const ButtonWhite = styled.button`
   
   background: #FFFFFF;
   color: #333333;
    border: 1px solid #CCCCCC;
    border-radius: 4px;
    width: 96px;
    height: 34px;
    background: white;
    border-radius: 4px;
    font-weight: 400;
    font-size: 14px;
    font-weight: 400;
    margin-right: 16px;
    margin-left: 30px;
    :hover{
        background-color: #24B26B;
        color: white ;
    }
`
// RESPONSIVE NAVBAR

export const MobilIcon = styled.div`
    display: none;

    @media (min-width:460px) {
        display: flex;
        align-items: center;
        cursor: pointer;

        
    }

`