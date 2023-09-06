import { type ITransport } from '../../domain/interfaces/transport.interface';
import { type ILoader } from '../../domain/interfaces/loader.interface';

interface ITransportComponentModel {
  isLoaders: boolean;
  isTransport: boolean;
  transport: ITransport[];
  loaders: ILoader[];
  headersTransport: string[];
  headersLoaders: string[];
  configTransport: any;
  configLoaders: any;
}

export class TransportComponentModel implements ITransportComponentModel {
  isLoaders: boolean;
  isTransport: boolean;
  transport: ITransport[];
  headersTransport: string[];
  headersLoaders: string[];
  loaders: ILoader[];
  configTransport: any;
  configLoaders: any;

  constructor() {
    this.isLoaders = false;
    this.isTransport = true;
    this.transport = [
      {
        model: 'Mercedes-Benz',
        number: 'A 123 AA 77',
        type: 'Газель',
        volume: '4.5',
        loadCapacity: '1.5',
        city: 'Москва',
        isActive: true,
        schedule: 'Пн-Пт 9:00-18:00',
        hasDriver: true,
      },
      {
        model: 'Ford Transit',
        number: 'B 234 BB 88',
        type: 'Грузовик',
        volume: '6.0',
        loadCapacity: '2.5',
        city: 'Санкт-Петербург',
        isActive: false,
        schedule: 'Пн-Пт 8:00-20:00',
        hasDriver: false,
      },
      {
        model: 'Volkswagen Crafter',
        number: 'C 345 CC 99',
        type: 'Минивэн',
        volume: '5.0',
        loadCapacity: '1.2',
        city: 'Новосибирск',
        isActive: true,
        schedule: 'Сб-Вс 10:00-16:00',
        hasDriver: true,
      },
      {
        model: 'Iveco Daily',
        number: 'D 456 DD 10',
        type: 'Грузовик',
        volume: '7.0',
        loadCapacity: '3.0',
        city: 'Екатеринбург',
        isActive: false,
        schedule: 'Пн-Вс 9:00-21:00',
        hasDriver: false,
      },
      {
        model: 'Renault Master',
        number: 'F 678 FF 12',
        type: 'Грузовик',
        volume: '6.5',
        loadCapacity: '2.8',
        city: 'Нижний Новгород',
        isActive: true,
        schedule: 'Пн-Пт 10:00-19:00',
        hasDriver: false,
      },
      {
        model: 'Peugeot Boxer',
        number: 'G 789 GG 13',
        type: 'Минивэн',
        volume: '4.8',
        loadCapacity: '1.8',
        city: 'Самара',
        isActive: false,
        schedule: 'Сб-Вс 11:00-17:00',
        hasDriver: true,
      },
      
    ];
    this.loaders = [
      {
        fullName: 'Иванов Иван Иванович',
        warehouseNumber: '1',
        schedule: 'Пн-Пт 9:00-18:00',
        transportNumber: 'A 123 AA 77',
        isActive: true,
      },
      {
        fullName: 'Кукин Иван Иванович',
        warehouseNumber: '1',
        schedule: 'Пн-Пт 9:00-18:00',
        transportNumber: 'A 123 AA 77',
        isActive: true,
      },
      {
        fullName: 'Сидоренко Иван Иванович',
        warehouseNumber: '1',
        schedule: 'Пн-Пт 9:00-18:00',
        transportNumber: 'A 123 AA 77',
        isActive: true,
      },
      {
        fullName: 'Капалкин Иван Иванович',
        warehouseNumber: '1',
        schedule: 'Пн-Пт 9:00-18:00',
        transportNumber: 'A 123 AA 77',
        isActive: true,
      },
      {
        fullName: 'Шарапов Иван Иванович',
        warehouseNumber: '1',
        schedule: 'Пн-Пт 9:00-18:00',
        transportNumber: 'A 123 AA 77',
        isActive: true,
      },
      
    ];

   
    
  }
}

