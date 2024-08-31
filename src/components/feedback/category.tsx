import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

import { Item } from '@/components/feedback'

interface CategoryProps {
	id: string
	title?: string
	color?: string
}

export default async function Category({ id, title, color }: CategoryProps) {
	const payload = await getPayloadHMR({
		config: configPromise,
	})

	const items = await payload.find({
		collection: 'posts',
		sort: 'createdAt',
		limit: 20,
		where: {
			category: {
				equals: id,
			},
		},
	})

	return (
		<div className="w-full mb-10">
			<div className="flex items-center pb-5">
				<div className="mr-3 h-3 w-3 rounded-full" style={{ backgroundColor: color }} />
				<h2 className="text-xl font-bold leading-none tracking-tight text-neutral-800 dark:text-neutral-100 sm:text-2xl">
					{title}
				</h2>
			</div>

			{items.docs.map((post) => (
				<Item key={post.id} post={post} />
			))}
		</div>
	)
}
