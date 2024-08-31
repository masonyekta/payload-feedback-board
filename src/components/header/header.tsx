'use client'

import { MessageSquareTextIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'

import { Link } from '@/components/elements'
import { ModeToggle } from '@/components/header'
import { Container } from '@/components/layout'

import siteMetadata from '@/data/siteMetadata'
import siteNavigation from '@/data/siteNavigation'

export default function Header() {
	const pathname = usePathname()

	return (
		<header>
			<Container>
				<div className="relative z-10 border-b border-neutral-200 pb-6 pt-6 dark:border-neutral-800">
					<nav
						className="flex h-9 items-center justify-between"
						aria-label="Website navigation"
					>
						<div
							className="flex lg:min-w-0 lg:flex-1"
							aria-label="Link to the homepage"
						>
							<Link href="/" className="-m-1.5 p-1.5">
								<span className="sr-only">{siteMetadata.headerTitle}</span>
								<div className="flex items-center justify-between">
									<MessageSquareTextIcon className="mr-3 items-center h-8 w-8" />
									<div>
										<span className="text-xl font-medium">
											{siteMetadata.headerTitle}
										</span>
										{siteMetadata.tagline && (
											<div className="text-sm">{siteMetadata.tagline}</div>
										)}
									</div>
								</div>
							</Link>
						</div>
						<div className="items-center lg:flex lg:min-w-0 lg:flex-1 lg:justify-end lg:gap-x-6">
							{siteNavigation.header.links.map((item: any) => (
								<Link
									key={item.name}
									href={item.href}
									className={
										pathname === item.href
											? 'active text-neutral-900 hover:text-neutral-900 dark:text-neutral-50 dark:hover:text-neutral-50'
											: 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50'
									}
								>
									{item.name}
								</Link>
							))}
							<ModeToggle />
						</div>
					</nav>
				</div>
			</Container>
		</header>
	)
}
