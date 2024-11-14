

function NameBoard({players, index, setPlayers, ...props})
{
    return (
        <div>
            <div className={props.className}>
                <p className="ml-5">
                    {players[index].nome}  
                </p>
                <p className="mr-2.5">
                    {players[index].sign}
                </p>
            </div>
        </div>
        
    )
}

export default NameBoard