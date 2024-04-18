import React from 'react';
import Flickity from 'react-flickity-component';
import './Carousel.scss';

const Carousel: React.FC<{}> = () => {
    const flickityOptions = {
        initialIndex: 2,
        draggable: false,
        lazyload: 3,
        resize: true,
        cellAlign: "left",
        contain: true,
        prevNextButtons: false,
        pageDots: false,
        freeScroll: true,
        reloadOnUpdate: true,
        imagesLoaded: true,
        adaptiveHeight: true,
        setGallerySize: false,
        autoPlay: 3000,
        wrapAround: true,
    };

    return (
        <Flickity
            className={'carousel'} // default ''
            elementType={'div'} // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate // default false
            static // default false
        >
            <div className='carousel-cell'>
                <img 
                    className='carousel-image' 
                    src='/images/pineapple.png' 
                    alt='notebook with laptop pic' 
                />  
            </div>
            <div className='carousel-cell'>
                <img 
                    className='carousel-image' 
                    src='/images/glasses.png' 
                    alt='webpack pic' 
                />
            </div>
            <div className='carousel-cell'>
                <img 
                    className='carousel-image' 
                    src='/images/code.png' 
                    alt='notebook with laptop pic' 
                />  
            </div>
        </Flickity>
    )
};

export default Carousel;

