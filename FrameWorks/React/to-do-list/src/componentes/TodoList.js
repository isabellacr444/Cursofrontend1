import "./TodoList.css"
const TodoList = ({tasks, removeTask}) =>{
    //retorna a lista de tarefas
    return(
        <ul>

            {tasks.map((task, index) => (//mapeia as tarefas e cria um item de lista para cada uma
                <li key={index}>
                    {task}
                    <button onClick={() => 
                    removeTask(index)}>Remover</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;