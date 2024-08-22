export default function Page2() {
    return (
        <section className="conteudo" id='page2'>

            {
                (window.innerWidth < 1000) ?
                    <h2 className='fs-1 mt-4'>
                        Possibilitamos o monitoramento de plantas aquáticas
                    </h2> : ''
            }
            <div>
                <img src="./assets/img/planta.png" alt="imagem de uma planta e sua raíz" />
            </div>

            <div className='fs-5 informacoes'>
                {
                    (window.innerWidth < 1000) ?
                        ''
                        :
                        <h2 className='fs-1'>
                            Possibilitamos o monitoramento de plantas aquáticas
                        </h2>
                }

                <p>
                    <img src="./assets/img/monitor.png" alt='Icone de Monitor' />
                    <span>Plataforma web</span>
                </p>
                <p>
                    <img src="./assets/img/binoculos.png" alt='Icone de um binóculos' />
                    <span>Monitora e prevê a proliferação de plantas aquáticas</span>
                </p>
                <p>
                    <img src="./assets/img/engrenagem.png" alt='Icone de uma engrenagem' />
                    <span>Gestão eficiente e oportuna da vegetação.</span>
                </p>
                <p>
                    <img src="./assets/img/doc.png" alt='Icone de um documento' />
                    <span>Planejamento de intervenções de maneira eficiente</span>
                </p>
            </div>
        </section>
    );
}