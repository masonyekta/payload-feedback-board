import Image from 'next/image'

/**
 * Image props
 */
interface ImageProps {
	src: string
	srcDark?: string
	alt: string
	height: number
	width: number
	className?: string
}

const CustomImage = ({ src, srcDark, alt, height, width, className }: ImageProps) => {
	const blurDataURL =
		'data:image/jpeg;base64, iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsqamqBwAE4QHzd+/tVwAAAABJRU5ErkJggg=='
	return (
		<>
			{srcDark ? (
				<>
					<Image
						src={src}
						alt={alt}
						width={width}
						height={height}
						className={`${className} block dark:hidden`}
						placeholder="blur"
						blurDataURL={blurDataURL}
					/>
					<Image
						src={srcDark}
						alt={alt}
						width={width}
						height={height}
						className={`${className} hidden dark:block`}
						placeholder="blur"
						blurDataURL={blurDataURL}
					/>
				</>
			) : (
				<Image
					src={src}
					alt={alt}
					width={width}
					height={height}
					className={className}
					placeholder="blur"
					blurDataURL={blurDataURL}
				/>
			)}
		</>
	)
}

export default CustomImage
