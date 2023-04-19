export function alterarToken(novoNumero: any){
    return {
        type: 'ALTERA_TOKEN',
        payload: novoNumero
    }
}

export function alterarProduct(novoProduto: any){
    return {
        type: 'ALTERA_PRODUCT',
        payload: novoProduto
    }
}

export function adicionarECPFProduct(novoProduto: any){
    return {
        type: 'ADICIONAECPF_PRODUCT',
        payload: novoProduto
    }
}

export function adicionarECNPJProduct(novoProduto: any){
    return {
        type: 'ADICIONAECNPJ_PRODUCT',
        payload: novoProduto
    }
}

export function adicionarNFEProduct(novoProduto: any){
    return {
        type: 'ADICIONANFE_PRODUCT',
        payload: novoProduto
    }
}

