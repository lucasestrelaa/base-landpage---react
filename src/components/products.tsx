import { connect } from "react-redux";
import axios from "axios";

const Product = (props: any) => {
    const title = props.whitelabel.title
    const sessionVar = props.token


    return (
        <div>
            card
        </div>
    )

}

function mapStateToProps(state: any){
    return {
        whitelabel: state.whiteLabel,
        token: state.session,
        numeroA: state.numeros
    }
}

export default connect(mapStateToProps)(Product);