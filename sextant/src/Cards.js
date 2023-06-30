import './Cards.css';
const Cards = (props) => {
    const res = props.text;
    return ( 
        <div className = "Cards">
            <h1 className = "Cards-header">{ res }</h1>
        </div>
     );
}
 
export default Cards;