
function Winner({className, player,resetTab, ...props})
{

    return(

        <div className={className}>
            <p> {player} Ganhou </p>
            <p>
                <button onClick={(event) => {resetTab()}}>Resetar Tabuleiro</button>
            </p>  
        </div>

    )
}

export default Winner