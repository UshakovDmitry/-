transport.viewmodel.ts:29 
 POST http://rabbitmq.next.local/api/queues/%2F/TmsQueue/get net::ERR_ABORTED 401 (Unauthorized)
readFromQueue	@	transport.viewmodel.ts:29
TransportComponentViewModel	@	transport.viewmodel.ts:8
setup	@	transport.component.vue:53
Promise.then (async)		
(anonymous)	@	main.ts:13
Show 59 more frames
transport.viewmodel.ts:55 Error: Failed to fetch
    at transport.viewmodel.ts:48:17
(anonymous)	@	transport.viewmodel.ts:55
Promise.catch (async)		
readFromQueue	@	transport.viewmodel.ts:54
TransportComponentViewModel	@	transport.viewmodel.ts:8
setup	@	transport.component.vue:53
Promise.then (async)		
(anonymous)	@	main.ts:13
Show 59 more frames




import { type TransportComponentModel } from './transport.model';

export class TransportComponentViewModel {
  model: TransportComponentModel;

  constructor(model: TransportComponentModel) {
    this.model = model;
    this.readFromQueue();
  }

  setLoaders(): void {
    this.model.isTransport = false;
    this.model.isLoaders = true;
  }

  setTransport(): void {
    this.model.isLoaders = false;
    this.model.isTransport = true;
  }

  changePage(page: number): void {
    console.log(page);
  }

  readFromQueue(): void {
    const username = 'tms';
    const password = '26000567855499290979';

    fetch('http://rabbitmq.next.local/api/queues/%2F/TmsQueue/get', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        Authorization: `Basic ${btoa(`${username}:${password}`)}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        count: 1,
        ackmode: 'ack_requeue_true',
        encoding: 'auto',
        truncate: 50000,
      }),
    })
      .then(async (response) => {
        if (response.ok) {
          console.log(response.json());
          return await response.json();
        } else {
          throw new Error('Failed to fetch');
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
