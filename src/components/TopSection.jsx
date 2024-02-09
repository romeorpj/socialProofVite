import StarRatingCards from "./StarRatingCards"


const TopSection = () => {

	return (
		<>
			<section className='top-section'>
				<section className="left-container">
					<h1>10,000 of our users love our products.</h1>
					<p>We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</p>
				</section>
				<section className="right-container">
					<StarRatingCards />
				</section>
			</section>
		</>
	)
}

export default TopSection
TopSection.displayName = "TopSection"
