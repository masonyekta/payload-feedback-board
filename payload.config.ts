import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { slateEditor } from '@payloadcms/richtext-slate'
import { revalidatePath } from 'next/cache'
import path from 'path'
import { buildConfig } from 'payload'
import { en } from 'payload/i18n/en'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
	editor: slateEditor({}),
	collections: [
		{
			slug: 'users',
			auth: true,
			access: {
				create: () => false,
				delete: () => false,
				update: () => false,
			},
			fields: [],
		},
		{
			slug: 'categories',
			admin: {
				useAsTitle: 'title',
			},
			access: {
				read: () => true,
			},
			fields: [
				{
					name: 'title',
					type: 'text',
					required: true,
				},
				{
					name: 'order',
					type: 'number',
					index: true,
					required: true,
				},
				{
					name: 'color',
					type: 'text',
					required: true,
				},
			],
		},
		{
			slug: 'posts',
			admin: {
				useAsTitle: 'title',
			},
			access: {
				read: () => true,
				create: () => true,
			},
			hooks: {
				afterDelete: [
					async () => {
						revalidatePath('/')
					},
				],
			},
			fields: [
				{
					name: 'title',
					type: 'text',
					index: true,
				},
				{
					name: 'description',
					type: 'textarea',
				},
				{
					name: 'category',
					type: 'relationship',
					relationTo: 'categories',
					hasMany: false,
					index: true,
					required: true,
				},
			],
		},
	],
	secret: process.env.PAYLOAD_SECRET || '',
	typescript: {
		outputFile: path.resolve(dirname, 'payload-types.ts'),
	},
	db: mongooseAdapter({
		url: process.env.MONGODB_URI || '',
	}),

	/**
	 * Payload can now accept specific translations from 'payload/i18n/en'
	 * This is completely optional and will default to English if not provided
	 */
	i18n: {
		supportedLanguages: { en },
	},
})
