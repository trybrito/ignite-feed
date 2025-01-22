import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Post } from "../../components/Post";
import styles from "./styles.module.css";

export function Home() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
          <Post />
        </main>
      </div>
    </div>
  );
}
