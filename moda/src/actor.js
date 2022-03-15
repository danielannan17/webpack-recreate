class Actor {
  sendData(data) {
    let generatorWorker = new Worker(new URL('modb/dist/umd/worker.min.js', import.meta.url));

    return new Promise(function (resolve, reject) {
      generatorWorker.onmessage = function (event) {
        if (event.data != null && event.data.error) {
          reject(event.data.error);
        } else if (event.data != null) {
          resolve(event.data);
        }
        generatorWorker.terminate();
      };

      generatorWorker.onerror = function (error) {
        reject(error);
        generatorWorker.terminate();
      };

      generatorWorker.postMessage(data);
    });
  }
}

export default Actor;
