import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import img10 from '../assets/Images/10.jpg';
import img11 from '../assets/Images/11.jpg';
import img12 from '../assets/Images/12.jpg';
import img13 from '../assets/Images/13.jpg';

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 90vh;

  box-shadow: 0 0 0 4vw ${(props) => props.theme.text};
  border: 3px solid ${(props) => props.theme.body};
  z-index: 11;

  @media (max-width: 70em) {
    width: 40vw;
    height: 80vh;
  }
  @media (max-width: 64em) {
    width: 50vw;
    box-shadow: 0 0 0 60vw ${(props) => props.theme.text};
  }
  @media (max-width: 48em) {
    width: 60vw;
  }
  @media (max-width: 30em) {
    width: 80vw;
    height: 60vh;
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  font-family: 'Very Berry';
  color: ${(props) => props.theme.body};
  text-shadow: 1px 1px 1px ${(props) => props.theme.text};

  position: absolute;
  top: 1rem;
  left: 0%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Text = styled.div`
  width: 20%;
  font-size: ${(props) => props.theme.fontmd};
  font-weight: 300;
  position: absolute;
  padding: 2rem;
  top: 0;
  right: 0;
  z-index: 11;

  @media (max-width: 48em) {
    display: none;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 25vw;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    top: 5%;
    width: 30vw;
  }
  @media (max-width: 48em) {
    top: 10%;
    width: 40vw;
  }
  @media (max-width: 30em) {
    top: 15%;
    width: 60vw;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 3rem 0;

  img {
    width: 100%;
    height: auto;
    z-index: 5;
  }
`;

const Product = ({ img, title = '' }) => {
  return (
    <Item>
      <img src={img} alt={title} />
      <h2>{title}</h2>
    </Item>
  );
};

const NewArrival = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const ScrollingRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = ScrollingRef.current;
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top top',
          end: 'bottom+=100% top-=100%',
          scroller: '.App',
          scrub: true,
          pin: true,
        },
        ease: 'none',
      });

      t1.fromTo(
        scrollingElement,
        {
          y: '0',
        },
        {
          y: '-100%',
          scrollTrigger: {
            trigger: scrollingElement,
            start: 'top top',
            end: 'bottom top',
            scroller: '.App',
            scrub: true,
          },
        }
      );

      ScrollTrigger.refresh();
    }, 1000);
    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="new-arrival">
      <Overlay />
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        Новое поступление
      </Title>
      <Container ref={ScrollingRef}>
        <Product img={img10} title="Блузки и рубашки" />
        <Product img={img11} title="Юбки" />
        <Product img={img12} title="Джемперы и кардиганы" />
        <Product img={img13} title="Аксессуары" />
      </Container>
      <Text data-scroll data-scroll-speed="-3">
        Мы разработали специальную линию платьев для беременных и кормящих. С
        наступлением осенне-зимнего сезона обязательной частью нашего
        ассортимента становятся теплые шерстяные платья на подкладке.
        <br />
        <br />
        В наших магазинах Вы можете найти одежду для любого случая: лаконичное
        офисное или роскошное вечернее платье, базовое джинсовое платье или
        эксклюзивную модель с оригинальной декоративной отделкой.
        <br />
        <br />
        Мы ценим Ваше время, Красавицы! Поэтому, если Вы попали на наш сайт, или
        посетили один из наших магазинов, то обязательно найдете свое идеальное
        платье!
      </Text>
    </Section>
  );
};

export default NewArrival;
