import PathContants from "./pathConstants";
import Home from "../pages/Home";
import About from "../pages/About";
import Help from "../pages/Help";
import Error from "../components/Error";
import CareerDetails, {
  careerDeatailLoader,
} from "../pages/careers/CareerDetails";
import Careers, { careersLoaders } from "../pages/careers/Careers";
import FAQ from "../components/FAQ";
import Contact, { contactAction } from "../components/Contact";
import ApplyCareer from "../pages/careers/ApplyCareer";

const routes = [
  {
    path: PathContants.HOME,
    element: <Home />,
    errorElement: <Error />,
  },

  {
    path: PathContants.ABOUT,
    element: <About />,
    errorElement: <Error />,
  },
  {
    path: PathContants.HELP,
    element: <Help />,
    errorElement: <Error />,
  },

  {
    path: PathContants.FAQ,
    element: <FAQ />,
  },

  {
    path: PathContants.CONTACT,
    element: <Contact />,
    action: contactAction,
  },

  {
    path: PathContants.CAREERS,
    element: <Careers />,
    loader: careersLoaders,
    errorElement: <Error />,
  },

  {
    path: PathContants.CAREER,
    element: <CareerDetails />,
    loader: careerDeatailLoader,
    errorElement: <Error />,
  },
  {
    path: PathContants.APPY_CAREER,
    element: <ApplyCareer />,
  },
];

export default routes;
