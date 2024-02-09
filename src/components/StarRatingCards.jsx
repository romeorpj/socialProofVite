import iconStar from "../assets/icon-star.svg"

const StarRatingCards = () => {
	const numIcons = 5 // number of stars displayed
	const numRatings = 3 // number of rating boxes to be displayed

	// Function to render icons inside a div using .map()
	const renderIcons = () => {
		return [...Array(numIcons)].map((_,index) => (
				<img key={index} src={iconStar} alt="star rating" />
		))
	}

	// Function to render out the correct amount of rating cards
	// used undefined because...why not lol
	const renderRatings = () => {
		return (
			[...Array(numRatings)].map((_,index) => (
				<div key={index} className={`ratings-${index + 1} ratings-box`}>
					<div className="star-container">{renderIcons()}</div>
					<p>Rated 5 Stars in Review</p>
				</div>
			))
		)
	}

	return (renderRatings())
}

export default StarRatingCards
StarRatingCards.displayName = "StarRatingCards"