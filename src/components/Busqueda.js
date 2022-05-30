import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import styled from 'styled-components'

export const DivSearch = styled.div`
  text-align: center;
@media (max-width: 480px) {
  padding: 30px;
     
  }
    
 
`
export const H1Search = styled.h1`
  text-align: center !important;
@media (max-width: 480px) {
   
  }
  font-weight: 400;
  font-size: 32px;
  line-height: 110%;
  text-align: justify;
  color: #333333;

`
export const SearchP = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 110%;
  color: #666666;
  margin-bottom: 20px;
`

export const InputSearch = styled.input`
  width:382px ;
  height: 40px;
  background: #FFFFFF;
  border: 1px solid #CCCCCC;
  border-radius: 4px;
  font-weight: 300;
  font-size: 16px;
  line-height: 110%;



color: #999999;

@media (max-width: 480px) {
  width: 228px ;
  height:38px ;
  }

`

export const ButtonSearch = styled.button`
height: 40px;
background: #333333;
border: none;
color: white;
border-radius: 4px;
padding: 9px 21px 9px 20px;
margin-left: 10px;

`
export const Div2 = styled.div`
  @media (max-width: 480px) {
    display: flex;
}

`

export default class Busqueda extends Component {
  render() {
    return (
      <DivSearch>
          <H1Search>Search for your area of interest</H1Search>
            <SearchP>Please enter your desired industry, job title, and skills</SearchP>
            <Div2>
            <FontAwesomeIcon icon="fa-thin fa-magnifying-glass" />
                <InputSearch placeholder=' engineer, Internet and Web Industry'></InputSearch>
                <ButtonSearch>search</ButtonSearch>
            </Div2>
      </DivSearch>
    )
  }
}
