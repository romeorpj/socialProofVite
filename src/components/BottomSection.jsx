import anneWallaceImg from "../assets/image-anne.jpg"
import ireneRobertsImg from "../assets/image-irene.jpg"
import coltonSmithImg from "../assets/image-colton.jpg"

const BottomSection = () => {
	const usersList = [
		{
			imgSrc: coltonSmithImg,
			name: "Colton Smith",
			status: "Verified Buyer",
			testimonial: "We need the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also recieved it in time. Excellent!"
		},
		{
			imgSrc: ireneRobertsImg,
			name: "Irene Roberts",
			status: "Verified Buyer",
			testimonial: "Customer service is always excellent and very quick turnaround. Completely delighted with the simplicity of the purchase and the speed of delivery."
		},
		{
			imgSrc: anneWallaceImg,
			name: "Anne Wallace",
			status: "Verified Buyer",
			testimonial: "Put an order with this company an can only praise them for the very high standard. Will definitely use them again and recommend them to everyone."
		}
	]

	const displayTestimonialCards = () => {
		return (
			usersList.map((user) => {
				return (
					<div key={user.name} className="bottom-section_cards">
						{console.log("user",user)}
						<div className="userSection">
							<img src={user.imgSrc} alt={user.name} className="user-images" />
							<div className="name-and-status_testimonial">
								<p>{user.name}</p>
								<p>{user.status}</p>
							</div>
						</div>
						<p className="testimonial-area">{user.testimonial}</p>
					</div>
				)
			})
		)
	}
	return (
		<>
			<section className="bottom-section">
				{displayTestimonialCards()}
				{/* <div className="bottom-section_cards"></div>
				<div className="bottom-section_cards"></div> */}
			</section>
		</>
	)
}

export default BottomSection
BottomSection.displayName = "BottomSection"