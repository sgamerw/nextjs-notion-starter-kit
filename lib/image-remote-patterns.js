/** Shared allowlist for next/image optimization (next.config + NotionImage). */
export const imageRemotePatterns = [
  { protocol: 'https', hostname: 'www.notion.so' },
  { protocol: 'https', hostname: 'notion.so' },
  { protocol: 'https', hostname: 'app.notion.com' },
  { protocol: 'https', hostname: 'file.notion.com' },
  { protocol: 'https', hostname: 'images.unsplash.com' },
  { protocol: 'https', hostname: 'abs.twimg.com' },
  { protocol: 'https', hostname: 'pbs.twimg.com' },
  { protocol: 'https', hostname: 's3.us-west-2.amazonaws.com' },
  { protocol: 'https', hostname: 'img.notionusercontent.com' }
]

export const imageRemoteHosts = new Set(
  imageRemotePatterns.map((pattern) => pattern.hostname)
)
