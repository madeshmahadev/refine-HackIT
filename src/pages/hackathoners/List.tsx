import {
  List,
  Table,
  useTable,
  Space,
  ShowButton,
  EditButton,
  useMany,
  TextField,
} from "@pankod/refine";

import { IHackathoner, ITeam } from "interfaces";

const HackathonerList: React.FC = () => {
  const { tableProps, tableQueryResult } = useTable<IHackathoner>();

  const teamIds = tableQueryResult.data?.data.map((h) => h.team_id) ?? [];

  const { data: teamsData, isLoading: teamsIsLoading } = useMany<ITeam>({
    resource: "teams",
    ids: teamIds,
    queryOptions: {
      enabled: teamIds.length > 0,
    },
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column dataIndex="name" title="Name" />
        <Table.Column
          dataIndex="team_id"
          title="Team"
          render={(value) => {
            if (teamsIsLoading) {
              return <TextField value="Loading..." />;
            }
            return (
              <TextField
                value={teamsData?.data.find((item) => item.id === value)?.name}
              />
            );
          }}
        />
        <Table.Column<IHackathoner>
          title="Actions"
          dataIndex="actions"
          render={(_text, record): React.ReactNode => {
            return (
              <Space>
                <ShowButton size="small" recordItemId={record.id} hideText />
                <EditButton size="small" recordItemId={record.id} hideText />
              </Space>
            );
          }}
        />
      </Table>
    </List>
  );
};

export default HackathonerList;