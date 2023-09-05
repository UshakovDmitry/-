// Измените ваш метод selectCity, чтобы он обновлял filteredTransport
selectCity(city: string): void {
  console.log(city);
  this.filteredTransport = this.model.transport.filter(item => item.city === city);
  this.sortTable(this.filteredTransport, city);
}

// Измените ваш метод sortTable, чтобы он принимал массив для сортировки
sortTable(arr: any[], city: string): void {
  arr.sort((a, b) => {
    if (a[city] > b[city]) {
      return 1;
    }
    if (a[city] < b[city]) {
      return -1;
    }
    return 0;
  });
}
