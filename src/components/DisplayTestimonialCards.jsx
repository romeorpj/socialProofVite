/* eslint-disable no-useless-escape */


const DisplayTestimonialCards = ({usersList}) => {
	const asciiOpenQuote = "\u201C"
	const asciiCloseQuote = "\u201D"
	return (
		usersList.map((user) => {
			const {name,imgSrc,status,testimonial} = user

			return (
				<div key={name} className="bottom-section_card-container">
					<div className="user-section">
						<img src={imgSrc} alt={name} />
						<div className="name-and-status">
							<p>{name}</p>
							<p>{status}</p>
						</div>
					</div>
					<p className="testimonial-section">{`${asciiOpenQuote} ${testimonial} ${asciiCloseQuote}`}</p>
				</div>
			)
		}
		)
	)
}

export default DisplayTestimonialCards
DisplayTestimonialCards.displayName = "DisplayTestimonialCards"