import Image from 'next/image';

export default function Gallery() {
	return <div>
	  <h1>Gallery</h1>
		<div className="images">
		<Image
			src="/images/photo1.jpeg"
			alt="My Cat"
			width={350}
			height={500}
			style={{borderRadius: '10px'}}
		/>
		<Image
				src="/images/photo2.jpeg"
				alt="My Cat"
				width={350}
				height={500}
				style={{borderRadius: '10px'}}
		/>
		<Image
					src="/images/photo3.jpeg"
					alt="My Cat"
					width={350}
					height={500}
					style={{borderRadius: '10px'}}
			/>
		</div>
	</div>
}