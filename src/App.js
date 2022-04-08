import GlobalStyles from './styles/GlobalStyles';
import GlobalFonts from './assets/fonts/fonts';

import { ThemeProvider } from 'styled-components';
import { dark } from './styles/Themes';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { useRef } from 'react';
import { AnimatePresence } from 'framer-motion';

import 'locomotive-scroll/dist/locomotive-scroll.css';
import Home from './sections/Home';
import About from './sections/About';
import Shop from './sections/Shop';
// import Brand from './sections/Brand';
import ScrollTriggerProxy from './components/ScrollTriggerProxy';

function App() {
  const containerRef = useRef(null);

  return (
    <>
      <GlobalStyles />
      <GlobalFonts />

      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <ScrollTriggerProxy />
          <AnimatePresence>
            <main className="App" data-scroll-container ref={containerRef}>
              <Home />
              <About />
              <Shop />
              {/* <Brand /> */}
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
