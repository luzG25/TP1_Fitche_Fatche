function TabCheio({className, resetTab, ...props})
{
    return (
        <div>
             <div className={className}>
            <h2> Empate </h2>
            <p>Tabuleiro Cheio</p>
            <p>
                <button onClick={(event) => {resetTab()}}>Resetar Tabuleiro</button>
            </p>  
        </div>
        </div>
    )
}

export default TabCheio