import { Show, useShow, Typography, useOne } from "@pankod/refine";
import { IHackathoner, IHackathon, IProject } from "interfaces";
const { Title, Text } = Typography;

const ProjectShow = () => {
  const { queryResult } = useShow<IProject>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  const { data: hackathonData } = useOne<IHackathon>({
    resource: "teams",
    id: record?.hackathon_id || "",
    queryOptions: {
      enabled: !!record?.hackathon_id,
    },
  });
  const { data: hackathonerData } = useOne<IHackathoner>({
    resource: "teams",
    id: record?.hackathoner_id || "",
    queryOptions: {
      enabled: !!record?.hackathoner_id,
    },
  });

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Name</Title>
      <Text>{record?.name}</Text>
      <Title level={5}>Description</Title>
      <Text>{record?.description}</Text>
      <Title level={5}>Url</Title>
      <Text>{record?.url}</Text>
      <Title level={5}>Hackathon</Title>
      <Text>{hackathonData?.data.name}</Text>
      <Title level={5}>Hackathoner</Title>
      <Text>{hackathonerData?.data.name}</Text>
    </Show>
  );
};


export default ProjectShow;