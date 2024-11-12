

function NameBoard({players, index, setPlayers, ...props})
{
    return (
        <div>
            <div className={props.className}>
                <p className="name">
                    {players[index].nome}  
                </p>
                <p className="sign">
                    {players[index].sign}
                </p>
            </div>
        </div>
        
    )
}

export default NameBoard