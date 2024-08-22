export default function Page4() {

    return (
        <section className="text-light conteudo" id='page4'>

            {(window.innerWidth < 1000)
                ? <div className="media-container">
                    <div className="backgroundContainer"></div>
                    <div className="informacao">
                        <p className='fs-5'>A plataforma PHYTOBLOOM VISION proporciona mapas detalhados e em tempo real, permitindo o monitoramento contínuo e a previsão da proliferação de plantas aquáticas. Nossos mapas facilitam a tomada de decisões e o planejamento de intervenções de maneira eficiente.</p>
                    </div>
                </div>
                : <div className="backgroundContainer">
                    <div className='greenBlock rounded-4'>
                        <p className='fs-5'>A plataforma PHYTOBLOOM VISION proporciona mapas detalhados e em tempo real, permitindo o monitoramento contínuo e a previsão da proliferação de plantas aquáticas. Nossos mapas facilitam a tomada de decisões e o planejamento de intervenções de maneira eficiente.</p>
                    </div>
                    {/* eslint-disable-next-line */}
                    <button className='btn btn-outline-light btn-lg rounded-pill'>Começe agora</button>
                </div>
            }

        </section>
    )
}