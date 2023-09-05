import { type TransportComponentModel } from './transport.model';

export class TransportComponentViewModel {
  model: TransportComponentModel;

  constructor(model: TransportComponentModel) {
    this.model = model;
    this.readFromQueue(); // Функция будет вызвана при создании экземпляра класса
  }

  setLoaders(): void {  // исправлено название функции с setLoarers на setLoaders
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
    fetch('http://rabbitmq.next.local/api/queues/%2F/TmsQueue/get', {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + btoa('username:password'),  // Замените на реальные учетные данные
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "count": 1,
        "ackmode": "ack_requeue_true",
        "encoding": "auto",
        "truncate": 50000
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Data from RabbitMQ:', data);
      // Тут вы можете добавить код для дополнительной обработки данных
    })
    .catch((error) => console.error('Error:', error));
  }
}
