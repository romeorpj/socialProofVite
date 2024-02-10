import DisplayTestimonialCards from "./DisplayTestimonialCards"
import {usersList} from "../data"

// Only passed as a prop to DisplayTestimonialCards to demonstrate passing props
// otherwise i would have just imported usersList into DisplayTestimonialCards
const BottomSection = () => {
	return (
		<>
			<section className="bottom-section">
				<DisplayTestimonialCards
					usersList={usersList}
				/>
			</section>
		</>
	)
}

export default BottomSection
BottomSection.displayName = "BottomSection"