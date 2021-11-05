import {
  Create,
  Form,
  Input,
  Select,
  useForm,
  useSelect,
} from "@pankod/refine";

import { IHackathoner, ITeam } from "interfaces";

const HackathonerCreate: React.FC = () => {
  const { formProps, saveButtonProps, queryResult } =
    useForm<IHackathoner>();

  const { selectProps: teamsSelectProps } = useSelect<ITeam>({
    resource: "teams",
    defaultValue: queryResult?.data?.data?.team_id,
    optionLabel: "name",
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="Team" name="team_id">
          <Select {...teamsSelectProps} />
        </Form.Item>
      </Form>
    </Create>
  );
};

export default HackathonerCreate;