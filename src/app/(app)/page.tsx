import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import React from 'react'

import { Heading, Paragraph } from '@/components/elements'
import { Categories, SubmitBanner } from '@/components/feedback'
import { Container } from '@/components/layout'

export default async function Page() {
	const payload = await getPayloadHMR({
		config: configPromise,
	})

	const data = await payload.find({
		collection: 'categories',
		sort: 'order',
		limit: 3,
	})

	return (
		<>
			<Container>
				<section className="pb-8 pt-6 md:pb-12 md:pt-10 lg:pb-24 lg:pt-32">
					<div className="mx-auto flex flex-col items-start gap-4">
						<Heading>Feedback Board</Heading>
						<Paragraph>
							Share your thoughts and suggestions, and watch as our team reviews and
							prioritizes your input to enhance our products and services. Your
							feedback drives our improvement—thank you for contributing!
						</Paragraph>
						<Categories categories={data} />
						<SubmitBanner
							title="Submit Your Feedback"
							description="Submit your feedback, and help us improve our products and services."
							linkText="Submit Your Feedback"
							linkURL="/submit/"
							imageURL="/images/feedback-submission-vertical.jpg"
							imageAlt="A close-up view of a vintage typewriter."
						/>
					</div>
				</section>
			</Container>
		</>
	)
}
