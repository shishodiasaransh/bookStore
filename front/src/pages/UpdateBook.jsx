import { useEffect, useState } from "react";
import axios from "axios";
import { SERVER_URL } from "../../serverURL";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const UpdateBook = () => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const fetchBook = async () => {
    try {
      setLoading(true);
      const resp = await axios.get(`${SERVER_URL}/${id}`);
      console.log(resp.data);
      setAuthor(resp.data.author);
      setTitle(resp.data.title);
      setYear(resp.data.year);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);

  const handleUpdate = async () => {
    try {
      const data = { title, author, year };
      setLoading(true);
      const resp = await axios.put(`${SERVER_URL}/${id}`,data);
      console.log(resp.data);
      setLoading(false);
      navigate("/");
    } catch (error) {
      // console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="text-3xl bg-sky-700 text-white p-4 text-center">
        Update Book
      </h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-300 rounded-sm w-[600px] p-4 mx-auto my-4">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-600">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-400 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-600">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-400 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-600">Publish Year</label>
          <input
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="border-2 border-gray-400 px-4 py-2 w-full"
          />
        </div>
        <button
          className="p-2 bg-sky-600 m-8 text-white rounded-sm"
          onClick={handleUpdate}
        >
          Update
        </button>
      </div>
    </>
  );
};
export default UpdateBook;