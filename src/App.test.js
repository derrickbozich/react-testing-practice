import axios from 'axios';
import { render, screen, waitFor, act } from '@testing-library/react';
import App from './App';

// Reference
// https://blog.logrocket.com/testing-react-apps-jest-react-testing-library/

jest.mock('axios');

const fakeUsers = [{
  "id": 1,
  "name": "Test User 1",
  "username": "testuser1",
}, {
  "id": 2,
  "name": "Test User 2",
  "username": "testuser2",
}];


describe('App component', () => {
  test('it renders', async () => {
    axios.get.mockResolvedValue({ data: fakeUsers });
    // render(<App />);
    await act(async () => render(<App />));

    expect(screen.getByText('Users:')).toBeInTheDocument();
  });

  test('it displays a list of users', async () => {
    axios.get.mockResolvedValue({ data: fakeUsers });
    await act(async () => render(<App />));

    const userList = await waitFor(() => screen.getByTestId('user-list'));
    expect(userList).toBeInTheDocument();
  });

  test('it displays a row for each user', async () => {
    axios.get.mockResolvedValue({ data: fakeUsers });
    await act(async () => render(<App />));

    const userList = await waitFor(() => screen.findAllByTestId('user-item'));
    expect(userList).toHaveLength(2);
  });
});
