import "./Cubo.css"

const Cubo = (props) => {



    return (

        <button className="caixa" onClick={(event) => {
            props.handleClick(props.col, props.line, props.player)
        }}>
            {props.marker}
        </button>
    )
}

export default Cubo