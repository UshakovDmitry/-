  selectCity(city: string): void {
    console.log(city);
    this.sortTable(city);
  }
  sortTable(city: string): void {
    this.model.transport.sort((a, b) => {
      if (a[city] > b[city]) {
        return 1;
      }
      if (a[city] < b[city]) {
        return -1;
      }
      return 0;
    });
  }

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
      {
        model: 'Fiat Ducato',
        number: 'H 890 HH 14',
        type: 'Грузовик',
        volume: '5.7',
        loadCapacity: '1.9',
        city: 'Омск',
        isActive: true,
        schedule: 'Пн-Пт 12:00-20:00',
        hasDriver: false,
      },
      {
        model: 'Nissan NV400',
        number: 'I 901 II 15',
        type: 'Минивэн',
        volume: '5.2',
        loadCapacity: '1.7',
        city: 'Челябинск',
        isActive: false,
        schedule: 'Пн-Пт 13:00-21:00',
        hasDriver: true,
      },
      {
        model: 'Citroën Jumper',
        number: 'J 012 JJ 16',
        type: 'Грузовик',
        volume: '6.3',
        loadCapacity: '2.6',
        city: 'Ростов-на-Дону',
        isActive: true,
        schedule: 'Сб-Вс 9:00-15:00',
        hasDriver: false,
      },
      {
        model: 'Mercedes-Benz Sprinter',
        number: 'K 123 KK 17',
        type: 'Минивэн',
        volume: '4.9',
        loadCapacity: '1.4',
        city: 'Уфа',
        isActive: true,
        schedule: 'Пн-Пт 14:00-22:00',
        hasDriver: true,
      },
    ];
