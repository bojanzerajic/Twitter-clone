import React from 'react';
import style from "./Login.module.scss";


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }
    render() {
        return (
            <div className={style.container}>
                <img src='https://cdn2.iconfinder.com/data/icons/minimalism/512/twitter.png' alt='twitter icon'  />
                <h4 className={style.h4}>Log in to Twitter</h4>
                <div className={style.wrapper}>
                    <input className={style.input} type='email' placeholder='Phone, email, or username' />
                    <input className={style.input} type='password' placeholder='Password' />
                    <button className={style.button}>Log in</button>
                </div>
            </div>
        )
    }



}
export { Login };