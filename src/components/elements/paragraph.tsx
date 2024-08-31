/**
 * Pragraph props
 */
interface ParagraphProps {
	children: any
}

const Paragraph = ({ children, ...rest }: ParagraphProps) => {
	return (
		<p
			className="leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-xl sm:leading-normal"
			{...rest}
		>
			{children}
		</p>
	)
}

export default Paragraph
