import { Edit, Form, Input, Select, useForm, useSelect } from "@pankod/refine";

import { ICriteria, IHackathon } from "interfaces";

const CriteriasEdit: React.FC = () => {
  const { formProps, saveButtonProps, queryResult } = useForm<ICriteria>();

  const { selectProps: hackathonSelectProps } = useSelect<IHackathon>({
    resource: "hackathons",
    defaultValue: queryResult?.data?.data?.hackathon_id,
    optionLabel: "name",
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="Hackathon" name="hackathon_id">
          <Select {...hackathonSelectProps} />
        </Form.Item>
      </Form>
    </Edit>
  );
};


export default CriteriasEdit;
