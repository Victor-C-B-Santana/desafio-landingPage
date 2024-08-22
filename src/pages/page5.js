export default function Page3() {
    return (
        <section className="conteudo" id='lastPage'>
            <div className="p-5">
                <h2 className="fs-1">Entre em contato conosco</h2>
            </div>
            <div>
                <form className="container">
                    <div className="row mb-4">
                        <div className="col">
                            <label for="inpt_nome" className="form-label">Nome</label>
                            <input type="text" className="form-control" id="nome" aria-describedby="emailHelp" placeholder="Nome" />
                        </div>
                        <div className="col">
                            <label for="inpt_password" className="form-label">Sobrenome</label>
                            <input type="password" className="form-control" id="inpt_password" placeholder="Sobrenome" />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label for="inpt_email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inpt_email" placeholder="Email" />
                    </div>

                    <div className="input-group d-flex flex-column w-100">
                        <label for="textArea" className="form-label">Mensagem</label>
                        <textarea className="form-control mb-3 w-100" aria-label="With textarea" id="textArea" rows={6} placeholder="Mensagem"></textarea>
                    </div>
                </form>
            </div>

        </section>
    );
}