import {
  useList,
  AntdList,
  Card,
  Form,
  Rate,
  Button,
  useCreate,
  Typography,
  Row,
} from "@pankod/refine";
import dayjs from "dayjs";
import {
    IHackathon
} from "interfaces";

const now = dayjs();

export const DashboardPage: React.FC = () => {

  const currentHackathons = useList<IHackathon>({
    resource: "hackathons",
    config: {
      filters: [
        {
          field: "start_date",
          operator: "lte",
          value: now,
        },
        {
          field: "end_date",
          operator: "gte",
          value: now,
        },
      ],
    },
  });

  const currentHackathon = currentHackathons.data?.data[0];


  const { mutate } = useCreate();

  return (
    <h1>
        Dashboard
    </h1>
  );
};