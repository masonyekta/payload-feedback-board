import { Link } from '@/components/elements'

interface NavProps {
	navType: string
	pageNumber: number
	totalPages: number
	prevPageNumber: number
	nextPageNumber: number
}

const PageNav = ({ navType, pageNumber, totalPages, prevPageNumber, nextPageNumber }: NavProps) => {
	return (
		<nav className="flex items-center justify-between py-3" aria-label="Pagination">
			<div className="block">
				<p className="text-neutral-800 dark:text-neutral-100">
					Showing Page
					<span className="font-medium"> {pageNumber} </span>
					of <span className="font-medium">{totalPages}</span>
				</p>
			</div>
			<div className="flex flex-1 justify-end">
				{pageNumber > 1 && (
					<Link
						href={`/${navType}/page/${prevPageNumber}`}
						className="relative inline-flex items-center rounded-md border border-neutral-300 bg-white px-4 py-2 pb-2 text-sm font-medium text-neutral-800 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-transparent dark:text-neutral-100"
					>
						Previous
					</Link>
				)}
				{nextPageNumber <= totalPages && (
					<Link
						href={`/${navType}/page/${nextPageNumber}`}
						className="relative ml-3 inline-flex items-center rounded-md border border-neutral-300 bg-white px-4 py-2 pb-2 text-sm font-medium text-neutral-800 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-transparent dark:text-neutral-100"
					>
						Next
					</Link>
				)}
			</div>
		</nav>
	)
}

export default PageNav
