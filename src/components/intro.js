import React from "react"
import Image from "../components/image"
import styled from "styled-components"

import "./layout-2.css"

const IntroContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 70vh;
`

const RowContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    padding-bottom: 2rem;
`

const ColContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-self: flex-end;
`

const ImgWrapper = styled.div`
    height: inherit;
    flex: 0.75;
    ${'' /* margin-bottom: 3rem; */}
`

const Highlight = styled.span`
    background: linear-gradient(180deg, #FFFFFF 51%, #FDC1B3 51%);
    ${'' /* background: linear-gradient(180deg, #FFFFFF 51%, rgba(245, 129, 103, 0.5) 51%); */}
    padding: 0 0.4rem;
    margin-left: -0.4rem;
    ${'' /* color: #f58167; */}
`

const Space = styled.div`
    width: 2rem;
`

const Intro = () => (
    <IntroContainer>
        <RowContainer>
            <ImgWrapper>
                <Image />
            </ImgWrapper>
            <Space />
            <ColContainer>
                <h1>hi! I'm <br/>
                <Highlight>Michelle.</Highlight></h1>
                <p><b>I'm a student interested in the intersection of technology and society.</b></p>
                <p>Currently studying Computer Science & Statistics at UC Berkeley, teaching machines at Launchpad, and learning how to juggle.</p>
            </ColContainer>
            
        </RowContainer>
    </IntroContainer>
    
  )
  
  export default Intro
  