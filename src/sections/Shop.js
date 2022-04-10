import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import img4 from '../assets/Images/4.jpg';
import img5 from '../assets/Images/5.jpg';
import img6 from '../assets/Images/6.jpg';
import img7 from '../assets/Images/7.jpg';
import img8 from '../assets/Images/8.jpg';
import img9 from '../assets/Images/9.jpg';

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  font-family: 'Very Berry';
  color: ${(props) => props.theme.text};
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 10;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  min-height: 100vh;
  z-index: 5;

  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }

  span {
    font-family: 'Beth Ellen', cursive;
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 64em) {
    p {
      font-size: ${(props) => props.theme.fontmd};
    }
    span {
      font-size: ${(props) => props.theme.fontlg};
    }
  }
  @media (max-width: 48em) {
    width: 50%;
    p {
      font-size: ${(props) => props.theme.fontsm};
    }
    span {
      font-size: ${(props) => props.theme.fontmd};
    }
  }
  @media (max-width: 30em) {
    p {
      font-size: ${(props) => props.theme.fontxs};
    }
    span {
      font-size: ${(props) => props.theme.fontsm};
    }
  }
`;

const Right = styled.div`
  position: absolute;
  left: 35%;
  padding-left: 30%;
  min-height: 100vh;

  background-color: ${(props) => props.theme.grey};
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h1 {
    width: 5rem;
    margin: 0 2rem;
  }
`;

const Item = styled(motion.div)`
  width: 20rem;
  margin-right: 6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }

  h1 {
    display: inline-block;
    width: fit-content;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }

  @media (max-width: 48em) {
    width: 15rem;
  }
`;

const Product = ({ img, title = '' }) => {
  return (
    <Item
      initial={{ filter: 'grayscale(100%)' }}
      whileInView={{ filter: 'grayscale(0%)' }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 'all' }}
    >
      <img src={img} alt={title} />
      <h1>{title}</h1>
    </Item>
  );
};

const Shop = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const horizontalRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = horizontalRef.current;
    let pinWrapWidth = scrollingElement.offsetWidth;
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top top',
          end: pinWrapWidth,
          scroller: '.App',
          scrub: true,
          pin: true,
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: 'none',
      });

      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: 'top top',
          end: pinWrapWidth,
          scroller: '.App',
          scrub: true,
        },
        x: -pinWrapWidth,
        ease: 'none',
      });

      ScrollTrigger.refresh();
    }, 1000);
    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="shop">
      <Title data-scroll data-scroll-speed="-1">
        Новая коллекция
      </Title>
      <Left>
        <p>
          <br />
          <br />
          Лёгкое шифоновое платье в цветочек, длина макси. Такая вещь как никто
          другой подчеркнёт Вашу женственность и элегантность. Воланая сборка
          вокруг плеча делает модель романтичной, cвободный крой подарит
          комфорт.
          <br />
          <br />
          Идеально подойдёт для семейного отдыха, прогулке в парке, свидания.
          Ткань не мнётся и быстро сохнет, поэтому взяв его с собой в
          путешествие Вы не будете переживать ни за какие неудобства.
          <br />
          <br />
          <span>fEmily dress</span> - твоё платье уМИЛИтельно, дорогая!
        </p>
      </Left>
      <Right ref={horizontalRef}>
        <Product img={img4} />
        <Product img={img5} />
        <Product img={img6} />
        <Product img={img7} />
        <Product img={img8} />
        <Product img={img9} />
      </Right>
    </Section>
  );
};

export default Shop;
