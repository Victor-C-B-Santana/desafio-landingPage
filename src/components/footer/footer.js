import './footer.css';

export default function Footer() {
    return (
        <footer className='text-light'>

            <div className='containerRedes'>
                <div>
                    <img src='./assets/img/camera.png' alt='Icone de camera' />
                    <p>@siapesq</p>
                </div>

                <div>
                    <img src='./assets/img/logoWhatsapp.png' alt='Icone de camera' />
                    <p>(53) 99950-3671</p>
                </div>
                <div>
                    <img src='./assets/img/carta.png' alt='Icone de camera' />
                    <p>siapesq@gmail.com</p>
                </div>
            </div>

            <div>
                <img src='./assets/img/phytobloomLogo.png' alt='Logo da phytobloom' className='logoPhyto' />
            </div>

            <div>
                <p>Copyright © 2024 SIAPESQ | Powered by SIAPESQ</p>
            </div>

        </footer>
    );
}