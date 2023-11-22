import Logo from './img_home/logo.png'
import Styles from './css/Header.module.css'
import { Link } from "react-router-dom";

function Header(){
    return(
        <header>
            <nav className={Styles.ContReparo}>
                <img src={Logo} alt='logo'/>

                <div className={Styles.ButReparo}>
                    <Link to='/Main'>
                        <button>
                            Reparador
                        </button>
                    </Link>
                    <Link to='/MainCliente'>
                        <button>
                            Preciso de reparo
                        </button>
                    </Link>
                    
                </div>
            </nav>
            
            <nav className={Styles.BtnConta}>
                <Link to='/PerfilPrestador'>
                <button>
                    Entrar
                </button>
                </Link>
                <Link to='/PerCliente'>
                <button>
                    Cadastre-se
                </button>
                </Link>
            </nav>
            
        </header>
    )
}

export default Header;