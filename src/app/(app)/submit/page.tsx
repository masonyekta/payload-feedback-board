import React from 'react'

import { Heading, Paragraph } from '@/components/elements'
import { SubmitForm } from '@/components/feedback'
import { Container } from '@/components/layout'

import siteSEO from '@/data/siteSEO'

export default async function Page() {
	return (
		<>
			<Container>
				<section className="pb-8 pt-6 md:pb-12 md:pt-10 lg:pb-24 lg:pt-32">
					<div className="mx-auto flex flex-col items-start gap-4">
						<Heading>Submit Your Feedback</Heading>
						<Paragraph>
							Share your thoughts with us! We are always listening and eager to make
							things better based on your feedback. Your ideas help us shape the
							future of our products—thanks for being a part of the journey!
						</Paragraph>
						<SubmitForm
							imageURL="/images/feedback-submission-vertical.jpg"
							imageAlt="A close-up view of a vintage typewriter."
						/>
					</div>
				</section>
			</Container>
		</>
	)
}

export async function generateMetadata() {
	return {
		title: `${siteSEO.submit.pageTitle}`,
		description: siteSEO.submit.pageDescription,
		openGraph: {
			description: siteSEO.submit.pageDescription,
		},
	}
}
