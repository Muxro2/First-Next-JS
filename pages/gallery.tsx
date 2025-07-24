import fs from 'fs';
import path from 'path';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Head from 'next/head';

type ImageData = {
	src: string;
	alt: string;
}

type Props = {
	images: ImageData[];
}

export const getStaticProps: GetStaticProps = async () => {
	const filePath = path.join(process.cwd(), 'data', 'gallery.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const images = JSON.parse(jsonData);

  return {
		props: {
     images,
		}
	}
}

export default function Gallery({images}: Props) {
	return <>
		<Head>
			<title>Gallery</title>
			<meta name="description" content="My gallery"/>
			<link rel="icon" href="/favicon.ico"/>
		</Head>
	  <h1>Gallery</h1>
		<div className="images">
			{images.map((img, i) => (
		  <div key={i}>
				<Image
					src={img.src}
					alt={img.alt}
					width={150}
					height={300}
					layout='responsive'
					style={{borderRadius: '10px'}}
				/>
				</div>
			))}
		</div>
	</>
}