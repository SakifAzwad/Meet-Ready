import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import EventCard from '../EventCard';

const queryClient = new QueryClient();

describe('EventCard Component', () => {
  it('renders FaGear icon', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <EventCard event={{}} />
      </QueryClientProvider>
    );
    
    const gearIcon = screen.getByTestId('faGearIcon');
    expect(gearIcon).toBeInTheDocument();
  });
});
