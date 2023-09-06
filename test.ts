import { test } from 'vitest';
import { TransportComponentViewModel } from './path-to-your-viewModel';
import { TransportComponentModel } from './path-to-your-model';

test('filterTableByCity filters correctly', async () => {
  const model: TransportComponentModel = {
    // инициализация вашей модели
    transport: [
      { city: 'City1', /* другие поля */ },
      { city: 'City2', /* другие поля */ },
    ],
    filteredTransport: [],
    isLoaders: false,
    isTransport: true,
  };

  const viewModel = new TransportComponentViewModel(model);
  viewModel.filterTableByCity('City1');
  
  if (!Array.isArray(viewModel.model.filteredTransport)) throw new Error('Not an array');
  if (viewModel.model.filteredTransport.length !== 1) throw new Error('Filtered incorrectly');
  if (viewModel.model.filteredTransport[0].city !== 'City1') throw new Error('City mismatch');
});
