import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const BookmarkSVG = props => {
    const bookmarkXml = `<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Bookmark</title><path d='M400 480a16 16 0 01-10.63-4L256 357.41 122.63 476A16 16 0 0196 464V96a64.07 64.07 0 0164-64h192a64.07 64.07 0 0164 64v368a16 16 0 01-16 16z'/></svg>`;
    const bookmarkOutlineXml = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 48.065 48.065" style="enable-background:new 0 0 48.065 48.065;" xml:space="preserve">
<path d="M40.908,0H7.158c-0.553,0-1,0.448-1,1v46.065c0,0.401,0.239,0.763,0.608,0.92c0.369,0.157,0.797,0.078,1.085-0.2
   l16.182-15.582l16.182,15.582c0.189,0.183,0.439,0.28,0.693,0.28c0.132,0,0.266-0.026,0.392-0.08c0.369-0.157,0.608-0.52,0.608-0.92
   V1C41.908,0.448,41.46,0,40.908,0z M39.908,44.714L24.726,30.095c-0.193-0.187-0.443-0.28-0.693-0.28s-0.5,0.093-0.693,0.28
   L8.158,44.714V2h31.75V44.714z"/>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>`;
    const BookmarkSvg = () => <SvgXml xml={props.outlined ? bookmarkOutlineXml : bookmarkXml} height={props.size} width={props.size} color={props.color} />;
    return (
        <BookmarkSvg />
    );
}

BookmarkSVG.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
    outlined: PropTypes.bool,
}

export default BookmarkSVG;