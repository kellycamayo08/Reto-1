import React, { Component } from 'react'
import styled from 'styled-components'
import Busqueda from '../components/Busqueda'
import CardLast from '../components/CardLast'

import Logos from '../components/Logos'

export const DivSearch = styled.div`
    background-color: #FAFAFA;

    @media (max-width: 380px) {
      width: 100% !important;
}
@media (max-width: 480px) {
      width: 100% !important;
}

@media (min-width: 1024px) {
    width: 100%
}
`
export const DivCard = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
}
`

export default class Search extends Component {
  render() {
    return (
      <DivSearch>
          <Logos/>
          <Busqueda/>
          <DivCard>
          <CardLast
          parrafo="Leader of iOS engineers for mobility services"
          p1="California"
          p2="Engineer"
          >
          </CardLast>

          <CardLast
          parrafo="Candidate for Sales Manager of HR-related services"
          p1="Oregon"
          p2="Sales Manager">
          </CardLast>

          <CardLast
          parrafo="Head of marketing for electronic payment services"
          p1="Florida"
          p2="Marketer">
          </CardLast>

          <CardLast
          parrafo="CFO of a semiconductor manufacturing company"
          p1="Texas"
          p2="CFO">
          </CardLast>
          </DivCard>
      </DivSearch>
    )
  }
}
