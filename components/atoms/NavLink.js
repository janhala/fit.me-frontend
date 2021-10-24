import Link from "next/link";
export function NavLink({ href, children }) {
	return (
		<Link href={href} passHref>
			<a className="group relative cursor-pointer hover:text-main-600 py-3">
				{children}
				<div className=" w-0 md:group-hover:w-full h-1 bg-main-600 transition-all" />
			</a>
		</Link>
	);
}

NavLink.defaultProps = {
	href: "#",
};
