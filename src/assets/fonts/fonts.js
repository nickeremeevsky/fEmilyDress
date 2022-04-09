import { createGlobalStyle } from 'styled-components';
import VeryBerryWoff from './VeryBerry.woff';
import VeryBerryWoff2 from './VeryBerry.woff2';
import VeryBerryTtf from './VeryBerry.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Very Berry';
        src: local('Very Berry'), local('VeryBerry'),
        url(${VeryBerryWoff}) format('woff');
        url(${VeryBerryWoff2}) format('woff2'),
        url(${VeryBerryTtf}) format('ttf');

        font-weight: 400;
        font-style: normal;
    }
`;
