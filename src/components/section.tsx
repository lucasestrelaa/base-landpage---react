import { connect } from "react-redux";
import axios from "axios";
import Card from "./card";
import "./../styles/section.css";
import { useEffect, useState } from "react";

import {
  alterarProduct,
  adicionarECPFProduct,
  adicionarECNPJProduct,
  adicionarNFEProduct,
} from "./../actions/actions";

const Section = (props: any) => {
  switch (props.type) {
    case "banner":
      return (
        <>
          <div className="text-center" id="home">
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div
                  className="carousel-item active"
                  style={{
                    backgroundImage:
                      'url("https://cdn.pixabay.com/photo/2015/11/19/08/48/banner-1050617_1280.jpg")',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: 600,
                  }}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6 typography-white">
                        <h1>Teste de site com carrousel - 1</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="carousel-item"
                  style={{
                    backgroundImage:
                      'url("https://cdn.pixabay.com/photo/2015/09/17/10/31/banner-943868_1280.jpg")',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: 600,
                  }}
                ></div>
                <div
                  className="carousel-item"
                  style={{
                    backgroundImage:
                      'url("https://img.freepik.com/fotos-gratis/fundo-de-banner-de-luxo-perfeito-para-canva_1361-3594.jpg?w=1060&t=st=1720199967~exp=1720200567~hmac=a6704310764cfd6a57a6c68956e20e9e382e72aa41efdab9a51c29a02205f1b5")',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: 600,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </>
      );
    case "sessao1":
      return (
        <>
          <div className="section-a" id="sobre">
            <div className="container text-center pt-70 pb-70 ">
              <div className="row pi-180">
                <div className="col-md-6">
                  <h2>Título</h2>
                  <p>Texto</p>
                </div>
                <div className="col-md-6">Imagem</div>
              </div>
            </div>
          </div>
        </>
      );
    case "sessao2":
      return (
        <>
          <div className="section-b" >
            <div className="container text-center pt-70 pb-70">
              <div className="row pi-180">
                <div className="col-md-6">Imagem</div>
                <div className="col-md-6">
                  <h2>Título</h2>
                  <p>Texto</p>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    case "CTA":
      return (
        <>
          <div className="section-a" id="contato">
            <div className="container text-center pt-70 pb-70">
              <div className="row pi-80">
                <div className="col-md-12">
                  <h2>Chamada</h2>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    case "cards":
      return (
        <>
          <div className="section-b" id="produtos">
            <div className="container text-center pt-70 pb-70 ">
              <Card layout={props.layout} />;
            </div>
          </div>
        </>
      );
  }

  return (
    <>
      <div></div>
    </>
  );
};
function mapDispatchToProps(dispatch: any) {
  return {
    alterarProducts(novoProduto: any) {
      //action creator
      const action = alterarProduct(novoProduto);
      dispatch(action);
    },
    adicionarECPFProducts(novoProduto: any) {
      //action creator
      console.log("functio adicionar product");
      const action = adicionarECPFProduct(novoProduto);
      dispatch(action);
    },
    adicionarECNPJProducts(novoProduto: any) {
      //action creator
      console.log("functio adicionar product");
      const action = adicionarECNPJProduct(novoProduto);
      dispatch(action);
    },
    adicionarNFEProducts(novoProduto: any) {
      //action creator
      console.log("functio adicionar product");
      const action = adicionarNFEProduct(novoProduto);
      dispatch(action);
    },
  };
}
function mapStateToProps(state: any) {
  return {
    whitelabel: state.whiteLabel,
    token: state.session,
    numeroA: state.numeros,
    produtos: state.produtos,
  };
}

// mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(Section);
