import axios from 'axios/index';

export function getDataService(){
    return new Promise(((resolve, reject)=>{
        axios({
            method: 'GET',
            url: 'http://aathiagathiar.com/api/news/',
            timeout: 60000
        }).then((res)=>{
            resolve(res);
            console.log("SUCCESS", res);
        }).catch((error)=>{
            reject(error);
        })
    }));
}
