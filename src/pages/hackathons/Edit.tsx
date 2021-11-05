import React, { useState } from "react";

import { Edit, Form, Input, useForm, DatePicker } from "@pankod/refine";

import dayjs from "dayjs";

import { IHackathon } from "interfaces";

import ReactMarkdown from "react-markdown";
import ReactMde from "react-mde";
import "react-mde/lib/styles/css/react-mde-all.css";


const HackathonEdit: React.FC = () => {
    
    const { formProps, saveButtonProps } = useForm<IHackathon>();

    const [selectedTab, setSelectedTab] = useState<"write" | "preview">(
        "preview",
    );

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item label="Name" name="name">
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Start Date"
                    name="start_date"
                    getValueProps={(value) => ({
                        value: dayjs(value)
                    })}
                >
                    <DatePicker />
                </Form.Item>
                <Form.Item
                    label="End Date"
                    name="end_date"
                    getValueProps={(value) => ({
                        value: dayjs(value)
                    })}
                >
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
        </Edit>
    )
}

export default HackathonEdit;