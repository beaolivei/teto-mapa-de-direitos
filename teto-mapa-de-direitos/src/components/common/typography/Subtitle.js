import React from "react"
import styled from "styled-components"

const SubTitle = (props) => <StyledH3>{props.subTitleText}</StyledH3>

const StyledH3 = styled.h3`
  font-family: "Roboto", sans-serif;
  font-size: 24px;
`

export default SubTitle
