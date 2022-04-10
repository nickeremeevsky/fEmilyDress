import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Logo from '../assets/Svgs/fEmilyWhite.svg';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 3rem auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  position: relative;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 8vw;
    height: auto;
  }

  h3 {
    font-size: ${(props) => props.theme.fontxl};
    font-family: 'Beth Ellen', cursive;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const FooterCOmponent = styled(motion.footer)`
  width: 80vw;

  @media (max-width: 48em) {
    width: 90vw;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem;
    margin-top: 4rem;
    padding: 0 1rem;
    border-top: 1px solid ${(props) => props.theme.text};
    border-bottom: 1px solid ${(props) => props.theme.text};

    @media (max-width: 48em) {
      justify-content: center;
    }
  }

  li {
    padding: 2rem;
    font-size: ${(props) => props.theme.fontmd};
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 48em) {
      padding: 1rem;
      font-size: ${(props) => props.theme.fontsm};
    }
  }
`;

const Bottom = styled.div`
  padding: 0.5rem 0;
  margin: 0 4rem;
  font-size: ${(props) => props.theme.fontmd};

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: underline;
  }

  @media (max-width: 64em) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin: 0;
    span {
      transform: none !important;
    }
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontsm};
  }
`;

const Footer = () => {
  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let elem = document.querySelector(id);

    scroll.scrollTo(elem, {
      offset: '-100',
      duration: '2000',
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <Section>
      <LogoContainer>
        <img data-scroll data-scroll-speed="2" src={Logo} alt="fEmily dress" />
        <h3 data-scroll data-scroll-speed="-2">
          fEmily dress
        </h3>
      </LogoContainer>
      <FooterCOmponent
        initial={{
          y: '-400px',
        }}
        whileInView={{
          y: 0,
        }}
        viewport={{ once: false }}
        transition={{
          duration: 1.5,
        }}
      >
        <ul>
          <li onClick={() => handleScroll('#home')}>Главная</li>
          <li onClick={() => handleScroll('.about')}>О нас</li>
          <li onClick={() => handleScroll('#shop')}>Магазин</li>
          <li onClick={() => handleScroll('#new-arrival')}>
            Новое поступление
          </li>
          <li>
            <a
              href="https://instagram.com/femily.dress"
              target="_blank"
              rel="noreferrer"
            >
              Блог
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/femily.dress"
              target="_blank"
              rel="noreferrer"
            >
              Отзывы
            </a>
          </li>
        </ul>
        <Bottom>
          <span
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
          >
            &copy; {new Date().getFullYear()}. Все права защищены.
          </span>
          <span
            data-scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal"
          >
            Сделано с &hearts; от &nbsp;
            <a
              href="https://nickeremeevsky.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              nickeremeevsky
            </a>
          </span>
        </Bottom>
      </FooterCOmponent>
    </Section>
  );
};

export default Footer;
