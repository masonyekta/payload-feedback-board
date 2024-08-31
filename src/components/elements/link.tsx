import Link from 'next/link'

const CustomLink = ({ href, isNav, ...rest }: any) => {
	const isInternalLink = (href && href.startsWith('/')) || isNav
	const isAnchorLink = href && href.startsWith('#')
	const className =
		'border-b border-neutral-800 text-neutral-800 dark:border-neutral-100 dark:text-neutral-100'

	if (isInternalLink) {
		return <Link className={className} href={href} {...rest}></Link>
	}

	if (isAnchorLink) {
		return <a className={className} href={href} {...rest} />
	}

	return (
		<a className={className} target="_blank" rel="noopener noreferrer" href={href} {...rest} />
	)
}

export default CustomLink
