import './Banner.css';

const Banner = (props) => {
    const name = props.text;
    return ( <div className="Banner">
        <header className="Banner-header">{ name }</header>
    </div> 
    );
}
 
export default Banner;