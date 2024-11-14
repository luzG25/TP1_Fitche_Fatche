
const Cubo = (props) => {



    return (

        <button className="w-24 h-24 bg-[#3498db] text-white border-2 border-[#2980b9] rounded-lg p-0 mx-auto my-5 shadow-md text-center leading-[6rem] text-5xl" onClick={(event) => {
            props.handleClick(props.col, props.line, props.player)
        }}>
            {props.marker}
        </button>
    )
}

export default Cubo