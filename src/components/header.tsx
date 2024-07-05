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
          <h1>Header</h1>
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
