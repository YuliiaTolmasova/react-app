const Doctor = (props) => {
	// console.log(props.stars)
	return (
    <div className="doctor-section">
        <div className="doctor-section__container">
            <div className="doctor-section__image">
                <img className="image-doctor" src={props.image} alt={props.name}/>
            </div>
            <div className="doctor-section__info-block doctor">
                <div className="doctor__name">
                    {props.name}
                </div>
                <div className="doctor__type">
                    {props.type}
                </div>
                <div className="doctor__category">
                    {props.category}
                </div>
            </div>
            <div className="doctor-section__price price-block">
                <span className="price-block__text">
                    Ціна
                </span>
                <div className="price-block__price">
                    {props.price} грн
                </div>
            </div>
            <div className="doctor-section__button">
                    <button>Залишити заявку</button>
            </div>
        </div>
    </div>


)}
export default Doctor;