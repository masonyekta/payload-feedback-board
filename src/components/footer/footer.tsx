import { Link } from '@/components/elements'
import { Container } from '@/components/layout'

import siteMetadata from '@/data/siteMetadata'
import siteNavigation from '@/data/siteNavigation'

export default function Footer() {
	return (
		<footer>
			<Container>
				<div className="mt-10 border-t border-neutral-200 py-12 dark:border-neutral-800 md:flex md:items-center md:justify-between">
					<div className="flex justify-center space-x-6 md:order-2">
						{siteNavigation.social.map((item) => (
							<a
								key={item.name}
								href={item.href}
								target="_blank"
								className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50"
							>
								<span className="sr-only">{item.name}</span>
								<svg
									fill="currentColor"
									viewBox="0 0 24 24"
									className="h-6 w-6"
									aria-hidden="true"
								>
									<path d={item.icon} />
								</svg>
							</a>
						))}
					</div>
					<div className="mt-8 md:order-1 md:mt-0">
						<p className="text-center text-sm text-neutral-600 dark:text-neutral-400 md:text-base">
							&copy; {new Date().getFullYear()} {siteMetadata.author}
							{'. '}
							{siteMetadata.copyright}
						</p>
						{siteNavigation.footer.links.length > 0 && (
							<p className="space-x-4 pt-1 text-center text-sm text-neutral-600 dark:text-neutral-400 md:text-left">
								{siteNavigation.footer.links.map((item: any) => (
									<>
										{item.name && item.href && (
											<Link href={item.href} key={item.name}>
												{item.name}
											</Link>
										)}
									</>
								))}
							</p>
						)}
					</div>
				</div>
			</Container>
		</footer>
	)
}
