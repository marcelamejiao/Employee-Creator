import { useForm, SubmitHandler } from "react-hook-form"
import { DatePicker } from "../DatePicker/DatePicker"

interface IFormInput {
  firstName: string
  lastName: string
  middleName: string
  emailAddress: string // to improve
  mobileNumber: number // to improve
  address: string
  contractType: string
  startDate: Date
  finishDate: Date
  contractBasis: string
  hoursPerWeek: number
}

export default function AddEmployeeForm() {
  const { register, handleSubmit, setValue } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h2>Personal Information</h2>
        <label>First name</label>
        <input {...register("firstName", { required: true, maxLength: 20 })} />
        <label>Middle name(if applicable)</label>
        <input {...register("middleName")} />
        <label>Last name</label>
        <input {...register("lastName", { required: true, maxLength: 20 })} />
      </div>
      <div>
        <h2>Contact details</h2>
        <label>Email address</label>
        <input {...register("emailAddress", { required: true})} />
        <label>Mobile Number</label>
        <input type="number" {...register("mobileNumber", { required: true})} />  
        <label>Residential address</label>
        <input {...register("address", { required: true})} />
      </div>
      <div>
        <h2>Employee status</h2>
        <p>What is contract type</p>
        <label>Permanent</label>
        <input type="radio" value="permanent" {...register("contractType")} />
        <label>Contract</label>
        <input type="radio"value="contract" {...register("contractType")} />
        <p>Start date</p>
        <DatePicker onChange={(newValue: Date) => {setValue("startDate", newValue)}} />
        <p>Finish date</p>
        <DatePicker onChange={(newValue: Date) => {setValue("finishDate", newValue)}} />
        <p>Is this on a full-time or part time basis?</p>
        <label>Full-time</label>
        <input type="radio" value="fullTime" {...register("contractBasis")} />
        <label>Part-time</label>
        <input type="radio"value="partTime" {...register("contractBasis")} />
        <label>Hours per week</label>
        <input {...register("hoursPerWeek", { required: true})} />
      </div>
      <input type="submit" value="Save" />
    </form>
  )
}