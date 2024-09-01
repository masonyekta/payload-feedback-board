'use client'

import HCaptcha from '@hcaptcha/react-hcaptcha'
import { zodResolver } from '@hookform/resolvers/zod'
import { InfoIcon, Loader2Icon } from 'lucide-react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import { addComment } from '@/app/(app)/actions'

interface ItemProps {
	postID: string
}

const formSchema = z.object({
	name: z.string().min(1, {
		message: 'Name is required',
	}),
	comment: z
		.string()
		.min(1, {
			message: 'Comment is required',
		})
		.max(500, {
			message: 'Comment should be less than 500 characters',
		}),
	captcha: z.string().min(1, {
		message: 'Captcha is required',
	}),
})

const CommentForm = ({ postID }: ItemProps) => {
	const [formResults, setFormResults] = useState({ error: false, message: '' })
	const [formSubmitted, setFormSubmitted] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	/**
	 * Create a form instance
	 */
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			comment: '',
			captcha: '',
		},
	})

	/**
	 * Submit the form
	 */
	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		setIsLoading(true)
		try {
			const submissionResult = await addComment(values, postID)
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
			<div className="rounded-md overflow-hidden p-6">
				<div className="lg:self-center">
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							onChange={handleChange}
							className="space-y-4"
						>
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input placeholder="Enter your name" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="comment"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Textarea placeholder="Your comment" {...field} />
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
										<FormControl>
											<HCaptcha
												sitekey={
													process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY || ''
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
									'Submit Your Comment'
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
									? 'Failed to Submit Your Comment'
									: 'Successfully Submitted Your Comment'}
							</AlertTitle>
							<AlertDescription>{formResults.message}</AlertDescription>
						</Alert>
					)}
				</div>
			</div>
		</div>
	)
}

export default CommentForm
