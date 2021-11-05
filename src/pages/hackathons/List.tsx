import {
  List,
  Table,
  useTable,
  Space,
  ShowButton,
  EditButton,
  DeleteButton,
  TextField,
} from "@pankod/refine";

import dayjs from "dayjs";

import { IHackathon } from "interfaces";

const HackathonList: React.FC = () => {

    const { tableProps } = useTable<IHackathon>();

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column dataIndex="name" title="Name" />
                <Table.Column
                    dataIndex="start_date"
                    title="Start Date"
                    render={(value) => (
                        <TextField value={dayjs(value).format("ddd, MMM D, YYYY")} />
                    )}
                 />
                 <Table.Column
                    dataIndex="end_date"
                    title="End Date"
                    render={(value) => (
                        <TextField value={dayjs(value).format("ddd, MMM D, YYYY")} />
                    )}
                 />
                 <Table.Column
                    title="Actions"
                    dataIndex="actions"
                    render={ (_text, record:IHackathon): React.ReactNode => {
                        return (
                            <Space>
                                <ShowButton size="small" recordItemId={record.id} hideText />
                                <EditButton size="small" recordItemId={record.id} hideText />
                                <DeleteButton size="small" recordItemId={record.id} hideText />
                            </Space>                           
                        )
                    }}
                 />   
            </Table>
        </List>
    )
}

export default HackathonList;