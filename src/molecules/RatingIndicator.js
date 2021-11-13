import { RatingStar } from "@src/atoms";

export function RatingIndicator({ ratingValue = 0 }) {
	const rating = Math.round(ratingValue);
	return (
		<div className="flex gap-[2px] justify-start mt-2">
			{[...Array(5)].map((star, index) => {
				const ratingStar = rating - index;
				return <RatingStar key={index} checked={ratingStar > 0} />;
			})}
		</div>
	);
}
