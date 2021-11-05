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


import { FaLaptopCode, FaUserAlt } from "react-icons/fa";

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


    </Refine>
  );
}

export default App;
