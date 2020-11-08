import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import { Section, Container } from "../global"
import RoundedButtonBlue from "../common/buttons/RoundedButtonBlue"

const Features = () => {
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
    <Section>
      <StyledContainer>
        <TitleWrapper>
          <SectionTitle>Quem Somos</SectionTitle>
          <UnderlineLine></UnderlineLine>
        </TitleWrapper>
        <FlexCointainer>
          <ColumnText>
            <StyledSubtitle> Text here </StyledSubtitle>
            <StyledParagraph>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur.
            </StyledParagraph>
            <RoundedButtonBlue buttonText="click me" />
          </ColumnText>
          <StyledImg fluid={data.file.childImageSharp.fluid} />
        </FlexCointainer>
        <FlexCointainer>
          <StyledImg fluid={data.file.childImageSharp.fluid} />
          <ColumnText>
            <StyledSubtitle> Text here </StyledSubtitle>
            <StyledParagraph>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur.
            </StyledParagraph>
            <RoundedButtonBlue buttonText="click me" />
          </ColumnText>
        </FlexCointainer>
      </StyledContainer>
    </Section>
  )
}

export default Features

const StyledContainer = styled(Container)`
  padding: 0 80px;
`
const SectionTitle = styled.h3`
  font-size: 64px;
  color: ${(props) => props.theme.color.primary};
  margin: 0 auto 40px;
`

const TitleWrapper = styled.div`
  max-width: 500px;
`

const UnderlineLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: blue;
`

const FlexCointainer = styled.div`
  display: flex;
  flex: 1 1 150px;
  justify-content: space-between;
  padding: 5% 15% 5% 1%;
  @media (max-width: ${(props) => props.theme.screen.lg}) {
    display: block;
  }
`
const StyledSubtitle = styled.h3`
  color: ${(props) => props.theme.color.black.regular};
`

const StyledParagraph = styled.p`
  font-size: 21px;
  line-height: 30px;
  color: ${(props) => props.theme.color.black.regular};
`

const ColumnText = styled.div`
  display: flex;
  max-width: 700px;
  min-width: 400px;
  flex-direction: column;
  > button {
    max-width: 200px;
  }
  @media (max-width: ${(props) => props.theme.screen.lg}) {
    margin-bottom: 20px;
  }
`
const StyledImg = styled(Img)`
  position: relative;
  top: 0px;
  width: 650px;
  height: 100%";
`
