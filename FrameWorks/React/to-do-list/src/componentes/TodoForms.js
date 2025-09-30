import ".TodoForms.css";
//formulario para inserir uma tarefa 
import { useState } from "react";

//React DOM
//logica do componente
//array funcional
const TodoForm = ({addTask}) => {
    //Controle de estado
    //vetor para armazenar  dados do formulario 
    const [task, setTask] = useState("");
    //useState para armazenar dados do formulario
    //para armazenar as mudanças de estado da tela
    //task => armazena o valor da tarefa
    //setTask => atualiza o valor da tarefa

    //Função para adicionar tarefa
    const handleSubmit = (e) => {
        //Prevenir o comportamento padrão do formulário
        e.preventDefault();//previne que a pagina recarregue
        //Verificar se não está vazio
        if(task.trim() !== ""){
            addTask(task); //Adiciona Tarefa no Vetor
            setTask(""); // Limpa o campo
        }
    };
    //Renderização do formulário (view)
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Digite uma tarefa" value={task}
            onChange={(e) => setTask(e.target.value)}/>
            <button type="submit">Adicionar</button>
        </form>
    );
}

export default TodoForm;
//componente de formulario para adicionar tarefas
//pode ser reutilizado em diferentes partes da aplicação(export)