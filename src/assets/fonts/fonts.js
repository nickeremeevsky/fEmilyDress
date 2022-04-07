import { createGlobalStyle } from 'styled-components';
import VeryBeryWoff from './VeryBerry.woff';
import VeryBeryWoff2 from './VeryBerry.woff2';
import VeryBeryTtf from './VeryBerry.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Very Bery';
        src: local('Very Bery'), local('VeryBery'),
        url(${VeryBeryWoff}) format('woff');
        url(${VeryBeryWoff2}) format('woff2'),
        url(${VeryBeryTtf}) format('ttf');

        font-weight: 400;
        font-style: normal;
    }
`;
