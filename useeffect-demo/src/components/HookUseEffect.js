import React, { useState, useEffect } from "react";

const HookUseEffect = () => {
  //? useEffect
  //?   - Takes in a callback function
  //?   - By default, it runs on every render. (Note: State Updates cause a render)
  //?   - Access to the main React lifecycle methods (Component => Mounted, Unmounted, Updated)
  //* Syntax
  //* useEffect(() => {})

  /*
        The second argument is an optional []
            - If provided, the callback will execute on initial mount of component
            - If dependencies are provided, will execute on initial mount, and if any of the values of the dependencies change
    */

  const [count, setCount] = useState(0);
  // Do some type of action on initial mount and if state has changed
  //   useEffect(() => {
  //     console.log("Component Mounted, Or State Changed")
  //   })

  // Do some type of action on initial component mount
  //   useEffect(() => {
  //     console.log("Will show on initial mount only");
  //   }, []);

  // Do some type of action on initial component mount and if the variable changes
  //   useEffect(() => {
  //     console.log("Component Mounted or Count has changed");
  //   }, [count]);

  //! Be cautious of infinite loops, add dep array if state is beinbg updated in useEffect
  //   useEFfect(() => {
  //     console.log("I am rendering or re-rendering");
  //     setCount(count + 1)
  //   });

  //! Example of setInterval in useEffect
  //   useEffect(() => {
  //     let interval = setInterval(() => setCount((prev) => prev + 1), 1000);
  //     return () => clearInterval(interval);
  //   }, [count]);

  return (
    <div>
      {/* <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Add</button> */}
      <UseEffectFetch />
    </div>
  );
};

const UseEffectFetch = () => {
  const [selectedOption, setSelectedOption] = useState("films");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const options = ["films", "people", "locations", "species", "vehicles"];

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchResults = async () => {
        setLoading(true)
        try {
      let results = await (
        await fetch(`https://ghibliapi.vercel.app/${selectedOption}`, {
          signal,
        })
      ).json();
      // console.log(results)
      setResults(results);
      setLoading(false)
    } catch (err) {
        console.log(err)
    }
    };

    fetchResults();

    return () => controller.abort();

  }, [selectedOption]);

  const displayResults = () =>
    results.map((i) => (
      <div style={{ border: "1px solid blue" }}>
        <img style={{ maxWidth: "200px" }} src={i.image} alt="poster" />
        <h3>{i.title}</h3>
        <h3>{i.name}</h3>
        <h3>{i.description}</h3>
      </div>
    ));

  return (
    <>
      <h1>Studio Ghibli</h1>

      <select onChange={(e) => setSelectedOption(e.target.value)}>
        {options.map((i) => (
          <option>{i}</option>
        ))}
      </select>
      {loading ? <h3>⌛ Loading</h3> : displayResults()}
    </>
  );
};

export default HookUseEffect;
