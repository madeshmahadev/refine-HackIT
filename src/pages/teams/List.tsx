import {
  List,
  Table,
  useTable,
  Space,
  ShowButton,
  EditButton,
} from "@pankod/refine";

import { ITeam } from "interfaces";

const TeamList: React.FC = () => {
  const { tableProps } = useTable<ITeam>();

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column dataIndex="name" title="Name" />
        <Table.Column<ITeam>
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

export default TeamList;
