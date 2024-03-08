import { lazy } from "react";

const Home = lazy(() => wait(3000).then(() =>import("./Home")));
const About = lazy(() => wait(3000).then(() =>import("./About")));
const Auth = lazy(() => wait(3000).then(() =>import("./Auth")));

const wait = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
};

export { About, Auth, Home };
