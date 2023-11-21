import { useForm, SubmitHandler } from "react-hook-form";
import { DatePicker } from "../DatePicker/DatePicker";
import styles from "./AddEmployeeFormPage.module.scss";
import { createEmployee } from "../../services/employees";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

export default function AddEmployeeFormPage({ added, setAdded }) {
  const [error, setError] = useState(false);
  const { register, handleSubmit, setValue } = useForm<IFormInput>()

  const navigate = useNavigate();
  const onSubmit: SubmitHandler<IFormInput> = async (data, e) => {
    e.preventDefault();
    try {
        if (error) {
            setError(false);
        }
        await createEmployee(data);
        setAdded(added + 1);
        navigate("/");
    } catch (e) {
        setError(true);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container}>
        <h2>Personal Information</h2>
        <label>First name</label>
        <input {...register("firstName", { required: true, maxLength: 20 })} />
        <label>Middle name(if applicable)</label>
        <input {...register("middleName")} />
        <label>Last name</label>
        <input {...register("lastName", { required: true, maxLength: 20 })} />
      </div>
      <div className={styles.container}>
        <h2>Contact details</h2>
        <label>Email address</label>
        <input {...register("emailAddress", { required: true})} />
        <label>Mobile Number</label>
        <input type="number" {...register("mobileNumber", { required: true})} />  
        <label>Residential address</label>
        <input {...register("address", { required: true})} />
      </div>
      <div className={styles.container}>
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