// Testing Header

import { screen } from '@testing-library/dom';
import '@testing-library/dom';
import { Component } from '../component/component';
import { Header } from './header';

describe('Given header component', () => {
  test('should first', () => {
    document.body.innerHTML = `<slot></slot>`;
    const mockTitle = 'Test';
    const element = new Header(`slot`, mockTitle);
    expect(element).toBeInstanceOf(Component);
    const h1 = screen.getByText('header');
  });
});
