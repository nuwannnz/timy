import { PlusOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, message } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { resetAddTodoData } from "../projects.slice";
import { addTodoAsync } from "../projects.thunk";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";

interface IAddTodoFormValues {
  title: string;
  dueDate: moment.Moment;
}

interface Props {
  projectId: string;
}
const AddTodoForm: React.FC<Props> = ({ projectId }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const {
    loading,
    data: addTodoData,
    error: addTodoError,
  } = useSelector((state: RootState) => state.projects.addTodoData);

  useEffect(() => {
    if (addTodoData) {
      form.resetFields();
      dispatch(resetAddTodoData());
    }
  }, [addTodoData]);

  useEffect(() => {
    if (addTodoError) {
      message.error(`${addTodoError}`);
      dispatch(resetAddTodoData());
    }
  }, [addTodoError]);

  const handleValidationFinish = (values: IAddTodoFormValues) => {
    const todo: ITodo = {
      uid: uuidv4(),
      title: values.title,
      dueDate: values.dueDate.valueOf(),
      isDone: false,
    };

    dispatch(addTodoAsync({ projectId, todo }));
  };

  return (
    <Form
      form={form}
      onFinish={handleValidationFinish}
      layout="inline"
      style={{ justifyContent: "space-between" }}
    >
      <Form.Item
        name="title"
        label="Title"
        rules={[{ required: true, message: "Title is required" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="dueDate"
        label="Due date"
        rules={[{ required: true, message: "Due date is required" }]}
      >
        <DatePicker />
      </Form.Item>
      <Button
        type="primary"
        htmlType="submit"
        title="Add todo"
        icon={<PlusOutlined />}
        loading={loading}
      />
    </Form>
  );
};

export default AddTodoForm;
