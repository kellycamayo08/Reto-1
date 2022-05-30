import styled from "styled-components"
import Component1 from "../components/Component1"
import Component2 from "../components/Component2"
import Navbar from "../components/Navbar"


export const DivPrincipal = styled.div`

    display: flex;
    @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
}

`

export const Principal = () => {
    return (

        
        <DivPrincipal>
        <Component1/>
        <Component2/>
       </DivPrincipal>
    )

}