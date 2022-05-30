import React, { Component } from 'react'
import styled from 'styled-components'
import img1 from '../images/location.svg'
import img2 from '../images/portafolio.svg'

export const DivCardLast = styled.div`
    background-color: white;
    border-radius: 8px;
    margin: 10px;
    width: 268px;
    height: 120px;
    padding: 10px;
    text-align:center;
    box-shadow: 0px 2px 4px 4px rgba(0, 0, 0, 0.04);
    margin-top: 50px;
    @media (max-width: 480px) {
    margin-left: 40px;
}

`
export const Parrafo = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    color: #333333;
    width: 224px;
    height: 44px;
    margin: 20px auto;

`
export const Div1 = styled.div`
    display: flex;
    justify-content: space-evenly;
    text-align: center;
`
export const Img = styled.img`
    width: 15px;
  
`
export const H5 = styled.h5`
    margin: 8px 10px;
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;
    color: #666666;
`


export default class CardLast extends Component {
  render() {
    return (
      <DivCardLast>
          <Parrafo>{this.props.parrafo}</Parrafo>
            <Div1>
                <Div1>
                    <Img src={img1}></Img>
                    <H5>{this.props.p1}</H5>
                </Div1>
                <Div1>
                    <Img src={img2}></Img>
                    <H5>{this.props.p2}</H5>
                </Div1>
            </Div1>
      </DivCardLast>
    )
  }
}
