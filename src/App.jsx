import { useState, useEffect } from 'react'
import styles from './App.module.scss'
import React from 'react'
import SearchBar from './components/SearchBar'
import AddTaskButton from './components/AddTaskButton'
import TaskList from './components/TaskList'
import TimerDisplay from './components/TimerDisplay'
import TimerControl from './components/TimerControl'
import TimerLog from './components/TimerLog'
import Header from './components/Header'
import Footer from './components/Footer'
import { BsStopwatch } from 'react-icons/bs'

//*todo: Ao clicar no botão de editar:
//*:     |
//*:     `-> 1 - Os textos simples, "nome" e "tempo", presentes na barra da task são substituídos
//*:         |  por inputs, sendo que "nome" se torna input do tipo "text" e "tempo", input dodo
//*:        |   tipo "time". 
//*:       |
//*todo:   `-> 1.1 - Estilizar os inputs 
//!                   `---> Continuar trabalhando os inputs em Task.module.scss. O problema tem 
//!                         sido conter todos os itens dentro da task, quando o modo de edição é 
//!                         acionado.

//*todo:     2 - O botão de edit se transforma em um sinal de "tick" (sinal de certo). Esse novo
//*todo:    |   sinal, a ser clicado, tem o comportamento de:  
//*todo:   | 
//*todo:   `-> 2.1 - Surge um modal que pergunta ao usuário se ele tem certeza que quer fazer a 
//*todo:            edição da task. Esse modal tem dois botões: "sim" e "não".

//*todo:        2.2 - Se o sim é clicado no modal, será enviada uma requisição do tipo PATH para a 
//*todo:            editar a task. Se o não é que for clicado, o modal será fechado.

//*todo:        2.3 - O botão tick volta a ser o botão de edit

//*todo:        2.4 - Os inputs de text e time voltam a ser textos simples na barra da task


var TestTaskList = [
  {
  name: '',
  plannedTime: {
              hours: 0,
              minutes: 0,
              seconds: 0
            }
  }
]

function App() {
  
  const [tasks, setTasks] = useState(TestTaskList)
  
  const getTaskList = async () => {

    try {
      const response = await fetch('http://localhost:8080/task');
      
      if (!response.ok) {
        throw new Error('Erro ao buscar task');
      }

      const data = await response.json();
 
      setTasks(data);
    } 
    
    catch (error) {
      console.error('Erro:', error);
    }

    finally {
      console.log('%cApp.jsx line:54 tasks', 'color: #007acc;', tasks);
    }
  }

  useEffect(() => {

    getTaskList();
    
  }, []);

  return (

    <div className={styles.page}>
      <section className={styles.header}>
        <Header />
      </section>
      <div className={styles.content}>
        <section className={styles.content__task}>
          <BsStopwatch className={styles.content__task__chronometer} size={128}/>
          <div className={styles.content__task__search}>
            <AddTaskButton getTaskList={getTaskList}/>
            <SearchBar />
          </div>
          <div className={styles.content__task__list}>
            <TaskList taskList={tasks}/>
          </div>
        </section>
        <section className={styles.content__timer}>
          <div className={styles.content__timer__display}>
            <TimerDisplay />
          </div>
          <div className={styles.content__timer__control}>
            <TimerControl />
          </div>
          <div className={styles.content__timer__log}>
            <TimerLog />
          </div>
        </section>
      </div>
        <section className={styles.footer}>
          <Footer />
        </section>
    </div>
  )
}

export default App
