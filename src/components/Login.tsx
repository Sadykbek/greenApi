import { useForm } from "react-hook-form";
interface LoginProps {
   idInstance : Number;
   apiTokenInstance : string;
}
export default function Login() {
   const { register, handleSubmit, watch, formState: { errors }} = useForm();
   const onSubmit = (data: LoginProps) => {
      localStorage.setItem('regData', JSON.stringify(data));
   }
   return(
      < form className="regForm" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("idInstance" , { required: true })} />
        <input type="text" {...register("apiTokenInstance", { required: true })} />
         <button >Submit</button>
      </ form>
   )
}