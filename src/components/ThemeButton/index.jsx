import styles from "./ThemeButton.module.css";

console.log(styles);

function ThemeButton(props) {
  let themeClass = styles.btn + " light-theme";
  if (props.theme !== false) {
    themeClass = styles.btn + " dark-theme";
  }

  return (
    <button onClick={props.toggle} className={themeClass}>
      Theme switch
    </button>
  );
}

export default ThemeButton;
