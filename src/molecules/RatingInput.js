import { Label } from "@src/atoms";
import { useState } from "react";

export function RatingInput({ addRating }) {
	const [isFocused, setIsFocused] = useState(false);
	const [comment, setComment] = useState("");
	const onSubmit = (e) => {
		e.preventDefault();
		addRating({
			user: {
				name: "Pepe",
				avatar: "https://placeimg.com/64/64/people",
			},
			submitedAt: new Date(),
			text: comment,
		});
		setComment("");
	};

	return (
		<div className="flex items-start space-x-4">
			<div className="flex-shrink-0">
				{/* Avatar IMG */}
				<img
					className="inline-block h-10 w-10 rounded-full"
					src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
					alt=""
				/>
			</div>
			<div className="min-w-0 flex-1">
				<form action="#" className="relative">
					<div
						className={`visited bg-white border border-gray-400 relative rounded-md text-gray-400 transition-all ${
							isFocused ? "is-focused" : ""
						}`}
					>
						<textarea
							onFocus={() => {
								setIsFocused(true);
							}}
							onBlur={() => {
								setIsFocused(false);
							}}
							value={comment}
							onChange={(e) => setComment(e.target.value)}
							id="comment"
							name="comment"
							type="text"
							className="block w-full py-3 pb-3 pl-3 pt-3 border-0 resize-none focus:ring-0 sm:text-sm transition-colors"
							rows="3"
						></textarea>
						<Label htmlFor="comment">Přidat komentář</Label>
						<div className="py-2 mx-2" aria-hidden="true">
							<button
								type="submit"
								onClick={onSubmit}
								className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-main-600 hover:bg-main-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-500"
							>
								Odeslat
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
