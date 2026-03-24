type CounterProps = {
  label: string
  onClick: () => void
  size?: 'default' | 'small' | 'large'
  backgroundColor?: string
  buttonStyleVersion?: string
}

export function Counter({ label, onClick, size = 'default', backgroundColor, buttonStyleVersion }: CounterProps) {
    const sizes = {
        default: "bg-[red] text-base p-4",
        small: 'bg-[red] text-xs p-2',
        large: 'bg-[red] text-lg p-6'
    }
    return (
        <>
            <button className={[buttonStyleVersion,`${sizes[size]}`].join(' ')} style={{ backgroundColor }} onClick={onClick}>
                {label}
            </button>
        </>
    )
}