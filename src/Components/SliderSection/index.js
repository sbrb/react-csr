import React from 'react';
import './SliderSection.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import SamsungBuds from '../../Assets/prodcuts/s.webp';
import TvPoster from '../../Assets/prodcuts/tv.webp';
import Phone from '../../Assets/prodcuts/phone.webp';



const handleDragStart = (e) => e.preventDefault();
const items = [
    <div onDragStart={handleDragStart} role="presentation">
        <div className='wraper'>
            <div className='leftSec'>
                <span className='topHead'> HOT   deal </span>
                <h4>Sale 20% of </h4>
                <h3>Samsung galaxy buds</h3>
                <h5>Top quality earbuds & Accessories</h5>
                <button className='discoverBtn'>Discover now</button>
            </div>
            <div className='rightSec'>
                <img src={SamsungBuds} alt='' />
            </div>
        </div>
    </div>,
    <div onDragStart={handleDragStart} role="presentation">
        <div className='wraper'>
            <div className='leftSec'>
                <span className='topHead'> HOT   deal </span>
                <h4>Sale 40% of </h4>
                <h3>Thomson 9A Series 80 cm</h3>
                <h5>Top quality  LED Smart Android TV</h5>
                <button className='discoverBtn'>Discover now</button>
            </div>
            <div className='rightSec'>
                <img src={TvPoster} alt='' />
            </div>
        </div>
    </div>,
    <div onDragStart={handleDragStart} role="presentation">
        <div className='wraper'>
            <div className='leftSec'>
                <span className='topHead'> HOT   deal </span>
                <h4>Sale 10% of </h4>
                <h3>SAMSUNG Galaxy S22 Plus 5G</h3>
                <h5>(Phantom Black, 128 GB)  (8 GB RAM)</h5>
                <button className='discoverBtn'>Discover now</button>
            </div>
            <div className='rightSec'>
                <img src={Phone} alt='' />
            </div>
        </div>
    </div>
  ];
const SliderSectionComponents = ()=>{
    return (
        <>
        <div className='sliderMainWrap'>
            <AliceCarousel 
            autoPlay={true}
            autoPlayInterval={5000}
            infinite={true}
            mouseTracking 
            disableButtonsControls
             items={items} />
        </div>
        
        </>
    )
}

export default SliderSectionComponents;