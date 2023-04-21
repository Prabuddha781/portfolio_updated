import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './TechCard.module.css';

const TechCards = ({ title, titleSupport, techStack, GitHubLink, siteLink, mainContent, dark }) => {
    return (
        <section className={`d-flex flex-lg-row flex-column ${ classes.sectionSize } ${ dark ? classes.bgDark : classes.bgLight }`} >
            <div className={`d-flex flex-column ${ classes.textLeft }`}>
                <div className={`${ classes.title }`}>
                    { siteLink !== undefined ? <a href={`${ siteLink }`} className={`${ classes.linkSite }`}>{ title }</a> : <a style={{ textDecoration: 'none' }} disabled className={`${ classes.linkSite }`}>{ title }</a> }
                </div>
                <div className={`${ classes.titleSupport }`}>
                    { titleSupport }
                </div>
                <div className={`${ classes.techStack }`}>
                    Tech Stacks:&nbsp;&nbsp;{ Object.keys(techStack).map((eachStack, i) => <div key={ i } className="me-3 d-flex flex-row align-items-center"><span>{ eachStack }</span><img src={ techStack[eachStack] } className={ `${classes.logoTechStack} ms-1` } /></div>) }
                </div>
                <div className={`${ classes.GitBtn } mt-3`}>
                    <button className={`${ classes.button3 }`} onClick={ () => window.location.href = GitHubLink }>
                        GitHub repo
                    </button>
                </div>
            </div>
            <div className={`${ classes.carousel } ms-auto me-auto mt-auto mb-auto`}>
                { mainContent }
            </div>
        </section>
    )
}

export default TechCards;