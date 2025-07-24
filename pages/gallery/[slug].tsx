import fs from 'fs';
import path from 'path';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Head from 'next/head';

type ImageData = {
	src: string;
	alt: string;
};

type Gallery = {
	slug: string;
	title: string;
	description: string;
	cover: string;
	images: ImageData[];
};

type Props = {
	gallery: Gallery;
};

export const getStaticPaths: GetStaticPaths = async () => {
	const filePath = path.join(process.cwd(), 'data', 'gallery.json');
	const jsonData = fs.readFileSync(filePath, 'utf-8');
	const galleries: Gallery[] = JSON.parse(jsonData);

	const paths = galleries.map((gallery) => ({
		params: { slug: gallery.slug },
	}));

	return {
		paths,
		fallback: false, // show 404 for unknown slugs
	};
};

export const getStaticProps: GetStaticProps = async (context) => {
	const slug = context.params?.slug;
	const filePath = path.join(process.cwd(), 'data', 'gallery.json');
	const jsonData = fs.readFileSync(filePath, 'utf-8');
	const galleries: Gallery[] = JSON.parse(jsonData);

	const gallery = galleries.find((g) => g.slug === slug);

	if (!gallery) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			gallery,
		},
	};
};

export default function GalleryPage({ gallery }: Props) {
	return (
		<>
			<Head>
			  <title>{gallery.title} | My Photography</title>
				<meta name="description" content={gallery.description} />

				{/* Open Graph for social sharing */}
				<meta property="og:title" content={gallery.title} />
				<meta property="og:description" content={gallery.description} />
				<meta property="og:image" content={gallery.cover} />
				<meta property="og:type" content="website" />
				<meta property="og:url" content={`https://yourdomain.com/gallery/${gallery.slug}`} />

				{/* Twitter Card (optional) */}
				<meta name="twitter:card" content="summary_large_image" />
			</Head>

			<h1>{gallery.title}</h1>
			<p>{gallery.description}</p>
			<div className="images">
				{gallery.images.map((img, i) => (
					<div key={i} style={{ position: 'relative', width: '100%', maxWidth: 350 }}>
						<Image
							src={`https://res.cloudinary.com/dmkz7axbh/image/upload/c_fill,q_auto,f_auto,dpr_auto/${img.src}`}
							alt={img.alt}
							width={350}
							height={500}
							layout="responsive"
							style={{ borderRadius: '10px' }}
							placeholder="blur"
							blurDataURL={`https://res.cloudinary.com/dmkz7axbh/image/upload/c_fill,q_auto,f_auto,dpr_auto/${img.src}`}
						/>
					</div>
				))}
			</div>
		</>
	);
}