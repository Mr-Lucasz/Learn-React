import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from './components/Sidebar';
import styles from './App.module.css';
import './Global.css';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <div className={styles.postContainer}>
          <Post author="Lucas Rodrigues" />
          <Post author="Lucas Cunha" />
          <Post author="Lucas Rodrigues" />
        </div>
      </div>
    </div>
  );
}
