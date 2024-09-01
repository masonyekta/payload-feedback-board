import { CommentForm, CommentList } from '@/components/comment'

interface CommentsProps {
	id: string
}

const Comments = ({ id }: CommentsProps) => {
	return (
		<div className="pt-10">
			<div className="pb-3 mb-10 border-b border-neutral-800 dark:border-neutral-600 d-block w-full">
				<h3 className="text-xl font-bold leading-none tracking-tight">Comments</h3>
			</div>
			<CommentForm postID={id} />
			<CommentList id={id} />
		</div>
	)
}

export default Comments
