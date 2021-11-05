import { Show, useShow, Typography, Tag, useOne } from "@pankod/refine";
import { ITeam } from "interfaces";
const { Title, Text } = Typography;

const TeamShow = () => {
  const { queryResult } = useShow<ITeam>();
  const { data, isLoading } = queryResult;
  const record = data?.data;
  //   const { data: categoryData } = useOne<ITeams>({
  //     resource: "categories",
  //     id: record?.category.id || "",
  //     queryOptions: {
  //       enabled: !!record?.category.id,
  //     },
  //   });
  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Name</Title>
      <Text>{record?.name}</Text>
    </Show>
  );
};

export default TeamShow;