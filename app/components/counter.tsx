type CounterProps = {
  label: string
  onClick: () => void
  size?: 'default' | 'small' | 'large'
  backgroundColor?: string
  buttonStyleVersion?: string
}

export function Counter({ label, onClick, size = 'default', backgroundColor, buttonStyleVersion }: CounterProps) {
    const sizes = {
        default: "bg-[red] text-base p-4 w-fit",
        small: 'bg-[red] text-xs p-2 w-fit',
        large: 'bg-[red] text-lg p-6 w-fit'
    }
    return (
        <>
            <button className={[buttonStyleVersion,`${sizes[size]}`].join(' ')} style={{ backgroundColor }} onClick={onClick}>
                {label}
            </button>
        </>
    )
}