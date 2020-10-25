import React from "react"
import styled from "styled-components"

const Title = (props) => <StyledH1>{props.titleText}</StyledH1>

const StyledH1 = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 64px;
`

export default Title
