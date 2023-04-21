import Carousel from 'react-bootstrap/Carousel'
import classes from './Slides.module.css';

import SlideCard from './SlideCard';

const Slides = () => {

    const handleLinkClick = () => {
        window.location.href = 'https://www.lovestories.rocks/'; 
    }

    return (
        <Carousel onClick={ handleLinkClick } className={`${ classes.cursorOver }` } controls={ false } indicators={ false } pause={ 'hover' }>
            <Carousel.Item>
                <SlideCard title={"Calling Anyway"} content={"When my friends ask me over FaceTime how I’m doing, I tell them that I spend a lot of time crying. It’s easier than admitting that I can’t seem to get out of bed before 2 p.m. Or wash the dishes that are stinking up my sink. Or get done any work that I normally love doing. But it’s more honest than “good.” Sometimes they laugh and say “same,” and sometimes they look down and don’t know what to say. The rest of the conversation limps along. I apologize for being a stranger. They call me every week anyway. — Jemma Dooreleyers, NYT, ModernLove"} />
            </ Carousel.Item>
            <Carousel.Item>
                <SlideCard title={"“Hey” Is Not “Heyy”"} content={"“Heyy,” his message read. My heart fluttered. One “y” may have left me upset, but the second “y” — that was promising. Such a simple yet ambiguous greeting. Did he want to hang out? Was he going to confess his love? Oh! He was typing. A double text! It was my lucky day. I broke a sweat waiting for his response. How should I respond? “Hi!”? “I am in love with you”? My message had to show the same amount of interest as his. He responded! “Sorry didn’t mean the extra ‘y.’” Oh." } />
            </ Carousel.Item>
            <Carousel.Item>
                <SlideCard title={"A Sad Love Life"} content={"It was a new school year.  I walked in to find this beautiful blonde, blue-eyed girl sitting alone. She seemed to be quiet and smart. I was instantly in love. I walked toward her, but the class bully, Aiden Best, shoved me out of the way and walked towards her saying, “Can you believe that nerd?” She smiled at him and cackled, which made me realize she wasn't as perfect as I had thought."} />
            </ Carousel.Item>
        </Carousel>
    )
}

export default Slides;