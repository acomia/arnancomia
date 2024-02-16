export default function myImageLoader({
    src,
    width,
    quality,
  }: {
    src: string
    width: number
    quality?: number
  }) {
    return `https://arnanportfolio.000webhostapp.com//${src}?w=${width}&q=${quality || 75}`
  }