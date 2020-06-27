
import './Style/Connexion.css';
import Inscription from './Inscription';
import React, {Fragment, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'



    const Connexion = () => {

        const [formData, setFormData] = useState({
            email: '',
            password: ''
          
        });
    
        const { email, password} = formData;
    
        const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});
    
        const onSubmit = async e => {
            e.preventDefault();
            
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
        
    return (
               <Fragment>
                   <div>
            <h1>Bientot la page de connexion</h1>
            <h2>Un mot de passe temporaire sera nécessaire pour l'accès au site internet</h2>
            </div>
        <div className="mef-container-login">
            


            {/* <div className="mef-register">
            <Inscription></Inscription>
            </div> */}


     
            <div className="mef-connexion">
        <section className="container">
      <h1 className="large text-primary">Connexion</h1>
      <p className="lead"><i className="fas fa-user"></i> Connexion au compte</p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" value={email} 
           onChange= {e => onChange(e)}
            required  />
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
        
        <input type="submit" className="btn btn-primary" value="Se connecter" />
      </form>
    </section>
    <p>Pas de compte encore?<Link to='/Inscription'>S'inscrire</Link></p>
    </div>

    
         
        </div>
        </Fragment>
    );
    
    }

    export default Connexion


