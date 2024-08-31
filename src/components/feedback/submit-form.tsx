'use client'

import HCaptcha from '@hcaptcha/react-hcaptcha'
import { zodResolver } from '@hookform/resolvers/zod'
import { InfoIcon, Loader2Icon } from 'lucide-react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Image } from '@/components/elements'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import { addFeedback } from '@/app/(app)/actions'

interface ItemProps {
	imageURL: string
	imageAlt: string
}

const formSchema = z.object({
	title: z.string().min(1, {
		message: 'Title is required',
	}),
	description: z
		.string()
		.min(1, {
			message: 'Feedback is required',
		})
		.max(200, {
			message: 'Feedback should be less than 200 characters',
		}),
	captcha: z.string().min(1, {
		message: 'Captcha is required',
	}),
})

const SubmitForm = ({ imageURL, imageAlt }: ItemProps) => {
	const [formResults, setFormResults] = useState({ error: false, message: '' })
	const [formSubmitted, setFormSubmitted] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	/**
	 * Create a form instance
	 */
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: '',
			description: '',
			captcha: '',
		},
	})

	/**
	 * Submit the form
	 */
	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		setIsLoading(true)
		try {
			const submissionResult = await addFeedback(values)
			setFormSubmitted(true)
			setFormResults(submissionResult)
			setIsLoading(false)
		} catch (err: any) {
			setIsLoading(false)
			console.log(err?.message || 'An error occurred.')
		}
	}

	/**
	 * Clear any alerts when the form changes
	 */
	function handleChange() {
		setFormSubmitted(false)
	}

	return (
		<div className="mx-auto w-full mt-10 rounded-lg border border-neutral-200 text-neutral-950 dark:border-neutral-800 dark:text-neutral-50">
			<div className="rounded-md overflow-hidden md:grid md:grid-cols-2 md:gap-4">
				<div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0">
					<div className="lg:self-center">
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								onChange={handleChange}
								className="space-y-4"
							>
								<FormField
									control={form.control}
									name="title"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Title</FormLabel>
											<FormControl>
												<Input
													placeholder="Enter a title for your feedback"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="description"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Description</FormLabel>
											<FormControl>
												<Textarea
													placeholder="Briefly describe your feedback"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="captcha"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Captcha</FormLabel>
											<FormControl>
												<HCaptcha
													sitekey={
														process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY ||
														''
													}
													onVerify={(token) => field.onChange(token)}
												/>
											</FormControl>
											<FormDescription>
												Enter the captcha code to verify you are human.
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>
								<Button type="submit" className="w-full" size="lg">
									{isLoading ? (
										<Loader2Icon className="h-5 w-5 animate-spin" />
									) : (
										'Submit Your Feedback'
									)}
								</Button>
							</form>
						</Form>
						{formSubmitted && (
							<Alert
								className="mt-5"
								variant={formResults.error ? 'destructive' : 'default'}
							>
								<InfoIcon className="h-4 w-4" />
								<AlertTitle>
									{formResults.error
										? 'Failed to Submit Your Feedback'
										: 'Successfully Submitted Your Feedback'}
								</AlertTitle>
								<AlertDescription>{formResults.message}</AlertDescription>
							</Alert>
						)}
					</div>
				</div>
				{imageURL && (
					<div className="-mt-6 aspect-w-5 aspect-h-3">
						<Image
							className="grayscale transform translate-x-6 translate-y-6 rounded-lg object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
							src={imageURL}
							width={900}
							height={300}
							alt={imageAlt}
						/>
					</div>
				)}
			</div>
		</div>
	)
}

export default SubmitForm
