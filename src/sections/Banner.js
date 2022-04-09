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
`;

const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
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
            Мы изменили современную моду,
          </span>
        </BannerComponent>
        <BannerComponent>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-6"
            data-scroll-target="#up"
          >
            используя нестандартные решения и
          </span>
        </BannerComponent>
        <BannerComponent>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#up"
          >
            творческий подход в создании наших коллекций
          </span>
        </BannerComponent>
        <BannerComponent>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-4"
            data-scroll-target="#up"
          >
            Платья от марки <strong>fEmily dress</strong> - вне времени,
          </span>
        </BannerComponent>
        <BannerComponent>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="4"
            data-scroll-target="#up"
          >
            эти наряды - выбор тех красавиц,
          </span>
        </BannerComponent>
        <BannerComponent>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-2"
            data-scroll-target="#up"
          >
            которые ценят классику и
          </span>
        </BannerComponent>
        <BannerComponent>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="2"
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
