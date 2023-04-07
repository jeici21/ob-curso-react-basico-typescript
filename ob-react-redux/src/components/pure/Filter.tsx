import { ReactNode } from "react"

type FilterProps = { active: Required<boolean>, onClick(): Required<void>, children: Required<ReactNode> }

const Filter = ({ active, onClick, children }: FilterProps) => {
    if (active) {
        return (<span className="active">{children}</span>)
    }

    return (
        <button className="filter" onClick={e => {
            e.preventDefault()
            onClick()
        }}>{children}</button>
    )
}

export default Filter