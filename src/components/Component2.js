import React, { Component } from 'react'
import Card from './Card'
import styled from 'styled-components'
import img1 from '../images/img1.png'
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'
import img4 from '../images/img4.png'
import img5 from '../images/img5.png'
import img6 from '../images/img6.png'

import fnd from '../images/fondo.svg'

export const Divcard = styled.div`
   width: 48%;
  display: grid;
  grid-template-rows: 1fr 1fr;
padding: 50px;
  @media (max-width: 380px) {
    width: 70% !important;
    margin-left: 30px !important; 
}
  @media (max-width: 480px) {
    display: grid;
    grid-template-columns: 1fr;
    margin-left: 60px;
    width: 65% !important;
    
}

@media (max-width: 1024px) {
    width: 40%
}

@media (min-width: 1324px) {
    width: 51%
}

  
`
export const Divcard2 = styled.div`
 
  display: flex;
  
  @media (max-width: 480px) {
    width:50%;
    display: flex;
    flex-direction: column;
}
@media (min-width: 1324px) {
   margin-left: 50px;
}
 
`


export default class Component2 extends Component {
  render() {
    return (
      <Divcard style={{backgroundImage: `url(${fnd})`, backgroundSize: "cover"}}>
          <Divcard2 >
          <Card img={img1}
          titulo ="Felicity Belle Amis"
          subtitulo ="Work Joe"
          parrafo = "Leave it to us to change jobs for designers!"
          >
           
              
          </Card>
          <Card img={img2}
          titulo ="Thelma Nicks"
          subtitulo ="Career Tweak"
          parrafo = "We have a marketer position for you."
          >
          </Card>
          <Card img={img3} 
          titulo ="Arman Weight"
          subtitulo ="rjob"
          parrafo = "I specialize in helping engineers change jobs."
          >

          </Card>
          </Divcard2>
          <Divcard2>
          <Card img={img4} 
          titulo ="Arman Weight"
          subtitulo ="HIGHREACH"
          parrafo = "I can help you with the medical industry."
          >
          </Card>
          <Card img={img5} 
          titulo ="Earl Dunst"
          subtitulo ="housy"
          parrafo = "We have a number of CTO positions available."
          >

          </Card>
          <Card img={img6}  
          titulo ="Ludovic Dane"
          subtitulo ="SHIF GUYS"
          parrafo = "We specialize in construction related jobs."
          >
          </Card>
          </Divcard2>
          
      </Divcard>
    )
  }
}
