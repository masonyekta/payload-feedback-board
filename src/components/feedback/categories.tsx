import { Category } from '@/components/feedback'

interface Item {
	docs: any[]
}

interface ItemProps {
	categories: Item
}

const Categories = ({ categories }: ItemProps) => {
	return (
		<div className="md:grid grid-cols-3 gap-4 w-full mt-5">
			{categories.docs.map((category) => (
				<Category
					key={category.id}
					title={category.title}
					id={category.id}
					color={category.color}
				/>
			))}
		</div>
	)
}

export default Categories
