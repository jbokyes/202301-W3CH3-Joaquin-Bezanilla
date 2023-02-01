import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Header } from './header';

describe('Given Header component', () => {
  describe('When new Header is instanced', () => {
    test('Then it should instance a new header class', () => {
      document.body.innerHTML = <slot></slot>;
      const mockTitle = 'Test';
      const element = new Header('slot', mockTitle);
      expect(element).toBeInstanceOf(Header);
    });

    test('Then it should render a new template', () => {
      const h1 = screen.getByRole('heading');
      expect(h1).toBeInTheDocument();
    });
  });
});
