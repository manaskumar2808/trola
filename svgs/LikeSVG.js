import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const LikeSVG = props => {
    const likeXml = `<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Heart</title><path d='M256 448l-9-6c-42.78-28.57-96.91-60.86-137-108.32-42.25-50-62.52-101.35-62-157C48.63 114.54 98.46 64 159.08 64c48.11 0 80.1 28 96.92 48.21C272.82 92 304.81 64 352.92 64c60.62 0 110.45 50.54 111.08 112.65.56 55.68-19.71 107-62 157-40.09 47.49-94.22 79.78-137 108.35z'/></svg>`;
    const likeOutlineXml = `<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Heart</title><path d='M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/></svg>`;
    const LikeSvg = () => <SvgXml xml={ props.outlined ? likeOutlineXml : likeXml} height={props.size} width={props.size} color={props.color} />;
    return (
        <LikeSvg />
    );
}

LikeSVG.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
    outlined: PropTypes.bool,
}

export default LikeSVG;