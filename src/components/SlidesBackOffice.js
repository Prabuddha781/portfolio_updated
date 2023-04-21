import Carousel from 'react-bootstrap/Carousel'
import classes from './SlidesBackOffice.module.css';

import SlideCard from './SlideCard';
import BackOfficeSiteDemo from '../icons/BackOffice.png';
import BackOfficeTraining from '../icons/BackOfficeTraining.png';

const Slides = () => {

    return (
        <Carousel controls={ false } indicators={ false } className="d-flex h-100">
            <Carousel.Item>
                <div className="d-flex align-items-center h-100">
                    <img src={ BackOfficeTraining } className={`${ classes.carouselPic }`}/>
                </div>
            </ Carousel.Item>
            <Carousel.Item>
                <div className="d-flex align-items-center">
                    <img src={ BackOfficeSiteDemo } className={`${ classes.carouselPic }`}/>
                </div>
            </ Carousel.Item>
        </Carousel>
    )
}

export default Slides;