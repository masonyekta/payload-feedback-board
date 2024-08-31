import { Post as PostType } from '@payload-types'

import { Card, CardContent } from '@/components/ui/card'
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'

interface ItemProps {
	post: PostType
}

const Item = ({ post }: ItemProps) => {
	return (
		<Sheet key={post.id}>
			<SheetTrigger asChild>
				<Card className="w-full mb-3 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800">
					<CardContent>
						<h3 className="font-semibold leading-tight mb-2">{post.title}</h3>
						<p className="leading-tight text-sm line-clamp-2 text-neutral-600 dark:text-neutral-400">
							{post.description}
						</p>
					</CardContent>
				</Card>
			</SheetTrigger>
			<SheetContent side="left" className="px-4 pt-10 sm:p-10 w-full sm:max-w-3xl">
				<SheetHeader className="pt-5">
					<SheetTitle className="text-xl font-bold leading-none tracking-tight sm:text-2xl">
						{post.title}
					</SheetTitle>
					<SheetDescription>{post.description}</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	)
}

export default Item
