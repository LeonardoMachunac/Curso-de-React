import styles from "./Login.module.css";
// import { Link } from "react-router-dom";
import { InputControl } from "../InputControl/InputControl";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export function Login () {
    const navigate = useNavigate();
    const [values,setvalues]= useState({email:"",pass:""})
    const[errorMsg,setErrorMsg]=useState([]);
    const[submitButtonDisabled,setSubmitButtonDisabled]= useState(false);
    const Iniciar =()=>{
        if(!values.email || !values.pass){
            setErrorMsg("Datos incompletos");
            return;
        }
        setErrorMsg("");
        setSubmitButtonDisabled(true);
        signInWithEmailAndPassword(auth,values.email,values.pass)
        .then(async(res)=>{
            setSubmitButtonDisabled(false);
            navigate("/");
        })
        .catch((err)=>{
            setSubmitButtonDisabled(false);
            setErrorMsg(err.message);
        });
    };
    return (<div className={styles.container}>
        <div className={styles.innerBox}>
            <h1 className={styles.heading}>Bienvenidos al Login</h1>
            <InputControl label="Email" onChange={(event)=> setvalues((prev)=>({...prev,email:event.target.value}))}placeholder="Ingrese su correo"/>
            <InputControl label="Contraseña" onChange={(event)=> setvalues((prev)=>({...prev,pass:event.target.value}))}placeholder="Ingrese su contraseña"/>
            <div className={styles.footer}>
                    <b className={styles.error}>{errorMsg}</b>
                    <button onClick={Iniciar} disabled={submitButtonDisabled}>Login btn</button>
                    <p>Crear Cuenta</p>
                    <span>
                        <Link to="/signup">ir</Link>
                    </span>
            </div>
        </div>
    </div>)
}

