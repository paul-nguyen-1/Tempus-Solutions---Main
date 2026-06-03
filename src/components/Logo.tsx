interface LogoProps {
  height: number
}

export default function Logo({ height }: LogoProps) {
  return (
    <img
      src="/tempus-horizontal.svg"
      alt="Tempus Solutions"
      style={{ height, width: 'auto', display: 'inline-block' }}
    />
  )
}
