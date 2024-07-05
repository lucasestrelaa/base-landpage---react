import "./../styles/header.css";
import { connect } from "react-redux";

const Header = (props: any) => {
  return (
    <div className="Header">
      <div className="sobMenu">
        <div className="container typography-white"><p>sobmenu</p></div>
      </div>
      <div className="menu">
        <div className="container typography-white">
            <div className="row">
                <div className="col-md-6">
                <h1>Header</h1>
                </div>
                <div className="col-md-6">
                    <ul className="menu-itens">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#sobre">Sobre</a></li>
                        <li><a href="#produtos">Produtos</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </div>
            </div>
          
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state: any) {
  return {
    whitelabel: state.whiteLabel,
    token: state.session,
    numeroA: state.numeros,
    produtos: state.products,
  };
}

export default connect(mapStateToProps)(Header);
