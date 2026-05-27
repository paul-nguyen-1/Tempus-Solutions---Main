const PNG_SIZE = 2000
const CONTENT = { x: 108, y: 708, w: 1612, h: 641 }

interface LogoProps {
  height: number
}

export default function Logo({ height }: LogoProps) {
  const scale = height / CONTENT.h
  const bgSize = PNG_SIZE * scale
  const bgX = -(CONTENT.x * scale)
  const bgY = -(CONTENT.y * scale)
  const width = CONTENT.w * scale

  const shared: React.CSSProperties = {
    width,
    height,
    backgroundSize: `${bgSize}px ${bgSize}px`,
    backgroundPosition: `${bgX}px ${bgY}px`,
    backgroundRepeat: 'no-repeat',
  }

  return (
    <>
      <div
        className="logo-light-mode"
        style={{ ...shared, backgroundImage: "url('/tempus-light-horizontal.png')" }}
        role="img"
        aria-label="Tempus Solutions"
      />
      <div
        className="logo-dark-mode"
        style={{ ...shared, backgroundImage: "url('/tempus-dark-horizontal.png')" }}
        aria-hidden="true"
      />
    </>
  )
}
