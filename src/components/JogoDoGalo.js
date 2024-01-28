//Cria aqui o teu componente

import { useJogoDoGalo } from "../hooks/useJogoDoGalo";

export function JogoDoGalo() {
    const {
        jogo,
        verificarFimDoJogo,
        adicionarJogada,
        verificarVencedor,
        reiniciarJogo
    } = useJogoDoGalo()

    function handleClick(linha, coluna) {
        if (verificarFimDoJogo(jogo)) return;
        if (jogo.tabuleiro[linha][coluna] === "X" || jogo.tabuleiro[linha][coluna] === "O") return;
        adicionarJogada(jogo, jogo.jogadorAtual, linha, coluna);
    }

    const renderRow = (row, rowIndex) => (
        <div key={rowIndex} className="flex flex-row justify-evenly gap-2.5">
            {row.map((cell, colIndex) => (
                <div key={colIndex} className="cell" onClick={() => handleClick(rowIndex, colIndex)}>
                    {cell}
                </div>
            ))}
        </div>
    );

    return (
        <div className="p-10 text-center">
            <h1>JOGO DO GALO 🐓</h1>
            <h1 className="text-3xl font-bold mb-4">Jogador Atual: {jogo.jogadorAtual}</h1>

            <div id="tabuleiro" className="bg-black">
                <div className="flex align-middle flex-col justify-evenly h-48 m-8 items-center gap-2.5">
                    {jogo.tabuleiro.map((row, rowIndex) => renderRow(row, rowIndex))}
                </div>
            </div>

            <div className="m-8">
                <h1>
                    {verificarVencedor(jogo)
                        ? `Vencedor: ${verificarVencedor(jogo)}`
                        : verificarFimDoJogo(jogo)
                        ? 'Empate'
                        : 'Sem vencedor'}
                </h1>
            </div>
            <button onClick={reiniciarJogo} className="border-2 border-black rounded p-4">
                Reset
            </button>
        </div>
    );
}   