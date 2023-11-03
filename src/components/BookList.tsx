export function BookList() {
  const style = { "font-style": "italic" };

  return (
    <ul>
      <li>
        Code Complete <span style={style}>(Steve McConnell)</span>
      </li>
      <li>
        The Hobbit <span style={style}>(J.R.R. Tolkien)</span>
      </li>
    </ul>
  );
}
