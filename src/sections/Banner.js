import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  @media (max-width: 48em) {
    width: 90vw;
  }
`;

const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 64em) {
    justify-content: center;
  }
`;

const BannerComponent = styled.h1`
  font-size: ${(props) => props.theme.fontxl};
  font-family: 'Lobster', cursive;
  color: ${(props) => props.theme.text};
  white-space: nowrap;
  word-spacing: 0.5rem;
  line-height: 1;
  text-transform: uppercase;

  span {
    display: block;
    background-color: ${(props) => props.theme.body};
    padding: 1rem 2rem;
  }

  strong {
    text-transform: none;
  }

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontlg};
  }
  @media (max-width: 64em) {
    margin: 0.5rem 0;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
    margin: 0.3rem 0;
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
  }
`;

const Banner = () => {
  return (
    <Section>
      <Container id="up">
        <BannerComponent>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="8"
            data-scroll-target="#up"
          >
            Платья от <strong>fEmily dress</strong> - вне времени,
          </span>
        </BannerComponent>
        <BannerComponent>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-6"
            data-scroll-target="#up"
          >
            эти наряды - выбор тех красавиц,
          </span>
        </BannerComponent>
        <BannerComponent>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="4"
            data-scroll-target="#up"
          >
            которые ценят классику и
          </span>
        </BannerComponent>
        <BannerComponent>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-2"
            data-scroll-target="#up"
          >
            не желают идти на поводу
          </span>
        </BannerComponent>
        <BannerComponent>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-4"
            data-scroll-target="#up"
          >
            у сомнительных трендов
          </span>
        </BannerComponent>
      </Container>
    </Section>
  );
};

export default Banner;
