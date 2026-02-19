import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
const Todo = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

 
  

 

  const addTodo = () => {
    if (input == "") return;

    if(isEdit){


      setInput("Edited")
      setIsEdit(false);
      setInput('');


    }



    const data = {
      id: Date.now(),
      text: input,
    };

    setTodo([...todo, data]);

    setInput("");

     console.log(todo);
  };

  const deleteOne = (id) => {
    const filtered = todo.filter((item, i) => {
      return item.id !== id;
    });

    setTodo(filtered);
  };

  const edit = (id) => {

    const orange = todo.find((item)=> item.id === id)

    setInput(orange.text);
    setIsEdit(true);
    setIsEdit(id)
    
    
  };

  return (
    <>
      <div className="min-h-screen bg-black flex justify-center">
        <div className="w-full md:w-4/5 lg:w-1/2 bg-gradient-to-br from-blue-500 to-indigo-600 p-6">
          <div className="bg-[#232a45] min-h-[94vh] rounded-2xl flex flex-col items-center gap-6 pt-6">
            <h1 className="text-white text-4xl underline font-semibold">
              Todo List
            </h1>

            <ul className="w-full grid gap-5 justify-items-center px-4">
              {todo.map((item, index) => {

             
                
                return (
                  <li className="flex items-center gap-5 w-4/5" key={item.id}>
                    <div className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-500 text-white text-xl p-4 rounded-lg">
                      {item.text}
                    </div>

                    <div className="flex gap-5 text-white text-2xl">
                      <span className="hover:text-yellow-400 cursor-pointer">
                        <FaEdit onClick={() => edit(item.id)} />
                      </span>
                      <span className="hover:text-red-500 cursor-pointer">
                        <MdDeleteForever onClick={() => deleteOne(item.id)} />
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 w-3/4 bg-gradient-to-r from-indigo-600 to-purple-500 flex items-center p-1 rounded-lg">
              <input
                type="text"
                placeholder="Enter your item..."
                className="flex-1 p-4 bg-[#232a45] text-white text-lg outline-none rounded-l-lg placeholder:text-gray-400"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />

              {isEdit ? (
                
                  <FaEdit className="w-16 text-white text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 rounded-r-lg"
                  onClick={addTodo} />
               
              ) : (
                <button
                  className="w-16 text-white text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 rounded-r-lg py-4"
                  onClick={addTodo}
                >
                  Add
                </button>
              )}
            </div>

            {/* Delete All Button */}
            <div className="pb-20">
              <button
                className="px-10 py-3 bg-white text-[#232a45] rounded-lg font-bold hover:scale-105 transition"
                onClick={() => setTodo([])}
              >
                Delete List
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
