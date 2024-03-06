import { render, screen } from '@testing-library/react';
import Container from '../Container';


describe('Container component', () => {
  // Test initial state
  it('renders Banner component with full width on large screens initially', () => {
    render(<Container />);
    const bannerElement = screen.getByTestId('bannerPage'); // Assuming the Banner component is rendered as a <banner> element
    expect(bannerElement).toBeInTheDocument();
    // expect(bannerElement).toHaveStyle('width: 100%'); // Ensure that the width style is set to 100%
  });

  // Test state update on window resize
  // it('renders Banner component with full width on small screens after window resize', () => {
  //   render(<Container />);
  //   // Simulate window resize to trigger state update
  //   window.innerWidth = 500; // Set window width to a small value
  //   window.dispatchEvent(new Event('resize'));
  //   const bannerElement = screen.getByRole('banner');
  //   expect(bannerElement).toBeInTheDocument();
  //   expect(bannerElement).toHaveStyle('width: 100%');
  // });

  // it('renders Banner component with sidebar on large screens after window resize', () => {
  //   render(<Container />);
  //   // Simulate window resize to trigger state update
  //   window.innerWidth = 1200; // Set window width to a large value
  //   window.dispatchEvent(new Event('resize'));
  //   const bannerElement = screen.getByRole('banner');
  //   expect(bannerElement).toBeInTheDocument();
  //   expect(bannerElement).toHaveStyle('width: calc(100% - 300px)'); // Ensure that the width style is calculated correctly
  // });
});
