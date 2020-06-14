import React from 'react';
import { cleanup, render } from '@testing-library/react';

import BreakdownInfo from './BreakdownInfo';

describe('<BreakdownInfo', () => {
  global.window.matchMedia = jest.fn(() => {
    return {
      matches: false,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  });
  afterEach(cleanup);

  const breakdownInfo = {
    breakdownType: 'year',
    breakdown: [
      {
        percentage: '85',
        key: '2011',
      },
      {
        percentage: '15',
        key: '2010',
      },
    ],
  };

  test('render the breakdown information ', () => {
    const { getByText } = render(
      <BreakdownInfo breakdownInfo={breakdownInfo} />
    );

    expect(getByText(breakdownInfo.breakdownType.toUpperCase())).toBeTruthy();
    expect(getByText(/85/)).toBeTruthy();
    expect(getByText(/2011/)).toBeTruthy();
    expect(getByText(/15/)).toBeTruthy();
    expect(getByText(/2010/)).toBeTruthy();
  });
});
