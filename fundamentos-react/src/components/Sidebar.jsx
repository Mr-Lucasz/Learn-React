import styles from './Sidebar.module.css';
import {PencilLine} from 'phosphor-react'

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://plus.unsplash.com/premium_photo-1663047716627-e0b6c878761e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGV2ZWxvcGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=50" 
         alt="Imagen" />
         <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/Mr-Lucasz.png" alt="Avatar" />
        
         <strong>LUCAS RODRIGUES</strong>
         <span>QA Analyst</span>
    
         </div>
         <footer>
         <a href="#">
            <PencilLine size={20}/>
            Editar seu perfil
            </a>
         </footer>
   
        </aside>
            );
}