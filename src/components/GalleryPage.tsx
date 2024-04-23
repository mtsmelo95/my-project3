import React, {
	useState,
	useEffect,
} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const GalleryPage: React.FC = () => {
	const [loading, setLoading] = useState(true);
	const [images, setImages] = useState<
		{
			id: string;
			src: { medium: string };
			url: string;
		}[]
	>([]);

	useEffect(() => {
		const fetchImages = async () => {
			try {
				const response = await axios.get<{
					photos: {
						id: string;
						src: { medium: string };
						url: string;
					}[];
				}>(
					"https://api.pexels.com/v1/curated?per_page=5020",
					{
						headers: {
							Authorization:
								"xDtF8TzEmSKEIh3afybiH0BTLmXFGednQlcxXKKOSe9LDAXuYsn0bF15",
						},
					},
				);

				setTimeout(() => {
					setImages(response.data.photos);
					setLoading(false);
				}, 1500);
			} catch (error) {
				console.error(
					"Erro ao buscar imagens:",
					error,
				);
				setLoading(false);
			}
		};

		fetchImages();
	}, []);

	return (
		<div className="container mx-auto p-4">
			<h2 className="text-2xl font-bold mb-4">
				Gallery
			</h2>
			<Link to="/">
				<button className="bg-blue-500 hover:bg-blue-700 text-white text-[2rem] font-bold px-20 rounded-[30px] mb-10">
					Back
				</button>
			</Link>

			{loading ? (
				<div className="text-center text-[5rem] text-red-500">
					Loading...
				</div>
			) : (
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
					{images.map((image) => (
						<img
							key={image.id}
							src={image.src.medium}
							alt={image.url}
							className="w-full h-auto"
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default GalleryPage;
