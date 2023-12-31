import { useNavigate, useParams } from "react-router-dom";
import { getEmployeeById, updateEmployee } from "../../services/employees";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { DatePicker } from "../../components/DatePicker/DatePicker";
import styles from "../../components/AddEmployeeFormPage/AddEmployeeFormPage.module.scss";
import { toast } from 'react-toastify';
import ITypes from "../../ITypes/ITypes";

const EditEmployeePage = ({ added, setAdded }) => {
	const { id } = useParams();
	const [error, setError] = useState(false);
  const { 
    register,
    handleSubmit, 
    setValue, 
    formState: { errors },
  } = useForm<ITypes>({
		defaultValues: async () => {
			const employee = await getEmployeeById(id);

			return {
				...employee,
				startDate: new Date(employee.startDate),
				finishDate: new Date(employee.finishDate),
			};
		}
	});

  const navigate = useNavigate();
  const onSubmit: SubmitHandler<ITypes> = async (data, e) => {
    e.preventDefault();
    try {
        if (error) {
            setError(false);
        }
        await updateEmployee(id, data);
        setAdded(added + 1);
        navigate("/");
    } catch (e) {
        setError(true);
      }

    toast.info("You have successfully edited an employee!");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container}>
        <h2 className={styles.title}>Personal Information</h2>
        <label>First name</label>
        <input 
          {...register("firstName", 
          { required: true, maxLength: 20 })}
          aria-invalid={errors.firstName ? "true" : "false"}
        />
        {errors.firstName?.type === "required" && (
          <p 
            className={styles.errors} 
            role="alert">First name is required
          </p>
        )}
        <label>Middle name(if applicable)</label>
        <input 
          {...register("middleName")} 
        />
        <label>Last name</label>
        <input 
          {...register("lastName", 
          { required: true, maxLength: 20 })}
          aria-invalid={errors.lastName ? "true" : "false"}
        />
        {errors.lastName?.type === "required" && (
          <p 
            className={styles.errors} 
            role="alert">Last name is required
          </p>
        )}
      </div>

      <div className={styles.container}>
        <h2 className={styles.title}>Contact details</h2>
        <label>Email address</label>
        <input 
          {...register("emailAddress", 
          { required: true})} 
          aria-invalid={errors.emailAddress ? "true" : "false"}
        />
        {errors.emailAddress?.type === "required" && (
          <p 
            className={styles.errors} 
            role="alert">Email address is required
          </p>
        )}
        <label>Mobile Number</label>
        <input 
          type="tel" 
          {...register("mobileNumber", 
          { required: true})}
          aria-invalid={errors.mobileNumber ? "true" : "false"}
        />  
        {errors.mobileNumber?.type === "required" && (
          <p 
            className={styles.errors} 
            role="alert">Mobile number is required
          </p>
        )}
        <label>Residential address</label>
        <input 
          {...register("address", 
          { required: true})} 
          aria-invalid={errors.address ? "true" : "false"}
        />
        {errors.address?.type === "required" && (
          <p 
            className={styles.errors} 
            role="alert">Residential address is required
          </p>
        )}
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
              type="radio"
              value="contract" 
              {...register("contractType")} 
            />
            <label>Contract</label>
          </div>
        </div>

        <div className={styles.dateBox}>
          <div>
            <h3>Start date</h3>
            <DatePicker 
              onChange={(newValue: Date) => {
                setValue("startDate", newValue)}
              } 
            />
          </div>
          <div>
            <h3>Finish date</h3>
            <DatePicker 
              onChange={(newValue: Date) => {
                setValue("finishDate", newValue)}
              } 
            />
          </div>

        </div>

        <div className={styles.box}>
          <h3>Is this on a full-time or part time basis?</h3>
          <div className={styles.radioContainer}>
            <input 
              className={styles.inputRadio} 
              type="radio" 
              value="fullTime" 
              {...register("contractBasis")} />
            <label>Fulltime</label>
          </div>
          <div className={styles.radioContainer}>
            <input 
              className={styles.inputRadio} 
              type="radio"
              value="partTime" 
              {...register("contractBasis")} />
            <label>Parttime</label>
          </div>
        </div>
        <label>Hours per week</label>
        <input 
          className={styles.smallInput} 
          {...register("hoursPerWeek", 
          { required: true})} 
        />
        <input 
          className={styles.button} 
          type="submit" 
          value="Save" 
        />
      </div>
    </form>
  )
}

export default EditEmployeePage;