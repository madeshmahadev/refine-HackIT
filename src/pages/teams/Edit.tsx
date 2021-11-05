import { Edit, Form, Input, useForm } from "@pankod/refine";

import { ITeam } from "interfaces";

const TeamEdit: React.FC = () => {
  const { formProps, saveButtonProps } = useForm<ITeam>();

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>
      </Form>
    </Edit>
  );
};

export default TeamEdit;