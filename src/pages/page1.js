export default function Page1() {

    return (
        <section className="text-light conteudo" id='page1'>
            <div>
                <h2>
                    <img src="./assets/img/phytobloom.png" alt="Phytobloom escrito em caixa alta"/>
                </h2>

                <p className='fs-5'>Com PHYTOBLOOM VISION é possível identificar a proliferação de plantas aquáticas garantindo uma gestão eficiente e oportuna da vegetação.</p>

                {/* eslint-disable-next-line */}
                <button className='btn btn-outline-light btn-lg rounded-pill'>Começe agora</button>
            </div>
        </section>
    )
}