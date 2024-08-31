/**
 * Heading props
 */
interface HeadingProps {
	children: any
}

const Heading = ({ children, ...rest }: HeadingProps) => {
	return (
		<h1
			className="text-3xl font-bold leading-none tracking-tight text-neutral-800 dark:text-neutral-100 sm:pb-5 sm:text-5xl"
			{...rest}
		>
			{children}
		</h1>
	)
}

export default Heading
