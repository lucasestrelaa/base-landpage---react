import { useEffect } from 'react';
import JSON from '../config-whitelabel.json';


let error;
let returnconfigWhitelabel: any;  
const pathname = window.location.hostname.replace('/', '');
let configsWhiteLabel: any | {};
let configWhitelabel = null;  
try{
    // const origin = window.location.origin.replace(/(^\w+:|^)\/\//, "");
    // console.log('whitelabel')

    if(pathname.includes("localhost")){
        if(!configWhitelabel){
            configWhitelabel = JSON.find((config: { identify: string; }) =>
                config.identify === "localhost"                    
            );
        }            
        // return configWhitelabel;            
    }else{
        if(!configWhitelabel){
            configWhitelabel = configsWhiteLabel.find((config: { identify: string; }) =>
                config.identify === pathname
            );
        }
    }
    // console.log(configWhitelabel)
    // if(configWhitelabel){throw new Error('#!@$');}

}catch(e){
    console.log(e)
}finally{
    if(error){
        console.log('finalizou')
    }
}
const estadoInicial = {
    apiCode: configWhitelabel.apiCode,
    descriptionParceria : configWhitelabel.descriptionParceria,
    identify: configWhitelabel.identify,
    linkFavicon: configWhitelabel.linkFavicon,
    logo: configWhitelabel.logo,
    title: configWhitelabel.title,
    urlApi: configWhitelabel.urlApi,
}

export default function(state = estadoInicial, action: any){
    // console.log(state, ' teste', action )
    switch(action.type){
        
        default:

            return {
                ...state
            }
    }

}