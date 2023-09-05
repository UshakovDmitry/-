import { type TransportComponentModel } from './transport.model';

export class TransportComponentViewModel {
  model: TransportComponentModel;
  constructor(model: TransportComponentModel) {
    this.model = model;
  }

  setLoarers(): void {
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
}
