import React, {Fragment, useState } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';
import Connexion   from './Connexion';
import './Style/Inscription.css';

const Inscription = () => {

    const [formData, setFormData] = useState({
        name:'',
        email: '',
        password: '',
        password2:""
    });

    const {name, email, password, password2} = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = async e => {
        e.preventDefault();
        if(password !== password2) {
            console.log('password not match');
        } else {

            console.log('Success')
            //    const newUser = {
            //        name,
            //        email,
            //        password
            //     }

            //        try {
            //            const config = {
            //                headers: {
            //                    'Content-Type': 'application/json'
            //                }
            //            }
            //            const body = JSON.stringify(newUser);
            //            const res = await axios.post('/api/user', body, config);
            //            console.log(res.data);
            //        } catch(err) {
            //            console.error(err.response.data);

            //        }
               };
            
        };
    
    return (
    
       <Fragment>

        <section className="container">
      <h1 className="large text-primary">Inscription</h1>
      <p className="lead"><i className="fas fa-user"></i> Créer votre compte</p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input 
          type="text" 
          placeholder="Name" 
          name="name" 
           value={name} 
           onChange= {e => onChange(e)}
            required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" value={email} 
           onChange= {e => onChange(e)}
            required  />
          <small className="form-text"
            >This site uses Gravatar so if you want a profile image, use a
            Gravatar email</small
          >
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password} 
           onChange= {e => onChange(e)}
            minLength="6"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2} 
           onChange= {e => onChange(e)}
            minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="S'inscrire" />
      </form>
      <p className="my-1">
        Déjà un compte ? <Link to ="/Connexion">Se connecter</Link>
      </p>
    </section>
      </Fragment>);
         
      };


export default Inscription