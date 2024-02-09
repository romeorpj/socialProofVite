
	
const TopSection = () => {

	return (
		<>
			<section className='top-section'>
				<section className="first-section">
					<p className="title">10,000 of our users love our products</p>
					<p>We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</p>
				</section>
				<section className="second-section">
					{renderRatings()}
				</section>
			</section>
		</>
	)
}

export default TopSection
TopSection.displayName = "TopSection"
