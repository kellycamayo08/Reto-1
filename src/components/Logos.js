import React, { Component } from 'react'
import styled from 'styled-components'
import logo1 from '../images/HAREE.svg'
import logo2 from '../images/JOBQO.svg'
import logo3 from '../images/logo_perman.svg'
import logo4 from '../images/logo_jobona.svg'
import logo5 from '../images/logo_workctrl.svg'

export const DivLogos = styled.div`
    display: flex;
    justify-content: center;
    padding: 30px;
    padding-top: 50px ;
    @media (max-width: 480px) {
   
      display: flex;
      flex-direction: column ;
      justify-content: center;
      align-items: center;
      
}
`
export const Parrafo = styled.p`
  font-weight: 400;
font-size: 16px;
line-height: 140%;
color: #666666;
margin-right: 30px;
width: 160px;
height:44px;


@media (max-width: 480px) {
   
 margin-left: 50px;
 
   
}
`
export const IMG1 = styled.img`
    margin: 20px 30px;
  /* Cambiar el color a una imagen */
  :hover{
    filter: opacity(0.4) drop-shadow(0 0 0 grey);
  }
`

export default class Logos extends Component {
  render() {
    return (
      <DivLogos>
          <Parrafo>Trusted by the world's leading companies</Parrafo>
        <IMG1 src={logo1}></IMG1>
        <IMG1 src={logo2}></IMG1>
        <IMG1 src={logo3}></IMG1>
        <IMG1 src={logo4}></IMG1>
        <IMG1 src={logo5}></IMG1>
       
      </DivLogos>
    )
  }
}
