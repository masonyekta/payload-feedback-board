import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		reactCompiler: false,
	},
	trailingSlash: true,
}

export default withPayload(nextConfig)
