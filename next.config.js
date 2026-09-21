import { imageRemotePatterns } from './lib/image-remote-patterns.js'

export default {
  staticPageGenerationTimeout: 300,
  images: {
    remotePatterns: imageRemotePatterns,
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  }
}
