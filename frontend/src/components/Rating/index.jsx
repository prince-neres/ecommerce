const Rating = ({value,text,color}) => {
	return (
		<div className="rating">
		<span>{text && text}</span>
		</div>
	)
}

export default Rating;
