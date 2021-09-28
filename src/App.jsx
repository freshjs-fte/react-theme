import React from "react";
import ThemeButton from "./components/ThemeButton";

import styles from "./App.sass";
console.log(styles);

class App extends React.Component {
  // конструктор
  constructor(props) {
    super(props);

    // state с полем theme
    this.state = {
      theme: true,
    };
  }

  toggleTheme = () => {
    this.setState((prevState) => {
      if (prevState.theme === true) {
        return {
          theme: false,
        };
      } else {
        return {
          theme: true,
        };
      }
    });
  };

  render() {
    const text = "This is text";

    let themeClass = "light-theme";

    if (this.state.theme === false) {
      themeClass = "dark-theme";
    }

    return (
      <div className={themeClass}>
        <ThemeButton toggle={this.toggleTheme} theme={this.state.theme} />

        <p> {text}</p>
      </div>
    );
  }
}

export default App;
