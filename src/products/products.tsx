// tipo  do produto e o array(produto)
const estadoInicial = {
    // type_product: "",
    product : [],
}

export default function(state = estadoInicial, action: any){
    console.log(state, ' teste', action )
    switch(action.type){
        // case ('ALTERA_PRODUCT'):
        //     return {
        //         ...state,
        //         // type_product: action.payload.type_product,
        //         product : action.payload,
        //     }

        case ('ADICIONAECPF_PRODUCT'):
            return {
                //...state,
                // type_product: action.payload.type_product,
                productECPF : action.payload,
            }
        case ('ADICIONAECNPJ_PRODUCT'):
            return {
                //...state,
                // type_product: action.payload.type_product,
                productECNPJ : action.payload,
            }
        case ('ADICIONANFE_PRODUCT'):
            return {
                //...state,
                // type_product: action.payload.type_product,
                productNFE : action.payload,
            }
        default:
            return {
                ...state,
                // type_product: "",
                product : [],
            }

    }
    console.log(state, ' teste', action )
}