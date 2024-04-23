

type READMORE = {
  children: string
} & Omit<React.ComponentProps<"button">, "children">

const Readmore = ({children, ...rest}: READMORE) => {
  return (
    <button className="readmore" {...rest}>{children}</button>
  )
}

export default Readmore