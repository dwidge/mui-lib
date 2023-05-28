export const runWorker =
  (f: Function) =>
  (...args: any[]) =>
    new Promise<any>((res, rej) => {
      const w = `onmessage=({data})=>postMessage((${f.toString()})(...data))`;
      const worker = new Worker("data:," + w);

      worker.onmessage = (e) => {
        res(e.data);
      };
      worker.onerror = (e) => {
        rej(e);
      };
      worker.postMessage(args);
    });
