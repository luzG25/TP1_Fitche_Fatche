
function Winner({player,resetTab, ...props})
{

    return(

        <div className="winner">
            <p> {player} Ganhou </p>
            <p>
                <button onClick={(event) => {resetTab()}}>Resetar Tabuleiro</button>
            </p>  
        </div>

    )
}

export default Winner