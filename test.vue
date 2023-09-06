import * as XLSX from 'xlsx';
import { type TransportComponentModel } from './transport.model';

export class TransportComponentViewModel {
  model: TransportComponentModel;

  constructor(model: TransportComponentModel) {
    this.model = model;
  }

  selectCity(city: string): void {
    this.filterTableByCity(city);
  }

  filterTableByCity(city: string): void {
    if (city === 'Все города') {
      this.model.filteredTransport = this.model.transport;
      return;
    }
    this.model.filteredTransport = this.model.transport.filter(
      (item) => item.city === city,
    );
  }

  setLoaders(): void {
    this.model.isTransport = false;
    this.model.isLoaders = true;
  }

  setTransport(): void {
    this.model.isLoaders = false;
    this.model.isTransport = true;
  }

  downloadLoadersAsXLSX(): void {
    const headersLoaders = [
      'ФИО',
      '№ Склада',
      'График работы',
      '№ транспорта',
      'Активность',
    ];

    const loaders = this.model.loaders;  // Предположим, что данные о загрузчиках хранятся в this.model.loaders

    const data = [headersLoaders];

    loaders.forEach(loader => {
      const row = [];
      row.push(loader.fullName);
      row.push(loader.warehouseNumber);
      row.push(loader.schedule);
      row.push(loader.transportNumber);
      row.push(loader.isActive ? 'Да' : 'Нет');
      data.push(row);
    });

    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, 'Loaders.xlsx');
  }
}
