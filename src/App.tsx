import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Post from './pages/Post';
import Resume from './pages/Resume';
import Write from './pages/Write';
import Header from './components/Header';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router basename={'/CNU_Blog/'}>
        <Routes>
          <Route element={<Header />}>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/resume" element={<Resume />} />
            </Route>
            <Route path="/posts/:postId" element={<Post />} />
          </Route>
          <Route path="/Write" element={<Write />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
