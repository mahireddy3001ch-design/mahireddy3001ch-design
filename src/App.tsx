import { RouterProvider } from 'react-router';
import { router } from './utils/routes';
import { ThemeProvider } from './utils/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;