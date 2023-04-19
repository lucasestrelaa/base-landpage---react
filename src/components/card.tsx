import { connect } from "react-redux";
import axios from "axios";
import products from "../products/products";
import './../styles/card.css'
import { useEffect, useState } from "react";

import Button from './button';
import Form from './form';

const Card = (props: any) => {
    const title = props.whitelabel.title
    const sessionVar = props.token
    const product = props.product;
    let preco : any;
    const [precoPor, setPrecoPor] = useState("");
    const [precoDe, setPrecoDe] = useState("");
    const [titulo, setTitulo] = useState('');
    const [texto, setTexto] = useState('');
    const [btn, setBtn] = useState('');
    const[isOpen, setIsOpen] = useState(false);
    const [cardStyle, setCardStyle] = useState('');
    const [hiddenDesconto, setHiddenDesconto] = useState(false)
    const[ready, setReady] = useState(false);
    // console.log(props.item)
    let descricaoInicial: any, valueInicial : any;



    useEffect(() => {
      // setInterval(() => {
        if(props.item[0]){
          // console.log(item)
          getPrice(descricaoInicial, valueInicial);
          setReady(true);
        }
      // }, timeout);
        

      
    }, [])
    

    if(product !== undefined){
        console.log(product)
    }
    // console.log(props.item[0].rubri_vcds_curta)
    const tooglePopup = () => {
        console.log("abriu o formulário");
        setIsOpen(!isOpen);
      }

    const reloadValues = (value: any, descricao: any, valor: any) => {
        getPrice(descricao, value);
    }

    const bestProduct = (value: any) => {

    }

    const getPrice = (descricao: any, value: any) => {
        console.log(descricao)
        if(descricao === undefined || value === undefined){
            if(props.item[0].produ_dmvl_precocomdesconto){
              setPrecoDe(parseFloat(props.item[0].produ_dmvl_precovenda).toFixed(2).toString().replace(".", ","));
              preco = parseFloat(props.item[0].produ_dmvl_precocomdesconto);
              setPrecoPor(parseFloat(preco).toFixed(2).toString().replace(".", ","));
              setHiddenDesconto(true)
            }else{
              preco = parseFloat(props.item[0].produ_dmvl_precovenda);
              setPrecoPor(parseFloat(preco).toFixed(2).toString().replace(".", ","));
              setHiddenDesconto(false)
            }
            setTitulo(props.item[0].rubri_vcds_curta);
            setTexto(props.item[0].rubri_txds_conteudo);
            setBtn(props.item[0].rubri_inid_rubricaproduto);
            bestProduct(props.item[0].produ_dmsn_destaque);
          }else{
            if(props.item[value].produ_dmvl_precocomdesconto){
              setPrecoDe(parseFloat(props.item[value].produ_dmvl_precovenda).toFixed(2).toString().replace(".", ","));
              preco = parseFloat(props.item[value].produ_dmvl_precocomdesconto);
              setPrecoPor(parseFloat(preco).toFixed(2).toString().replace(".", ","));
              setHiddenDesconto(true)
            }else{
              preco = parseFloat(props.item[value].produ_dmvl_precovenda);
              setPrecoPor(parseFloat(preco).toFixed(2).toString().replace(".", ","));
              setHiddenDesconto(false)
            }
            setTitulo(props.item[value].rubri_vcds_curta);
            setTexto(props.item[value].rubri_txds_conteudo);
            setBtn(props.item[value].rubri_inid_rubricaproduto);
            bestProduct(props.item[0].produ_dmsn_destaque);
          }
    }
    

    return (
        <div className={`${props.layout}`}>
            {isOpen && <Form HandleClose={tooglePopup} 
                  content={<div>
                      <h2>Texto</h2>
                      <p>Formulário</p>
                    </div>}
                    idCertificado = {btn} titulo={titulo}  />}

            {props.item[0] ?  
    
                <div className='Card-Products'>
                     <h2 className='Card-Title-Products'>{titulo}</h2>
                     <p className='Card-Text'>{texto}</p>
                     <hr></hr>
                     <select onChange={(value) => reloadValues(value, props.item[0].rubri_vcds_curta, value.target.value)} id={props.item[0].rubri_vcds_curta}>
                        {props.item.map((response: any, index: any) => {
                            return <option key={index} value={index}>{response.produ_inqt_diasvalidade/365} Ano(s)</option> /*response.rubri_inid_rubricaproduto*/
                        })}
                    </select>
                    <p className='Card-price'>Escolha o tempo do certificado</p>
                    {hiddenDesconto?
                    <>
                    <p className='Card-Price old'>R$ {precoDe}</p>
                    <p className='Card-Price new'>R$ {precoPor}</p>
                    </>
                    :
                    <>
                    <p className='Card-Price new only'>R$ {precoPor}</p>
                    
                    </>
                    }
                    {/* <p className='Card-price'>{planoPag}</p> */}
                    <div className='Card-Button'>
                        <Button name="Comprar" click={tooglePopup}/>
                    {/* <Button btnProduct click={tooglePopup} labelBtn='Comprar' function='tooglePopup' destaque={`${props.item[0].produ_dmsn_destaque === 'S'? 'btnProductDestaque' : ''}`}/> */}
                    </div>
                 {/* <Buttons textoBtn = {'Comprar'} idCertificado = {item.rubri_inid_rubricaproduto} onClick={tooglePopup}/> */}
                     
                </div>
            
            : ''}
        
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