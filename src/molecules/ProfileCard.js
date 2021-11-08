import { H3 } from "@src/atoms";
import { DataDisplayRow } from "@src/atoms";

export function ProfileCard({ userInfoData }) {
	return (
		<div className="max-w-4xl">
			<H3 variant="small">Profil</H3>
			<div className="mt-5 border-t border-gray-200">
				<dl className="divide-y divide-gray-200">
					{userInfoData.map(({ name, value }) => (
						<DataDisplayRow key={name} fieldName={name} fieldValue={value} />
					))}
				</dl>
			</div>
		</div>
	);
}

ProfileCard.defaultProps = {
	userInfoData: [
		{ name: "Celé jméno", value: "Albert Mírek" },
		{ name: "Telefon", value: "777 777 777" },
		{ name: "email", value: "knuckles@uganda.com" },
		{ name: "Adresa", value: "U Ďolíčku na Bohemce, Praha 10" },
	],
};