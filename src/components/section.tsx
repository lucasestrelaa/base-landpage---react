import { connect } from "react-redux";
import axios from "axios";
import Card from "./card";
import { useEffect, useState } from "react";

import { alterarProduct, adicionarECPFProduct, adicionarECNPJProduct, adicionarNFEProduct } from './../actions/actions';

const Section = (props: any) => {
    const title = props.whitelabel.title
    const urlApi = props.whitelabel.urlApi
    const sessionVar = props.token
    //certificados
    const[produtos, setProdutos] = useState([]);
    const[produtosARQ, setProdutosARQ] = useState([]); 
    const[produtosCRT, setProdutosCRT] = useState([]); 
    const[produtosCRL, setProdutosCRL] = useState([]); 
    const[produtosTOK, setProdutosTOK] = useState([]); 
    const[produtosSEM, setProdutosSEM] = useState([]); 
    const[ready, setReady] = useState(false)
    const ARQ: any = [];
    const CRT: any = [];
    const CRL: any = [];
    const TOK: any = [];
    const SEM: any = [];

    const [toogleProducts, setToogleProducts] = useState(false);
    // const [products, setProdutos] = useState([]);
    let count = 0;
    // console.log(urlApi)
    const produto = props.product+'';
    const getToken = async () => {
        let sess = await sessionVar.access_token;
        return sess;
    }
    const sessiontoken = sessionVar.access_token+'';
    
    // console.log(sessiontoken)-

    useEffect(() => {
        // console.log('product')
        // console.log(sessiontoken)
        // console.log(props.type)
        // console.log(produto)
        for (let iTentativas = 0; iTentativas < 3; iTentativas++) { 
            // setTimeout(() => {

                // console.log(props.type +" - "+sessiontoken);
                if(props.type === 'cards' && sessiontoken != ''){
                    console.log('produtos serão buscados')
                    getProducts();
                    // console.log(iTentativas);
                    iTentativas = 3;
                }
            // }, 3000);
        }
        
        
    }, [])
    // useEffect(() => {
    //     console.log(produtos);
    //     if(produtos.length !== 0){

    //     }
    // }, [produtos])
    
    
    //buscar os produtos
    async function getProducts() {
        // console.log('getProducts: '+sessiontoken)
        // console.log('====================================');
        // console.log(
        //     produto
        // );
        // console.log('==================GetProducts==================');    
        try {
            // tentativas
            const resp = await axios.get(urlApi+"/ws_produto/?rubri_inid_rubricamodulo=4",
            {   headers: {"Authorization" : `Bearer ${sessiontoken}`}, 
                params: {"produ_dmtp_certificadodigital": `${produto}`}
            });

            if(resp){
                // console.log(resp.data.detalhe[0].produtos);
                setProdutos(resp.data.detalhe[0].produtos);
                let produtosItems = resp.data.detalhe[0].produtos;

                // props.alterarProducts(resp.data.detalhe[0].produtos);

                // if(resp.data.detalhe[0].produtos[0].produ_dmtp_certificadodigital === 'ECPF'){
                //     props.adicionarECPFProducts(resp.data.detalhe[0].produtos);
                // }else if(resp.data.detalhe[0].produtos[0].produ_dmtp_certificadodigital === 'ECNPJ'){
                //     props.adicionarECNPJProducts(resp.data.detalhe[0].produtos);
                // }else if(resp.data.detalhe[0].produtos[0].produ_dmtp_certificadodigital === 'NFE'){
                //     props.adicionarNFEProducts(resp.data.detalhe[0].produtos);
                // }

                setToogleProducts(true)
            }

            
            separarProdutos(resp.data.detalhe[0].produtos);
           
            //agrupar produtos
        } catch (error) {
            
        }
        
    }

    const separarProdutos = (produtos: any) => {
        // console.log(produtos)
        count += 1;
        if(count <= 1){
            // console.log(produtos)
            // props.alterarProducts(["teste"]);
          produtos.map((element: any) => {
            // console.log(element);   
            let midiaDef = element.produ_dmtp_midia +'';
            switch (midiaDef){
              case "ARQ":
                ARQ.push(element);
                // console.log(ARQ)
                break;
              case "CRT":
                // console.log("CRT")
                CRT.push(element);
                // console.log(CRT)
                break;
              case "CRL":
                // console.log("CRL")
                CRL.push(element);
                break;
              case "TOK":
                // console.log("TOK")
                TOK.push(element);
                break;
              case "SEM":
                // console.log("SEM")
                SEM.push(element);
                break;
            }
          });
    
          setProdutosARQ(ARQ);
          setProdutosCRL(CRL);
          setProdutosCRT(CRT);
          setProdutosSEM(SEM);
          setProdutosTOK(TOK);
          setReady(true);

          exibirProdConsole();
        }
        
    }

    const exibirProdConsole = () => {
        // console.log(ARQ[0].rubri_vcds_curta)
        ARQ.map((res: any) => {
            // console.log(res.rubri_vcds_curta)
        })
    }

    const chamaArq = () => {
        let itemLayout = produto + '';
        // console.log(props.productECPF)
        if(itemLayout === "NFE"){
          return (
            <>
            {/* <CardProductsV2 item={produtosSEM} card={'4'} layout={'col-md-1'}/> */}
              <Card  item={produtosARQ} card={'1'} layout={'col-md-3'} />
              <Card  item={produtosCRL} card={'2'} layout={'col-md-3'} />
              
              <Card  item={produtosCRT} card={'3'} layout={'col-md-3'} />
  
              <Card  item={produtosTOK} card={'5'} layout={'col-md-3'} />
              {/* <Card item={produtosSEM} card={'4'} layout={'col-md-4'}/> */}
            </>
          )
        }else{
          return (
            <>
              <Card  item={produtosARQ} card={'1'} layout={'col-md-2'} />
              <Card  item={produtosCRL} card={'2'} layout={'col-md-2'} />
              <Card  item={produtosCRT} card={'3'} layout={'col-md-2'} />
              <Card  item={produtosSEM} card={'4'} layout={'col-md-2'} />
              <Card  item={produtosTOK} card={'5'} layout={'col-md-2'} />
            </>
          )
        } 
      }

    switch(props.type){
        case 'banner':
            return (
                <>
                    <div className="row">section banner</div>
                    
                </>
            )
        case 'cards':
            return (
                <div className="row justify-content-center">
                    <h1 className="text-justify">{produto}</h1>
                    {sessiontoken ? chamaArq() :null}
                    {/* {sessiontoken ? "<p>Eu existo</p>" : "<p>Eu não existo longe de você</p>"} */}
                    {/* <Card itens={CRL}></Card> */}

                </div>
            )
    }


    return (
        <>
            <p>Sections </p>
            {toogleProducts ? separarProdutos : ''}
            {/* {sessiontoken ? produtos.map((res) => {
                return(
                    <>
                        <p>{res} - Carregou</p>
                    </>
                ) 
            
                }) : 'Loading'
            } */}
            {sessiontoken ? 'token veio' : 'token não veio'}
                
            
        </>
    )

}
function mapDispatchToProps(dispatch: any){
    return {
        alterarProducts(novoProduto: any){
            //action creator
            const action = alterarProduct(novoProduto)
            dispatch(action)
        },
        adicionarECPFProducts(novoProduto: any){
            //action creator
            console.log('functio adicionar product')
            const action = adicionarECPFProduct(novoProduto)
            dispatch(action)
        },
        adicionarECNPJProducts(novoProduto: any){
            //action creator
            console.log('functio adicionar product')
            const action = adicionarECNPJProduct(novoProduto)
            dispatch(action)
        },
        adicionarNFEProducts(novoProduto: any){
            //action creator
            console.log('functio adicionar product')
            const action = adicionarNFEProduct(novoProduto)
            dispatch(action)
        }
    }
}
function mapStateToProps(state: any){
    return {
        whitelabel: state.whiteLabel,
        token: state.session,
        numeroA: state.numeros,
        produtos: state.produtos
    }
}

// mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps )(Section);