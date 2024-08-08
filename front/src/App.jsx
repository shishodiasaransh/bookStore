import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import AddBook from './pages/AddBook';
import ShowBook from './pages/ShowBook';
import UpdateBook from './pages/UpdateBook';
import RemoveBook from './pages/RemoveBook';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/books/add' element={<AddBook/>}/>
      <Route path='/books/:id' element={<ShowBook/>}/>
      <Route path='/books/remove/:id' element={<RemoveBook/>}/>
      <Route path='/books/update/:id' element={<UpdateBook/>}/>
    </Routes>
  )
}
export default App