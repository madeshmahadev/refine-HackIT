import { Refine, Resource } from "@pankod/refine";

import "@pankod/refine/dist/styles.min.css";
import { dataProvider } from "@pankod/refine-supabase";

import authProvider from "./authProvider";
import { supabaseClient } from "utility";
import {
  Title,
  Header,
  Sider,
  Footer,
  Layout,
  OffLayoutArea,
} from "components";

import { Login } from "./pages/login";

import { DashboardPage } from "./pages/dashboard"

import {
  HackathonList,
  HackathonCreate,
  HackathonEdit,
  HackathonShow,
} from "pages/hackathons";

import {
  HackathonerList,
  HackathonerCreate,
  HackathonerEdit,
  HackathonerShow,
} from "pages/hackathoners";

import {
  ProjectList,
  ProjectCreate,
  ProjectEdit,
  ProjectShow,
} from "pages/projects";

import {
  TeamList,
  TeamCreate,
  TeamEdit,
  TeamShow,
} from "pages/teams";

import {
  CriteriasList,
  CriteriasCreate,
  CriteriasEdit,
  CriteriasShow,
} from "pages/criterias";


import { 
  FaLaptopCode, 
  FaUserAlt,
  FaUsers,
  FaDiceThree,
  FaChartBar,
} from "react-icons/fa";

import "styles/antd.less";

const App: React.FC = () => {
  return (
    <Refine
      dataProvider={dataProvider(supabaseClient)}
     // authProvider={authProvider}
      Title={Title}
      Header={Header}
      Sider={Sider}
      Footer={Footer}
      Layout={Layout}
      //LoginPage={Login}
      DashboardPage={DashboardPage}
      OffLayoutArea={OffLayoutArea}
    >
      <Resource 
        name="hackathons"
        list={HackathonList}
        edit={HackathonEdit}
        show={HackathonShow}
        create={HackathonCreate}
        icon={<FaLaptopCode />}
      />

      <Resource 
        name="hackathoners"
        list={HackathonerList}
        edit={HackathonerEdit}
        show={HackathonerShow}
        create={HackathonerCreate}
        icon={<FaUserAlt />}
      />

      <Resource 
        name="projects"
        list={ProjectList}
        edit={ProjectEdit}
        show={ProjectShow}
        create={ProjectCreate}
        icon={<FaDiceThree />}
      />

      <Resource 
        name="teams"
        list={TeamList}
        edit={TeamEdit}
        show={TeamShow}
        create={TeamCreate}
        icon={<FaUsers />}
      />


      <Resource 
        name="criterias"
        list={CriteriasList}
        edit={CriteriasEdit}
        show={CriteriasShow}
        create={CriteriasCreate}
        icon={<FaChartBar />}
      />


    </Refine>
  );
}

export default App;
