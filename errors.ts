export class TransportComponentViewModel {
  model: TransportComponentModel;
  constructor(model: TransportComponentModel) {
    this.model = model;
    this.readFromQueue();  // Вызов функции при инициализации ViewModel
  }

  readFromQueue(): void {
    const username = "your_username";
    const password = "your_password";
    
    fetch('http://rabbitmq.next.local/api/queues/%2F/TmsQueue/get', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${btoa(`${username}:${password}`)}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "count": 1,
        "ackmode": "ack_requeue_true",
        "encoding": "auto",
        "truncate": 50000
      })
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to fetch');
      }
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
  }

  // ... ваш остальной код
}

