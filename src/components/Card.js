import React, { Component } from 'react'
import styled from 'styled-components'
import img1 from '../images/img1.png'

export const DivCard = styled.div `
   background-color: white;
   border-radius: 8px;
   margin: 10px;
   width: 156px;
   height: 210px;
   text-align: center;
   padding: 20px;
   box-shadow: 3px 3px 3px 0px gray;
  
 
`
export const StyledImg = styled.img`
    margin-top: 25px;
  

`
export const StyledH3 = styled.h3`
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    color: #333333;
    margin-bottom: 5px;
    
`
export const StyledH4 = styled.h4`
    font-weight: 300;
font-size: 12px;
line-height: 100%;
margin: 0;
color: #333333;
`

export const Styledp = styled.p`

font-weight: 300;
font-size: 12px;
line-height: 16.8px;
color: #666666;
width: 134px;
height: 42px;
text-align: center;
margin: 14px auto;
`

export default class Card extends Component {
  render() {
    return (
      <DivCard>
          <StyledImg src={this.props.img}></StyledImg>
          <StyledH3>{this.props.titulo}</StyledH3>
          <StyledH4>{this.props.subtitulo}</StyledH4>
          <Styledp>{this.props.parrafo}</Styledp>
      </DivCard>
    )
  }
}
