import React, { useState } from "react";

import { Create, Form, Input, useForm, DatePicker } from "@pankod/refine";

import { IHackathon } from "interfaces";

import ReactMarkdown from "react-markdown";
import ReactMde from "react-mde";
import "react-mde/lib/styles/css/react-mde-all.css";

const HackathonCreate: React.FC = () => {

    const { formProps, saveButtonProps } = useForm<IHackathon>();

    const [selectedTab, setSelectedTab] = useState<"write" | "preview">(
        "write",
    );

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item label="Name" name="name" rules={[{required: true,},]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Start Date" name="start_date" rules={[{required: true,},]}>
                    <DatePicker />
                </Form.Item>
                <Form.Item label="End Date" name="end_date" rules={[{required: true,},]}>
                    <DatePicker />
                </Form.Item>
                <Form.Item
                    label="Description"
                    name="description"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <ReactMde
                        selectedTab={selectedTab}
                        onTabChange={setSelectedTab}
                        generateMarkdownPreview={(markdown) =>
                            Promise.resolve(
                                <ReactMarkdown>{markdown}</ReactMarkdown>,
                            )
                        }
                    />
                </Form.Item>
            </Form>
        </Create>
    )
}

export default HackathonCreate;