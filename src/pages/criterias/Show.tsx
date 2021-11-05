import { Show, useShow, Typography, Tag, useOne } from "@pankod/refine";
import { ICriteria, IHackathon } from "interfaces";
const { Title, Text } = Typography;

const CriteriasShow = () => {
  const { queryResult } = useShow<ICriteria>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  const { data: hackathonData } = useOne<IHackathon>({
    resource: "hackathons",
    id: record?.hackathon_id || "",
    queryOptions: {
      enabled: !!record?.hackathon_id,
    },
  });

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Name</Title>
      <Text>{record?.name}</Text>
      <Title level={5}>Hackathon</Title>
      <Text>{hackathonData?.data.name}</Text>
    </Show>
  );
};

export default CriteriasShow;