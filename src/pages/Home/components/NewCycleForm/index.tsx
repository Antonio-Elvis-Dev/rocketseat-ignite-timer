import { zodResolver } from "@hookform/resolvers/zod";
import { MinutesAmountInput, TaskInput, FormContainer } from "./styles";
import * as zod from "zod";
import { useForm } from "react-hook-form";


const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(1, "O ciclo precisa ser de no mínimo 5 minutos")
    .max(60, "O ciclo precisa ser de no máximo 60 minutos"),
}); // TODO: definicao de formato ex. schema de banco de dados

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>; // TODO: para referencia uma variavel typescript se usa o typeof


export function NewCycleForm () {


    const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
      resolver: zodResolver(newCycleFormValidationSchema),
      defaultValues: {
        task: "",
        minutesAmount: 0,
      },
    });

    return (
        <FormContainer>
        <label htmlFor="task">Vou trabalhae em </label>
        <TaskInput
          type="text"
          id="task"
          placeholder="Dê um nome para o seu projeto"
          list="task-suggestions"
          disabled={!!activeCycle}
          {...register("task")}
        />

        <datalist id="task-suggestions">
          <option value="Projeto 1" />
          <option value="Projeto 2" />
          <option value="Projeto 3" />
        </datalist>

        <label htmlFor="minutesAmount">durante</label>
        <MinutesAmountInput
          type="number"
          id="minutesAmount"
          placeholder="00"
          step={5}
          min={1}
          max={60}
          disabled={!!activeCycle}
          {...register("minutesAmount", { valueAsNumber: true })}
        />

        <span>minutos.</span>
      </FormContainer>

    )
}