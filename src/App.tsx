import type { Component } from "solid-js";

import { AddBook } from "./components/AddBook";
import { BookList } from "./components/BookList";

import styles from "./App.module.css";

function BookShelf() {
  return (
    <main class={styles.main}>
      <h1>My bookshelf</h1>
      <BookList />
      <AddBook />
    </main>
  );
}

const App: Component = () => {
  return <BookShelf />;
};

export default App;
