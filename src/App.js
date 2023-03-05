import { Fragment, useCallback, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [work, setWork] = useState('')
  const [todos, setTodos] = useState([])
  const handleDeleteJob = (id) => {
    toast.success("delete todo succeed!")
    setTodos(prev => prev.filter(item => item.id !== id))
  }
  const handleAdd = () => {
    if (todos?.some(item => item.id === work?.replace(/\s/g, ''))) {
      toast.warning("work has been added before!")
    } else {
      toast.success("create new todo succeed!")
      setTodos(prev => [...prev, { id: work?.replace(/\s/g, ''), job: work }])
      setWork('')
    }
  }
  return (
    <Fragment>
      <div className="gap-8 flex-col flex h-screen items-center border border-red-500 justify-center">
        <div className="flex gap-8">
          <input onChange={e => setWork(e.target.value)}
            value={work}
            type="text"
            className="outline-none border border-blue-600 px-4 py-2 w-[400px]"
          >
          </input>
          <button
            onClick={handleAdd}
            type="button"
            className="outline-none px-4 py-2 bg-blue-500 rounded-md text-white"
          >
            Add
          </button>
        </div>
        <div>
          <h3 className="font-bold text-xl">Content:</h3>
          <ul>
            {todos?.map((item) => {
              return (
                <li key={item.id} className='flex gap-10 items-center'>
                  <span>{item.job}</span>
                  <span onClick={() => handleDeleteJob(item.id)} className="cursor-pointer"> X</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </Fragment>
  );
}

export default App;
