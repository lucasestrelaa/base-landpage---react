import { connect } from "react-redux";
import axios from "axios";
import Card from "./card";
import { useEffect, useState } from "react";

import { alterarProduct, adicionarECPFProduct, adicionarECNPJProduct, adicionarNFEProduct } from './../actions/actions';

const Section = (props: any) => {




    switch (props.type) {
        case 'banner':
            return (
                <>
                    <div className="container text-center">
                        <div className="row">
                            <h1>section banner</h1>
                        </div>
                        <div className="row">
                            <div className="col-md-6">Imagem</div>
                            <div className="col-md-6">
                                <h2>Título</h2>
                                <p>Texto</p>
                            </div>
                        </div>
                    </div>


                </>
            )
            case 'sessao1':
                return (
                    <>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col-md-6">
                                    <h2>Título</h2>
                                    <p>Texto</p>
                                </div>
                                <div className="col-md-6">Imagem</div>
                            </div>
                        </div>
    
    
                    </>
                )
                case 'sessao2':
                    return (
                        <>
                            <div className="container text-center">
                                <div className="row">
                                    <div className="col-md-6">Imagem</div>
                                    <div className="col-md-6">
                                        <h2>Título</h2>
                                        <p>Texto</p>
                                    </div>
                                </div>
                            </div>
        
        
                        </>
                    )
                    case 'CTA':
                    return (
                        <>
                            <div className="container text-center">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h2>Chamada</h2>
                                    </div>
                                </div>
                            </div>
        
        
                        </>
                    )
        case 'cards':
            return (
                <div className="row justify-content-center">
                    <Card />

                </div>
            )
    }


    return (
        <>
            <div ></div>
        </>
    )

}
function mapDispatchToProps(dispatch: any) {
    return {
        alterarProducts(novoProduto: any) {
            //action creator
            const action = alterarProduct(novoProduto)
            dispatch(action)
        },
        adicionarECPFProducts(novoProduto: any) {
            //action creator
            console.log('functio adicionar product')
            const action = adicionarECPFProduct(novoProduto)
            dispatch(action)
        },
        adicionarECNPJProducts(novoProduto: any) {
            //action creator
            console.log('functio adicionar product')
            const action = adicionarECNPJProduct(novoProduto)
            dispatch(action)
        },
        adicionarNFEProducts(novoProduto: any) {
            //action creator
            console.log('functio adicionar product')
            const action = adicionarNFEProduct(novoProduto)
            dispatch(action)
        }
    }
}
function mapStateToProps(state: any) {
    return {
        whitelabel: state.whiteLabel,
        token: state.session,
        numeroA: state.numeros,
        produtos: state.produtos
    }
}

// mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(Section);