import React, { Suspense } from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
	return (
		<div className="flex flex-col items-center justify-center w-full h-full pt-52 gap-10">
			<h2 className="text-[5rem] font-bold mb-4">
				Client Side Rendering Exemple
			</h2>
			<Suspense
				fallback={<div>Loading...</div>}
			>
				<Link to="/gallery">
					<button className="bg-blue-500 hover:bg-blue-700 text-white text-[3rem] font-bold py-8 px-[20rem] rounded-[30px]">
						Loading Gallery
					</button>
				</Link>
			</Suspense>
		</div>
	);
};

export default HomePage;
