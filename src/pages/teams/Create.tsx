import { Create, Form, Input, useForm } from "@pankod/refine";

import { ITeam } from "interfaces";

const TeamCreate: React.FC = () => {
  const { formProps, saveButtonProps } = useForm<ITeam>();

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>
      </Form>
    </Create>
  );
};

export default TeamCreate;
