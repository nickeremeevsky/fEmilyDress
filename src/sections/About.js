import React from 'react';
import styled from 'styled-components';

import img1 from '../assets/Images/1.jpg';
import img2 from '../assets/Images/2.jpg';
import img3 from '../assets/Images/3.jpg';

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 80vw;

  display: flex;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: 'Very Berry';

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;
`;

const Left = styled.div`
  width: 50%;
  font-size: ${(props) => props.theme.fontmd};
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 20%;
`;

const Right = styled.div`
  width: 50%;
  position: relative;

  img {
    width: 100%;
    height: auto;
  }

  .small-img-1 {
    position: absolute;
    width: 40%;
    right: 85%;
    bottom: 10%;
  }
  .small-img-2 {
    position: absolute;
    width: 40%;
    left: 80%;
    bottom: 30%;
  }
`;

const About = () => {
  return (
    <Section id="fixed-target">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        О нас
      </Title>
      <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
        «fEmily dress» - это уникальная российская марка женственной одежды,
        созданная для женщин и девушек. Женственная, целомудренная, благородная,
        добрая и нежная, наша героиня – главный источник вдохновения дизайнеров
        «fEmily dress»!
        <br />
        <br />
        Как производитель христианской одежды, мы берем на себя большую
        ответственность перед нашими покупателями. Поэтому особенное внимание
        «fEmily dress» уделяет качеству исполнения. Над созданием длинных
        платьев и сарафанов работает группа опытных профессионалов, влюбленных в
        свое дело.
        <br />
        <br />
        Нам очень важно, чтобы женщины - христианки, среди которых много мам, в
        том числе многодетных, могли порадовать себя новым платьем!
      </Left>
      <Right>
        <img src={img1} alt="img1" />
        <img
          data-scroll
          data-scroll-speed="5"
          src={img2}
          className="small-img-1"
          alt="img2"
        />
        <img
          data-scroll
          data-scroll-speed="-2"
          src={img3}
          className="small-img-2"
          alt="img3"
        />
      </Right>
    </Section>
  );
};

export default About;
