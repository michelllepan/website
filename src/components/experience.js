import React from "react"
import styled from "styled-components"

import "./layout-2.css"

const ExpContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
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

const HighlightTop = styled.span`
    ${'' /* background: linear-gradient(180deg, #fcb19f 58%, #FFFFFF 58%); */}
    background: linear-gradient(180deg, #FFFFFF 51%, #FFD996 51%);
    padding: 0 0.4rem;
    margin-left: -0.4rem;
`

const HighlightBot = styled.span`
    ${'' /* background: linear-gradient(180deg, #fcb19f 58%, #FFFFFF 58%); */}
    background: linear-gradient(180deg, #FFD996 58%, #FFFFFF 58%);
    padding: 0 0.4rem;
    margin-left: -0.4rem;
`

const Experience = () => (
    <ExpContainer>
        <ColContainer>
            <h1><HighlightTop>here's what I've</HighlightTop><br/>
            <HighlightBot>been up to:</HighlightBot></h1>
        </ColContainer>
    </ExpContainer>
)
  
export default Experience
  