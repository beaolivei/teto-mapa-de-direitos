import React from "react"
import styled from "styled-components"
import { Section, Container } from "../global"

const DataSection = () => (
  <Section>
    <StyledContainer>
      <TitleWrapper>
        <SectionTitle>Quem Somos</SectionTitle>
        <UnderlineLine></UnderlineLine>
      </TitleWrapper>
      <SubtitleWrapper>
        <StyledSubtitle>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam.
        </StyledSubtitle>
      </SubtitleWrapper>
      <a href="https://placeholder.com">
        <img src="https://via.placeholder.com/1600x1500" />
      </a>
    </StyledContainer>
  </Section>
)

export default DataSection

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

const SubtitleWrapper = styled.div`
  max-width: 700px;
`

const StyledSubtitle = styled.p`
  font-size: 27px;
  line-height: 1;
  color: ${(props) => props.theme.color.black.regular};
`
