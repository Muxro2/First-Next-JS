import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';
import { GetStaticProps } from 'next';

type Gallery = {
	slug: string;
	title: string;
	description: string;
};

type Props = {
	galleries: Gallery[];
};

export const getStaticProps: GetStaticProps = async () => {
	const filePath = path.join(process.cwd(), 'data', 'gallery.json');
	const jsonData = fs.readFileSync(filePath, 'utf-8');
	const galleries: Gallery[] = JSON.parse(jsonData);

	return {
		props: {
			galleries,
		},
	};
};

export default function GalleryList({ galleries }: Props) {
	return (
		<>
			<h1>Gallery List</h1>
			<ul className="grid">
				{galleries.map((gallery) => (
					<li className="card" key={gallery.slug}>
						<Link href={`/gallery/${gallery.slug}`}>
							<div>
							 <Image
								 className="thumbnail"
								 src={gallery.cover}
								 alt="thumbnail"
								 width={200}
								 height={300}
								 layout='responsive'
								/>
							</div>
							<h2>{gallery.title}</h2>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}