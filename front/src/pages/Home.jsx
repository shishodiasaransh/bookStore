import axios from "axios";
import Spinner from "../components/Spinner"
import {useState, useEffect} from 'react';
import {SERVER_URL} from '../../serverURL';
import {Link} from "react-router-dom";
import { MdOutlineAddBox,MdOutlineDelete } from "react-icons/md";

const Home = () => {
  const [books,setBooks] = useState([]);
  const [countBook,setCountBook] = useState();
  const [loading,setLoading] = useState(false);

  const fetchBooks = async() =>{
    try {
      setLoading(true);
      const resp = await axios.get(SERVER_URL);
      console.log(resp.data);
      setCountBook(resp.data.length);
      setBooks(resp.data.datat);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBooks();
  },[]);

  return (
    <div className="p-4 ">
      <div className="flex justify-between items-center bg-red-500">
        <h1 className="text-3xl my-8 ">
          Book List
        </h1>
        <Link to ="/books/add">
          <MdOutlineAddBox className="text-sky-800 text-4xl"/>
        </Link>
        
      </div>
      {
          loading ? <Spinner/> :
          (
            <table className="w-full border-spacing-2">
              <thead>
                <tr>
                  <th className="border rounded-md border-slate-800">No.</th>
                  <th className="border rounded-md border-slate-800">Title</th>
                  <th className="border rounded-md border-slate-800">Author</th>
                  <th className="border rounded-md border-slate-800">Year</th>
                  <th className="border rounded-md border-slate-800">Operations</th>
                </tr>
              </thead>
              <tbody>
                {
                  books.map((book,index)=> (
                    <tr className="h-5 border border-slate-700 rounded-md text-center">
                      <td>{index+1}</td>
                      <td>{book.title}</td>
                      <td>{book.author}</td>
                      <td>{book.year}</td>
                      <td>
                    <div className="flex justify-center gap-x-4">
                      <Link to={`/books/${book._id}`}>
                       Show
                      </Link>
                      <Link to={`/books/update/${book._id}`}>
                        Edit
                      </Link>
                      <Link to={`/books/remove/${book._id}`}>
                        Delete
                      </Link>
                    </div>
                  </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          )
        }
    </div>
  )
}
export default Home