async function retryRequest(promiseFunc, nrOfRetries) {
    let successful = false;
    let count = 0
    const promise = new Promise((resolve, reject) => {
        while(!successful &&  count < nrOfRetries) {
            promiseFunc().then((response) => {
                successful = typeof(response) == "string" ? true : false;
                if(successful) {
                    resolve("successful");
                }
            })
            .catch(err => {
                successful = false;
                //reject(err);
            })
            count++;
        }
        reject("failed");
    })
    return promise;
  }
          
  let hasFailed = false;
  function getUserInfo() {
    return new Promise((resolve, reject) => {
      if(!hasFailed) {
        hasFailed = true;
        reject("Exception!");
      } else {
        resolve("Fetched user!");
      }
    });
  }
  let promise = retryRequest(getUserInfo, 3);
  if(promise) {
    promise.then((result) => console.log(result))
    .catch((error) => console.log("Error!"));
  }
  module.exports.retryRequest = retryRequest;