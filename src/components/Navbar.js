import React, { Component } from 'react'
import { StyleDiv, StyleH2, StyleNav, ButtonWhite, ButtonGreen, MobilIcon } from '../styles/Style'
import image from '../images/icono.png'
import styled from 'styled-components'
import { FaBars } from "react-icons/fa";
import { FaBeer } from 'react-icons/fa';
import { useState } from 'react'

export const StyleImg = styled.img`
    width: 26px;
    height: 24px;
  margin-right: 10px;
`
export const StyleH1 = styled.h1`


font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 150%;
color: #666666;

`

// FaBars

export default class Navbar extends Component {

  render() {


    return (
      <StyleNav>
        <StyleNav>
          <StyleImg src={image}></StyleImg>
          <StyleH1>Aerial</StyleH1>
        </StyleNav>

        
        <MobilIcon>
        <StyleDiv>
          <StyleH2>Job Search</StyleH2>
          <StyleH2>About</StyleH2>
          <StyleH2>Pricing</StyleH2>
          <StyleH2>Contact</StyleH2>
          <ButtonWhite>Log in</ButtonWhite>
          <ButtonGreen>Try it Free</ButtonGreen>
        </StyleDiv>
        </MobilIcon>
        


      </StyleNav>
    )
  }
}
