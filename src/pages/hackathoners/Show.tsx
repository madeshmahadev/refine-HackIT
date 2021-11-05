import { Show, useShow, Typography, Tag, useOne } from "@pankod/refine";
import { IHackathoner, ITeam } from "interfaces";
const { Title, Text } = Typography;

const HackathonerShow = () => {
  const { queryResult } = useShow<IHackathoner>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  const { data: teamsData } = useOne<ITeam>({
    resource: "teams",
    id: record?.team_id || "",
    queryOptions: {
      enabled: !!record?.team_id,
    },
  });

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Name</Title>
      <Text>{record?.name}</Text>
      <Title level={5}>Team</Title>
      <Text>{teamsData?.data.name}</Text>
    </Show>
  );
};

export default HackathonerShow;