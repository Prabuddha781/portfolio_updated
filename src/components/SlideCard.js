import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './SlideCard.module.css';

const SlideCard = ({ title, content }) => {

    return (
    <div className={`${ classes.container }`}>
        {/* The container needs to have a width of 40vw (large) and 80vw (small). +d-flex flex-column*/}
        <div className="p-2 h1">{ title }</div>
        <hr/>
        <div>{ content.slice(0, 220) } { content.length > 220 && "...." } </div>
        <div className="h6 fst-italic mt-3">Click on this card to read more stories like this.</div>
    </div>
    )
}

export default SlideCard;