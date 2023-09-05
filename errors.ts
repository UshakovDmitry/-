import { Client } from '@stomp/stompjs';
import { type TransportComponentModel } from './transport.model';

export class TransportComponentViewModel {
  model: TransportComponentModel;
  client: Client;  // Добавьте эту строку

  constructor(model: TransportComponentModel) {
    this.model = model;
    this.initializeStompClient();  // Добавьте эту строку
    this.readFromQueue();
  }

  initializeStompClient(): void {  // Добавьте этот метод
    this.client = new Client({
      brokerURL: 'ws://rabbitmq.next.local:15674/ws',
      connectHeaders: {
        login: 'tms',
        passcode: '26000567855499290979',
      },
    });

    this.client.onConnect = (frame) => {
      console.log('Connected:', frame);
      this.client.subscribe('/queue/TmsQueue', (message) => {
        console.log('Received:', message.body);
      });
    };

    this.client.onStompError = (frame) => {
      console.error('Broker reported error:', frame.headers['message']);
      console.error('Additional details:', frame.body);
    };

    this.client.activate();
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
    // Этот метод теперь пуст, так как все делается в initializeStompClient()
  }
}
