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
        <h2 className={styles.title}>Personal Information</h2>
        <label>First name</label>
        <input 
          {...register("firstName", 
          { required: true, maxLength: 20 })} 
        />
        <label>Middle name(if applicable)</label>
        <input 
          {...register("middleName")} 
        />
        <label>Last name</label>
        <input 
          {...register("lastName", 
          { required: true, maxLength: 20 })} 
        />
      </div>

      <div className={styles.container}>
        <h2 className={styles.title}>Contact details</h2>
        <label>Email address</label>
        <input 
          {...register("emailAddress", 
          { required: true})} 
        />
        <label>Mobile Number</label>
        <input 
          type="tel" 
          {...register("mobileNumber", 
          { required: true})} 
        />  
        <label>Residential address</label>
        <input 
          {...register("address", 
          { required: true})} 
        />
      </div>

      <div className={styles.container}>
        <h2 className={styles.title}>Employee status</h2>

        <div className={styles.box}>
        <h3>What is the contract type?</h3>
          <div className={styles.radioContainer}>
            <input
              className={styles.inputRadio} 
              type="radio" 
              value="permanent" 
              {...register("contractType")} 
            />
            <label>Permanent</label>
          </div>
          <div className={styles.radioContainer}>
            <input 
              className={styles.inputRadio} 
              type="radio"value="contract" 
              {...register("contractType")} 
            />
            <label>Contract</label>
          </div>
        </div>

        <div className={styles.box}>
          <h3>Start date</h3>
          <DatePicker 
            onChange={(newValue: Date) => {
              setValue("startDate", newValue)}
            } 
          />
          <h3>Finish date</h3>
          <DatePicker 
            onChange={(newValue: Date) => {
              setValue("finishDate", newValue)}
            } 
          />
        </div>

        <div className={styles.box}>
          <h3>Is this on a full-time or part time basis?</h3>
          <div className={styles.radioContainer}>
            <input className={styles.inputRadio} type="radio" value="fullTime" {...register("contractBasis")} />
            <label>Fulltime</label>
          </div>
          <div className={styles.radioContainer}>
            <input className={styles.inputRadio} type="radio"value="partTime" {...register("contractBasis")} />
            <label>Parttime</label>
          </div>
        </div>
        <label>Hours per week</label>
        <input className={styles.smallInput} {...register("hoursPerWeek", { required: true})} />
        <input className={styles.button} type="submit" value="Save" />
      </div>
    </form>
  )
}