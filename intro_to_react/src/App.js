//? Can declare imports from libraries or local files
import "./App.css";

//? Import Coutner component
import Counter from "./components/Counter/Counter"

//? Import a hook from React
import { useState } from "react";

//? [ FILE AND FOLDER STRUCTURAL PATTERN ]
//?   - Components and their css are usually tucked away in their own folders
//?     - src/components/Form/Form.js + Form.css

//? [ STYLING ]
//?   - Can use CSS
//?   - Can reference Objs
//?   - Can use in-line
//?   - Can use styling libraries (styled-components, tailwind, react-strap, material)
//?   - JSX Styling overrules CSS

const styles = {
  div: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "skyblue",
    marginInline: "2em",
  },
};

//? [ COMPONENTS ]
//?   - How React establishes its UI. Anywhere from full pages, and smaller pieces that can populate a web app/doc. Generally reusable and dynamic HTML elements.

//? Functional Component
//?   - Returns JSX - Javascript XML
//?   - Two types of components, functional and class. Functional are a bit more standardized and newer.
//?   - Pascal case component names
//?   - Has access to hooks (Hooks are functions that we do often)

function App() {
  //? Setting up state with the useState hook
  //? [ variable, functionToUpdateVariable ]
  const [showCounter, setShowCounter] = useState(false);

  let myName = "Travis M";

  // Setup an array of values that represent delay times (for box animation)
  let boxCount = [0.2, 0.4, 0.6, 0.8, 1];

  // Setting up a helper function to get random values for rgb
  const randomRGBColor = () => {
    const randomNum = () => Math.floor(Math.random() * 256);

    return `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
  };

  // logic

  console.log("App Component Remounted");
  return (
    <div className="App">
      {/*Inline Styline*/}
      <h1 style={{ marginTop: 0 }}>Text from App, Parent Component</h1>

      {/* Access JS with {} in the JSX area/ the return*/}
      {
        showCounter ? <Counter /> : null
      }
      <button onClick={() => setShowCounter(!showCounter)}> Show/Hide Counter</button>
      {/* <h1>{count}</h1>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase Count
      </button> */}
      {/* Style, referenceing the obj above */}
      <div style={styles.div}>
        <MyComponentInApp myName={myName} />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {/* {[1, 2, 3, 4, 5].map((i) => {
            return (
              <></>
            )
          })} */}
          {boxCount.map((i, idx) => {
            return (
              <Box
                key={idx}
                // Pass the function of randomRGB as a prop.
                randomRGBColor={randomRGBColor}
                delay={i}
                num={idx + 1}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Another Component
const MyComponentInApp = (props) => {
  console.log(props);
  return (
    <>
      <div
        style={{
          border: "solid 1px white",
          margin: "1em",
          padding: "2em",
        }}
      >
        <h1> MyComponentInApp</h1>
        <h3>My component, written in App.js</h3>
        <p>{props.myName}</p>
      </div>
    </>
  );
};

const Box = (props) => {
  return (
    <div
      style={{
        minWidth: "200px",
        minHeight: "200px",
        backgroundColor: props.randomRGBColor(),
        margin: "1em",
        animationDelay: `${props.delay}s`,
      }}
      className="box"
    >
      <h1 style={{
        position: "relative",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        margin: 0,
      }}
      >
      Box {props.num}
      </h1>
    </div>
  );
};

export default App;
