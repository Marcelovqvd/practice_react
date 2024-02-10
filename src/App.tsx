import { useForm } from "react-hook-form"
import './App.css'
import { useState } from "react"

interface Cycle {
  id: string,
  task: string
  minutesAmount: string
}

function App() {
  const [cycles, setCycles] = useState<Cycle []>([])
  const [activeCycleId, setactiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setamountSecondsPassed] = useState(0)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Cycle>()
  
  function handleCreateNewCycle(data: Cycle) {

    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount
    } 
    
    setCycles((state) => [...state, newCycle])
    setactiveCycleId(data.id)
  }

  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  return (
    <>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
      <input defaultValue="test" {...register("task")} />
      <input {...register("minutesAmount", { required: true })} />

      {errors.minutesAmount && <span>This field is required</span>}

      <input type="submit" />
    </form>
    <ul>
      <option value=""></option>
    </ul>

    </>
  )
}

export default App
