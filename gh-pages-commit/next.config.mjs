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
  basePath: '/taxi_demand_prediction',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
}

export default withMDX(nextConfig)
