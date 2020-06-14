import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import WineList from './WineList';

describe('<WineList/>', () => {
  global.window.matchMedia = jest.fn(() => {
    return {
      matches: false,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  });
  afterEach(cleanup);
  const history = createMemoryHistory();

  const wineData = [
    {
      lotCode: '11YVCHAR001',
      description: '2011 Yarra Valley Chardonnay',
    },
  ];
  const searchInput = '';

  test('should render lot code and description of the wine', () => {
    const { getByText } = render(
      <Router history={history}>
        <WineList winesData={wineData} searchInput={searchInput} />
      </Router>
    );

    expect(getByText('11YVCHAR001')).toBeTruthy();
    expect(getByText('2011 Yarra Valley Chardonnay')).toBeTruthy();
  });
});
