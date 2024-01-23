import { connect } from "react-redux";
import axios from "axios";
import products from "../products/products";
import './../styles/card.css'
import { useEffect, useState } from "react";

import Button from './button';
import Form from './form';

const Card = (props: any) => {
    


    

    return (
        <div className={`${props.layout}`}>
            <div className="container">
              <div className="row mx-auto justify-content-center">
                <div className="card w-25 m-1">
                  <div className="card-body">
                    <h3>Teste cartão 1</h3>
                    <p>conteúdo cartão 1</p>
                  </div>
                </div>
                <div className="card w-25 m-1">
                  <div className="card-body">
                    <h3>Teste cartão 2</h3>
                    <p>conteúdo cartão 2</p>
                  </div>
                </div><div className="card w-25 m-1">
                  <div className="card-body">
                    <h3>Teste cartão 3</h3>
                    <p>conteúdo cartão 3</p>
                  </div>
                </div>
              </div>
            </div>
        
        </div>

    )

}

function mapStateToProps(state: any){
    return {
        whitelabel: state.whiteLabel,
        token: state.session,
        numeroA: state.numeros,
        produtos: state.products
    }
}

export default connect(mapStateToProps)(Card);