import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { AppLayout } from './layouts/AppLayout'
import { BlogPage } from './pages/BlogPage'

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/blog/:slug' element={<div>Blog:id</div>} />
        <Route path='*' element={<div>Not Found</div>} />
      </Route>
    </Routes>
  )
}

export default App
