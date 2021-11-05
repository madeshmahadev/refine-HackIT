import { Edit, Form, Input, Select, useForm, useSelect } from "@pankod/refine";

import { IHackathoner, ITeam } from "interfaces";

const HackathonerEdit: React.FC = () => {
  const { formProps, saveButtonProps, queryResult } =
    useForm<IHackathoner>();

  const { selectProps: teamsSelectProps } = useSelect<ITeam>({
    resource: "teams",
    optionLabel: "name",
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="Team" name="team_id">
          <Select {...teamsSelectProps} />
        </Form.Item>
      </Form>
    </Edit>
  );
};

export default HackathonerEdit;