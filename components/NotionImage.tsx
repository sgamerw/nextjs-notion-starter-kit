'use client'

import Image, { type ImageProps } from 'next/image'
import { imageRemoteHosts } from '@/lib/image-remote-patterns'

function shouldBypassOptimizer(src: ImageProps['src']): boolean {
  if (typeof src !== 'string' || !/^https?:\/\//i.test(src)) {
    return false
  }

  try {
    return !imageRemoteHosts.has(new URL(src).hostname)
  } catch {
    return true
  }
}

/**
 * next/image only optimizes hosts listed in images.remotePatterns.
 * Notion page covers often point at arbitrary external URLs; those would
 * otherwise 400 via /_next/image. Serve them unoptimized (direct src) instead.
 */
export function NotionImage({ unoptimized, src, ...props }: ImageProps) {
  return (
    <Image
      {...props}
      src={src}
      unoptimized={unoptimized || shouldBypassOptimizer(src)}
    />
  )
}
