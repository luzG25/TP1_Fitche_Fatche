

function NameBoard(props)
{
    return (
        <div>
            <div className={props.className}>
                <p className="name">
                    {props.name}  
                </p>
                <p className="sign">
                    {props.sign}
                </p>
            </div>
        </div>
        
    )
}

export default NameBoard