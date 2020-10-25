import React from "react"
import styled from "styled-components"

const RoundedButton = (props) => {
  const handleClick = () => props.onClick()

  return <StyledButton onClick={handleClick}>{props.buttonText}</StyledButton>
}

const StyledButton = styled.button`
  min-width: 30px;
  border-radius: 30px;
  padding: 20px 45px;
  font-size: 24px;
  color: ${(props) => props.theme.color.primary};
  background-color: white;
`

export default RoundedButton
