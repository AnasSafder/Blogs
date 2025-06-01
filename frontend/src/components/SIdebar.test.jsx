import { render, screen, waitFor } from '@testing-library/react';
import App from '../app';
import { vi } from 'vitest';
import api from '../api/axios';

vi.mock('../api/axios', () => ({
  default: {
    get: vi.fn(() => Promise.resolve({
      data: { id: 1, name: 'Mock User', picture: 'mock.jpg' }
    }))
  }
}));

test('fetches and displays user on sidebar', async () => {
  render(<App />);
  await waitFor(() => {
    expect(screen.getByText(/mock user/i)).toBeInTheDocument();
  });
});
