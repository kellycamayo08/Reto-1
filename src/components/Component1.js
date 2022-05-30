import React, { Component } from 'react'
import styled from 'styled-components'
import { ButtonGreen, ButtonWhite } from '../styles/Style'


export const DivComp = styled.div`

  padding: 80px 60px;
  width: 35%;
  @media (max-width: 480px) {
   padding-left: 40px;
    width: 270px;
}
  
`
export const StyledH1 = styled.h1`
  font-weight: 700;
font-size: 56px;
line-height: 110%;
text-align: justify;
color: #333333;
  width: 465px;
  height: 186px;
  margin-bottom: 0;
  @media (max-width: 480px) {
   width: 300px;
   font-size: 36px;
   height: auto;
}
`
export const Styledp = styled.p`
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 26px;
text-align: justify;
width:464px;
height: 72px;
color: #333333;
margin-bottom:40px;
@media (max-width: 480px) {
   width: 300px;
   height: auto;
}
`
export const DivButton = styled.div`
  display: flex;
@media (max-width:480){
  display: flex;
  flex-direction: row;

}
 

  `

export default class extends Component {
  render() {
    return (
      <DivComp>
        <StyledH1> We support your challenge in new areas.</StyledH1>
        <Styledp>Our highly qualified headhunters, who have passed a rigorous screening process, will introduce you to your new career opportunity.</Styledp>
        <DivButton>
          <ButtonGreen>
            Try It Free
          </ButtonGreen>
          <ButtonWhite>
            Explore
          </ButtonWhite>
        </DivButton>
      </DivComp>

    )
  }
}
