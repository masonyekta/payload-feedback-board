import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

import { Comment } from '@/components/comment'

interface CommentListProps {
	id: string
}

export default async function CommentList({ id }: CommentListProps) {
	const payload = await getPayloadHMR({
		config: configPromise,
	})

	const comments = await payload.find({
		collection: 'comments',
		sort: 'createdAt',
		limit: 20,
		where: {
			post: {
				equals: id,
			},
		},
	})

	return (
		<div>
			<div className="pb-3 mt-10 mb-10 border-b border-neutral-800 dark:border-neutral-600 d-block w-full">
				<h3 className="text-xl font-bold leading-none tracking-tight">All Comments</h3>
			</div>
			{comments.docs.length === 0 && (
				<p className="text-neutral-600 dark:text-neutral-400">No comments yet.</p>
			)}

			{comments.docs.map((comment) => (
				<Comment key={comment.id} comment={comment} />
			))}
		</div>
	)
}
