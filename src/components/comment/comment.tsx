import { Comment as CommentType } from '@payload-types'

interface CommentProps {
	comment: CommentType
}

const Comment = ({ comment }: CommentProps) => {
	return (
		<div key={comment.id}>
			<div className="mb-3 border-b border-neutral-200 dark:border-neutral-800 pb-3">
				<div className="flex items-center justify-between pb-2">
					<h4 className="font-bold">{comment.name}</h4>
					<time className="text-sm text-muted-foreground text-neutral-600 dark:text-neutral-400">
						{new Date(comment.createdAt).toLocaleDateString('en-US', {
							year: 'numeric',
							month: 'long',
							day: 'numeric',
						})}
					</time>
				</div>
				<div>
					<p className="leading-tight base line-clamp-2 text-neutral-600 dark:text-neutral-400">
						{comment.comment}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Comment
