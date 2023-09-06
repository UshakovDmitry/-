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
