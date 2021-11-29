import { Form, Input, Modal } from "antd";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../../firebaseAuth";
import { RootState } from "../../../store";
import { resetAddProjectData } from "../projects.slice";
import { addProjectAsync } from "../projects.thunk";

interface IAddProjectFormFields {
  name: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
}
const AddProjectModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [user] = useAuthState(auth);

  const {
    loading,
    data: addProjectData,
    error: addProjectError,
  } = useSelector((state: RootState) => state.projects.addProjectData);

  useEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {
    if (addProjectData) {
      form.resetFields();
      onClose();
      dispatch(resetAddProjectData());
      // TODO: show notification
    }
  }, [addProjectData]);

  const handleOk = () => {
    form.validateFields().then((values: IAddProjectFormFields) => {
      const projectData: IProject = {
        name: values.name,
        createdDate: Date.now(),
        ownerId: user?.uid as string,
        todos: [],
      };
      dispatch(addProjectAsync(projectData));
    });
  };

  return (
    <Modal
      title="Add new project"
      visible={isOpen}
      onOk={handleOk}
      onCancel={onClose}
      confirmLoading={loading}
    >
      <Form form={form}>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Project name is required" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddProjectModal;
