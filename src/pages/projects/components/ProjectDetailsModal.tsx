import { Button, Empty, List, Modal } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { resetDeleteTodoData, resetUpdateProjectData } from "../projects.slice";
import { deleteTodoAsync, updateProjectAsync } from "../projects.thunk";
import AddTodoForm from "./AddTodoForm";
import TodoItem from "./TodoItem";

interface Props {
  project: IProject;
  isOpen: boolean;
  onClose: () => void;
}
const ProjectDetailsModal: React.FC<Props> = ({ project, isOpen, onClose }) => {
  const dispatch = useDispatch();

  const {
    loading: deleteTodoLoading,
    deletingTodoId,
    data: deleteTodoData,
  } = useSelector((state: RootState) => state.projects.deleteTodoData);

  const { data: updateProjectData } = useSelector(
    (state: RootState) => state.projects.updateProjectData
  );

  useEffect(() => {
    if (deleteTodoData) {
      dispatch(resetDeleteTodoData());
    }
  }, [deleteTodoData]);

  useEffect(() => {
    if (updateProjectData) {
      dispatch(resetUpdateProjectData());
    }
  }, [updateProjectData]);

  const getModalFooter = () => [<Button onClick={onClose}>Close</Button>];

  const handleTodoToggle = (isDone: boolean, todoId: string) => {
    const projectToUpdate: IProject = {
      ...project,
      todos: project.todos.map((todo) =>
        todo.uid === todoId ? { ...todo, isDone } : todo
      ),
    };

    dispatch(
      updateProjectAsync({
        projectId: `${project.id}`,
        project: projectToUpdate,
      })
    );
  };

  const handleTodoDelete = (todo: ITodo) => {
    dispatch(deleteTodoAsync({ projectId: `${project.id}`, todo }));
  };

  if (!project) {
    return null;
  }
  return (
    <Modal
      visible={isOpen}
      footer={getModalFooter()}
      onCancel={onClose}
      width={650}
      title={project.name}
    >
      {project.todos.length === 0 && (
        <Empty description="No tasks" style={{ marginBottom: "20px" }} />
      )}

      {project.todos.length > 0 && (
        <List
          bordered
          dataSource={project.todos}
          style={{ marginBottom: "20px" }}
          renderItem={(todo) => (
            <List.Item>
              <TodoItem
                key={todo.uid}
                todo={todo}
                deleteLoading={deleteTodoLoading && deletingTodoId === todo.uid}
                onDelete={handleTodoDelete}
                onToggle={handleTodoToggle}
              />
            </List.Item>
          )}
        />
      )}
      <AddTodoForm projectId={project.id as string} />
    </Modal>
  );
};

export default ProjectDetailsModal;
