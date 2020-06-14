import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import PageLayout from './Layout';

describe('<Layout/>', () => {
  afterEach(cleanup);

  const history = createMemoryHistory();

  const pageContent = {
    searchInput: '11',
    children: 'Test text',
  };

  test('should render input value & children ', () => {
    const { getByTestId } = render(
      <Router history={history}>
        <PageLayout
          children={pageContent.children}
          searchInput={pageContent.searchInput}
          handleSearchChange={() => {}}
        />
      </Router>
    );
    expect(getByTestId('searchBar').value).toBe(pageContent.searchInput);
    expect(getByTestId('content')).toHaveTextContent(pageContent.children);
  });

  const inputChange = 'VH';

  test('should call handleSearchChange function with user input', (done) => {
    const handleSearchChange = (e) => {
      expect(e.target.value).toEqual(inputChange);
      done();
    };

    const { getByTestId } = render(
      <Router history={history}>
        <PageLayout
          children={pageContent.children}
          searchInput={pageContent.searchInput}
          handleSearchChange={handleSearchChange}
        />
      </Router>
    );

    const searchBar = getByTestId('searchBar');
    fireEvent.change(searchBar, {
      target: { value: inputChange },
    });
  });

  test('should render "go back" button when not in homepage', () => {
    history.push('/wines/abc');
    const { getByRole } = render(
      <Router history={history}>
        <PageLayout
          children={pageContent.children}
          searchInput={pageContent.searchInput}
          handleSearchChange={() => {}}
        />
      </Router>
    );
    expect(getByRole('button', { name: /Go Back/ })).toBeTruthy();
  });
});
