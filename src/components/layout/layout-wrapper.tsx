import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { SectionContainer } from '@/components/layout'

const LayoutWrapper = ({ children }: any) => {
	return (
		<SectionContainer>
			<Header />
			<main className="mb-auto" id="main-content">
				{children}
			</main>
			<Footer />
		</SectionContainer>
	)
}

export default LayoutWrapper
