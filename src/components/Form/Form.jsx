import React from "react";
import validate from "./validation.js";
import styles from "./Form.module.css";

export default function (props) {
    const [userData, setUserData] = React.useState({ username: '', password: '' });
    const [errors, setErrors] = React.useState({ username: '', password: '' });
    const [access, setAccess] = React.useState();


    const handleInputChange = (evento) => {
        const { value, name } = evento.target
        setUserData({
            ...userData,
            [name]: value
        })
        if (!validate(value, name)) {
            setErrors({
                ...errors,
                [name]: `${name} no cumple con los criterios establecidos`
            })
        } else {
            setErrors({ ...errors, [name]: "" })
        }

    }

    const conectado = (arg) => {
        if (arg) {
            return null
        } else {
            return <p className={styles.errors}>Usuario invalido</p>
        }
    }

    const handleSubmit = (evento) => {
        setAccess(conectado(props.login(userData)))
        evento.preventDefault()
    }

    return (
        <div className={styles.box}>
            <div className={styles.login}>
                <div class={styles.form}>
                <span className={styles.span}>Rick and Morty</span>
                    <form onSubmit={handleSubmit}>
                        <input name="username" type="text" placeholder="username" onChange={handleInputChange} value={userData.username}/>
                        {errors.username && <p className={styles.errors}>{errors.username}</p>}
                        <input name="password" type="password" placeholder="password" onChange={handleInputChange} value={userData.password}/>
                        {errors.password && <p className={styles.errors}>{errors.password}</p>}
                        {access}
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

        // <div className={styles.box}>
        //     <span className={styles.span}>Rick and Morty</span>
        //     <form className={styles.form} onSubmit={handleSubmit}>
        //         <label>Username:</label>
        //         <input className={styles.forminput}
        //          name="username"
        //         type="text"
        //         onChange={handleInputChange}
        //         value={userData.username}
        //         placeholder="username"
        //         />
        //         {errors.username && <p>{errors.username}</p>}
        //         <label>Password</label>
        //         <input className={styles.forminput}
        //         name="password"
        //         type="password"
        //         onChange={handleInputChange}
        //         value={userData.password}
        //         placeholder="password"
        //         />
        //         {errors.password && <p>{errors.password}</p>}
        //         {access}
        //         <button className={styles.formbutton} type="submit">Login</button>
        //     </form>
        // </div>