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
          throw new Error('Возникла ошибка при получении данных');
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
