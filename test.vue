import { TransportComponentModel } from './transport.model'; // Предполагается, что вы импортируете вашу модель

export class TransportComponentViewModel {
  model: TransportComponentModel;
  isSortedInAscendingOrder: boolean = true; // Новое свойство для отслеживания порядка сортировки

  constructor(model: TransportComponentModel) {
    this.model = model;
  }

  selectCity(city: string): void {
    this.filterTableByCity(city);
  }

  filterTableByCity(city: string): void {
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

  changePage(page: number): void {
    console.log(page);
  }

  readFromQueue(): void {
    // ... (Как в вашем примере)
  }

  private getCurrentDayAndTimeInKZ() {
    const dateInKZ = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Almaty" }));
    const currentDay = dateInKZ.getDay();
    const currentTime = dateInKZ.getHours() * 60 + dateInKZ.getMinutes();
    return { currentDay, currentTime };
  }

  private isOperatingTodayAndNow(schedule: string, currentDay: number, currentTime: number): boolean {
    // Здесь будет ваша логика для анализа строки расписания
    // ...

    return true; // Вернуть true, если работает сегодня и сейчас
  }

  sortTransportBySchedule(): void {
    const { currentDay, currentTime } = this.getCurrentDayAndTimeInKZ();
    
    this.model.filteredTransport.sort((a, b) => {
      const aOperating = this.isOperatingTodayAndNow(a.schedule, currentDay, currentTime) ? 1 : 0;
      const bOperating = this.isOperatingTodayAndNow(b.schedule, currentDay, currentTime) ? 1 : 0;

      return (bOperating - aOperating) * (this.isSortedInAscendingOrder ? 1 : -1);
    });
    
    this.isSortedInAscendingOrder = !this.isSortedInAscendingOrder; // Переключение порядка сортировки
  }
}

