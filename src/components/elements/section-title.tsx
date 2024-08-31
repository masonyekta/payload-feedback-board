/**
 * Section title props
 */
interface SectionTitleProps {
	children: any
}

const SectionTitle = ({ children, ...rest }: SectionTitleProps) => {
	return (
		<h2 className="mb-4 text-xl font-bold leading-none md:text-2xl" {...rest}>
			{children}
		</h2>
	)
}

export default SectionTitle
