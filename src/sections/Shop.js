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
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: 'Very Bery';
  color: ${(props) => props.theme.text};
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 10;
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
    margin: 0 1rem;
  }
`;

const Item = styled(motion.div)`
  display: inline-block;
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
          merkers: true,
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
          merkers: true,
        },
        x: -pinWrapWidth,
        ease: 'none',
      });

      ScrollTrigger.refresh();
    }, 1000);
    return () => {};
  }, []);

  return (
    <Section ref={ref}>
      <Title data-scroll data-scroll-speed="-1">
        Новая коллекция
      </Title>
      <Left>
        <p>
          Новая коллекцияНовая коллекцияНовая коллекцияНовая коллекцияНовая
          коллекцияНовая коллекцияНовая коллекцияНовая коллекцияНовая
          <br />
          <br />
          Новая коллекцияНовая коллекцияНовая коллекцияНовая коллекцияНовая
          коллекцияНовая коллекцияНовая коллекцияНовая коллекцияНовая
        </p>
      </Left>
      <Right ref={horizontalRef}>
        <Product img={img4} title="Теплые трикотажные платья" />
        <Product img={img5} title="Повседневные платья" />
        <Product img={img6} title="Коктейльные платья" />
        <Product img={img7} title="Вечерние платья" />
        <Product img={img8} title="Джинсовые платья" />
        <Product img={img9} title="Сарафаны и летние платья" />
      </Right>
    </Section>
  );
};

export default Shop;
