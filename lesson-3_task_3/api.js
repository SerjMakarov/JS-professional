export const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';


export function makeGETRequest(url, callback) {
    let xhr;

    let p = new Promise(function(resolve, reject){
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) { 
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xhr.open('GET', url, true);

        xhr.send();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
              callback(xhr.responseText);
            }
        }

        xhr.onload = function(){
            if(xhr.status === 200){
                resolve();
            } else {
                reject();
            }
        }
    })

    p.then(function(){
        console.log(xhr.responseText);
    })

    p.catch(function(){
        console.log('Ошибка соединения с сервисом');
    })
}