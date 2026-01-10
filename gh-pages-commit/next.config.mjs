import nextMDX from '@next/mdx'

import { recmaPlugins } from './mdx/recma.mjs'
import { rehypePlugins } from './mdx/rehype.mjs'
import { remarkPlugins } from './mdx/remark.mjs'

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins,
    rehypePlugins,
    recmaPlugins,
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Use NEXT_PUBLIC_BASE_PATH for GitHub Pages deployment, default to empty for local dev.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  // Explicitly set assetPrefix to match basePath for static exports on GH Pages
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
}

export default withMDX(nextConfig)
