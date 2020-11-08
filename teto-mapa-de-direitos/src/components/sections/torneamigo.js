import React from "react"
import styled from "styled-components"
import { Section, Container } from "../global"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

const TorneAmigo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(
        sourceInstanceName: { eq: "product" }
        name: { eq: "voluntarios1-blue-overlay" }
      ) {
        childImageSharp {
          fluid(maxWidth: 650) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <StyledSection>
      <StyledContainer>
        <TitleWrapper>
          <SectionTitle>Torne-se Um Amigo Teto</SectionTitle>
          <UnderlineLine></UnderlineLine>
        </TitleWrapper>
        <SubtitleWrapper>
          <StyledSubtitle>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
          </StyledSubtitle>
        </SubtitleWrapper>
        <FlexCointainer>
          <div>
            <StyledForm
              method="post"
              action="https://getform.io/{your-unique-getform-endpoint}"
            >
              <div>
                <StyledInput type="email" name="email" />
                <StyledLabel>Email</StyledLabel>
              </div>
              <div>
                <StyledInput type="text" name="name" />
                <StyledLabel>Name</StyledLabel>
              </div>
              <div>
                <StyledInput type="text" name="message" />
              </div>

              <StyledButton>Submit</StyledButton>
            </StyledForm>
          </div>
          <div>
            <Img
              style={{
                position: "relative",
                top: "0px",
                width: "650px",
                height: "100%",
              }}
              fluid={data.file.childImageSharp.fluid}
            />
          </div>
        </FlexCointainer>
      </StyledContainer>
    </StyledSection>
  )
}

export default TorneAmigo

const StyledSection = styled(Section)`
  background-color: ${(props) => props.theme.color.background.light};
  clip-path: polygon(0 0, 100% 14%, 100% 100%, 0% 100%);
`

const StyledContainer = styled(Container)`
  padding: 120px 80px;
`
const SectionTitle = styled.h3`
  font-size: 64px;
  color: ${(props) => props.theme.color.primary};
  margin: 0 auto 40px;
  line-height: 1.2;
`

const TitleWrapper = styled.div`
  max-width: 500px;
`
const UnderlineLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${(props) => props.theme.color.primary};
`
const SubtitleWrapper = styled.div`
  max-width: 700px;
`

const StyledSubtitle = styled.p`
  font-size: 27px;
  line-height: 1;
  color: ${(props) => props.theme.color.black.regular};
`
const FlexCointainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5% 15% 5% 1%;
`
const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-gap: 16px;
`
const StyledLabel = styled.label`
  grid-column: 1 / 2;
`

const StyledInput = styled.input`
  grid-column: 2 / 3;
`
const StyledButton = styled.button`
  grid-column: 2 / 3;
`
