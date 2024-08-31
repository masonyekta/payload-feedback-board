/**
 * Props
 */
interface SubIntroProps {
	children: any
}

const SubIntro = ({ children, ...rest }: SubIntroProps) => {
	return (
		<span
			className="text-lg font-bold text-neutral-800 dark:text-neutral-100 sm:text-3xl"
			{...rest}
		>
			{children}
		</span>
	)
}

export default SubIntro
