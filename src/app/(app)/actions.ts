'use server'

import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { revalidatePath } from 'next/cache'
import fetch from 'node-fetch'

export async function addFeedback(formData: any) {
	const isCaptchaValid = await validateCaptcha(formData.captcha)

	// Check if the captcha is valid
	if (!isCaptchaValid) {
		return { error: true, message: `Captcha value failed. Try to reload the page.` }
	}

	// Add the feedback
	try {
		const payload = await getPayloadHMR({
			config: configPromise,
		})

		const defaultCategory = await payload.find({
			collection: 'categories',
			sort: 'order',
			limit: 1,
		})

		await payload.create({
			collection: 'posts',
			data: {
				title: formData.title,
				description: formData.description,
				category: defaultCategory.docs[0].id,
			},
		})
		revalidatePath('/')
		return { error: false, message: `Your feedback has been successfully added.` }
	} catch (e) {
		return { error: true, message: `Failed to add your feedback. Please try again. ${e}` }
	}
}

export async function validateCaptcha(captchaToken: string): Promise<boolean> {
	try {
		const response = await fetch('https://hcaptcha.com/siteverify', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: `secret=${encodeURIComponent(process.env.HCAPTCHA_SECRET_KEY || '')}&response=${encodeURIComponent(captchaToken)}`,
		})

		const data: any = await response.json()
		return data.success
	} catch (error) {
		console.error('Error validating captcha:', error)
		return false
	}
}
