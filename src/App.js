import { Table } from "react-bootstrap";
import { useEffect,useState } from "react";
function App() {
  const [Todos,setTodos] = useState([]);
  const [newTodo,setNewTodo] = useState('');
  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(Todos));
    // console.log(Todos.splice(1,1))
  },[Todos])


  const deleteHandler=(key)=>{
    // setTodos(Todos)
    Todos.splice(Todos.indexOf(key),1)
    setTodos(Todos)
  }

  const btnHandler=()=>{
    if (newTodo !== ""){
    const list = Todos;
    list.push(newTodo)
    setTodos(list)
    setNewTodo("")
  }}
  
  return (
    <div className="modal modal-sheet position-center d-block bg-body-secondary p-3">
      <div className="px-1 py-2 mx-1 my-2 bg-white rounded-3 shadow ">
        <div className="text-center h1">TODO APP</div>
        <div className="text-center h6 text-secondary">By shreekanth</div>
      </div>
      <div className="px-1 py-2 mx-1 my-2 bg-white rounded-3 shadow flex flex-row ">
        <div className=" mx-1 px-1 row">
          <div className="col-md-10 col-sm-10 my-1 py-1">
            <input type="todo" onChange={(e)=>{setNewTodo(e.target.value)}} className="form-control w-100 " value={newTodo} placeholder="Enter Todo"/>
          </div>
          <div className="col-md-2 col-sm-2 my-1 py-2">
            <button id="add" onClick={btnHandler} className="btn btn-outline-success w-100">Add</button>
          </div>
        </div>
        {/* <form class="form-inline">
          <div class="form-group mb-2">
            <label for="staticEmail2" class="sr-only">Email</label>
            <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com"/>
          </div>
          <div class="form-group mx-sm-3 mb-2">
            <label for="inputPassword2" class="sr-only">Password</label>
            <input type="password" class="form-control" id="inputPassword2" placeholder="Password"/>
          </div>
          <button type="submit" class="btn btn-primary mb-2">Confirm identity</button>
        </form> */}
      </div>
      <div className="px-1 py-2 mx-1 my-2 bg-white rounded-3 shadow overflow-auto h-sm-75 h-lg-50" style={{height:"70%"}} >
        <Table className="my-3 p-auto" striped bordered hover>
        <tbody className="list-group list-group-numbered">         
              {Todos.map((data,key) => (

                  <tr key={key} className="px-auto h-2 py-1 my-1 list-group-item">
                    {data} <button name={data} className="btn btn-outline-danger position-absolute m-auto p-auto
                     end-0" onClick={(e)=>{deleteHandler(data)}}>delete</button>
                  </tr>
                
                ))}
        </tbody>
        </Table>
      </div>
    </div>
  );
}

export default App;
