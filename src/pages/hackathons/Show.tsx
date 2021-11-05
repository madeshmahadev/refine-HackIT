import { Show, useShow, Typography, Tag, useOne, MarkdownField } from "@pankod/refine";

import dayjs from "dayjs";

import { IHackathon } from "interfaces";

const { Title, Text } = Typography;

const HackathonShow : React.FC = () => {
    
    const { queryResult } = useShow<IHackathon>();
    const { data, isLoading } = queryResult;
    const record = data?.data
    
    return (
        <Show isLoading={isLoading}>
            <Title level={5}>Name</Title>
            <Text>{record?.name}</Text>
            <Title level={5}>Start Date</Title>
            <Text>{dayjs(record?.start_date).format("dddd, MMMM D, YYYY")}</Text>
            <Title level={5}>End Date</Title>
            <Text>{dayjs(record?.end_date).format("dddd, MMMM D, YYYY")}</Text>
            <Title level={5}>Description</Title>
            <MarkdownField value={record?.description} />
        </Show>
    )
}

export default HackathonShow ;