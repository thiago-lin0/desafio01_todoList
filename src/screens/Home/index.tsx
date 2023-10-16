import {useState} from "react";
import { FlatList, View, Alert} from 'react-native';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { TaskType } from '../../components/TasksType';
import { Tasks } from "../../components/Tasks";
import { EmptyTask } from "../../components/EmptyTask";

import { styles } from './style';
import DefaultColors from '../../Styles/colors';

export function Home() {
const [addTask, setAddTask] = useState<string[]>([])
const [taskName, setTaskName] = useState("")
const [isChecked, setIsChecked] = useState<boolean>(false)

const [taskSelection, setTaskSelection] = useState<Record<number, boolean>>({});


function handleAddtask(){
  if(taskName === ""){
    return Alert.alert("Aviso", "você não pode cadastrar o campo vazio")
  }
  setAddTask(preventState => [...preventState, taskName])
  setTaskName("")
}

function handleTrash(task: string){
  Alert.alert("Remover Tarefa", `Você deseja remover a tarefa`, [
    {
        text: "Sim",
        onPress: () => setAddTask(preventState => preventState.filter(addTask => addTask !== task)),
    },
    {
        text: "Não",
        style: "cancel"
    }
])
}

function teste(){
  if(isChecked){
    setIsChecked(false)
  }else{
    setIsChecked(true)
  }
}

function toggleTaskSelection(taskIndex: number) {
  setTaskSelection((prevState) => {
    const updatedSelection = { ...prevState };
    updatedSelection[taskIndex] = !prevState[taskIndex];
    return updatedSelection;
  });
}

const selectedTasks = addTask.filter((_, index) => taskSelection[index] === true);

 
  return (
    <View style={styles.container}>
      <Header/>
      <Input taskName={taskName} changeText={(text:string) => setTaskName(text)} sendTask={handleAddtask}/>
      <View style={styles.taskTypeConteiner}>
        <TaskType name='Criadas' color={DefaultColors.blue} number={addTask.length} />
        <TaskType name='Concluidas' color={DefaultColors['purple-dark']} number={selectedTasks.length}/>
      </View>
      <FlatList
        data={addTask}
        renderItem={({ item, index }) => (
          <Tasks 
            id={0} 
            selected={taskSelection[index] || false} 
            valueChange={() => toggleTaskSelection(index)} 
            taskText={item} 
            trashChange={() => handleTrash(item)}
          />
        )}
         ListEmptyComponent={(
          <View>
            <View style={styles.divider} />
            <EmptyTask/>
          </View>
      
         )}
      />
    </View>
  );
}

