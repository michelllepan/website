import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import GitHub from "../assets/svg/github.svg"
import LinkedIn from "../assets/svg/linkedin.svg"
import Devpost from "../assets/svg/devpost.svg"
import Behance from "../assets/svg/behance.svg"
import Resume from "../assets/svg/resume.svg"
import resumePDF from "../assets/michelle_pan_resume.pdf"
import "./layout-2.css"

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;
`

const ColContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-self: flex-end;
`

const RowContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    ${'' /* padding-bottom: 2rem; */}
`

const IconWrapper = styled.a`
    margin: 0.8rem;
    opacity: 0.16;
    &:hover {
        opacity: 0.3;
    }
`

const Footer = () => (
    <FooterContainer>
        <RowContainer>
            <IconWrapper href="https://github.com/michelllepan" target="_blank"><GitHub/></IconWrapper>
            <IconWrapper href="https://linkedin.com/in/michelllepan" target="_blank"><LinkedIn/></IconWrapper>
            <IconWrapper href="https://devpost.com/michelllepan" target="_blank"><Devpost/></IconWrapper>
            <IconWrapper href="https://www.behance.net/michelllepan" target="_blank"><Behance/></IconWrapper>
            <IconWrapper href={resumePDF} target="_blank"><Resume/></IconWrapper>       
        </RowContainer>
        <p>michellepan at berkeley dot edu</p>
    </FooterContainer>
)
  
export default Footer
  