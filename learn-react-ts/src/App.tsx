import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import styles from "./App.module.css";
import "./Global.css";

// author: {avatar_url: "", name: "", role: ""}
//publishedAt: date
//content : string

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Mr-Lucasz.png",
      name: "Lucas Rodrigues",
      role: "QA Analyst Sr",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-08-06 23:31:56"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/Mr-Lucasz.png",
      name: "Lucas Rodrigues",
      role: "PO",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-08-06 23:45:56"),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/Mr-Lucasz.png",
      name: "Lucas Cunha",
      role: "Engineer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-08-06 23:45:56"),
  },
];
//iteração - estrutura de repetição

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <div className={styles.postContainer}>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
