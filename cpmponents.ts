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

