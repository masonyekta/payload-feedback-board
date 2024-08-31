import { Image, Link } from '@/components/elements'
import { Button } from '@/components/ui/button'

interface ItemProps {
	title: string
	description: string
	linkText?: string
	linkURL?: string
	imageURL: string
	imageAlt: string
}

const SubmitBanner = ({ title, description, linkText, linkURL, imageURL, imageAlt }: ItemProps) => {
	return (
		<div className="mx-auto w-full mt-10">
			<div className="bg-neutral-900 dark:bg-neutral-800 rounded-md overflow-hidden md:grid md:grid-cols-2 md:gap-4">
				<div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0">
					<div className="lg:self-center">
						<h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-white">
							{title}
						</h2>
						<p className="mt-6 mb-10 text-base leading-6 text-neutral-400 dark:text-neutral-400 md:text-lg">
							{description}
						</p>
						{linkURL && (
							<>
								<Button asChild size="lg" variant="outline">
									<Link href={linkURL}>{linkText}</Link>
								</Button>
							</>
						)}
					</div>
				</div>
				{imageURL && (
					<div className="-mt-6 aspect-w-5 aspect-h-3">
						<Image
							className="grayscale transform translate-x-6 translate-y-6 rounded-lg object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
							src={imageURL}
							width={400}
							height={200}
							alt={imageAlt}
						/>
					</div>
				)}
			</div>
		</div>
	)
}

export default SubmitBanner
