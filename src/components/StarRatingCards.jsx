import iconStar from "../assets/icon-star.svg"

const StarRatingCards = () => {
	const numIcons = 5 // number of stars displayed
	
	const ratingText = [
		"Rated 5 Stars in Reviews",
		"Rated 5 Stars in Report Guru",
		"Rated 5 Stars in BestTech"
	]

	// Function to render icons inside a div using .map()
	// used undefined in map because...why not lol
	const renderIcons = () => {
		return [...Array(numIcons)].map((_,index) => (
				<img key={index} src={iconStar} alt="star rating" />
		))
	}

	// Function to render out the correct amount of rating cards
	const renderRatings = () => {
		return (
			ratingText.map((ratingText,index) => (
				<div key={index} className={`ratings-${index + 1} ratings-box`}>
					<div className="star-container">{renderIcons()}</div>
					<p>{ratingText}</p>
				</div>
			))
		)
	}

	return (renderRatings())
}

export default StarRatingCards
StarRatingCards.displayName = "StarRatingCards"