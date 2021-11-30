import { DeleteOutlined } from "@ant-design/icons";
import { Button, Checkbox } from "antd";
import Text from "antd/lib/typography/Text";
import React from "react";

interface Props {
  todo: ITodo;
  deleteLoading: boolean;
  onToggle: (isChecked: boolean, todoId: string) => void;
  onDelete: (todo: ITodo) => void;
}
const TodoItem: React.FC<Props> = ({
  todo,
  deleteLoading,
  onToggle,
  onDelete,
}) => {
  return (
    <div className="todo-item">
      <div>
        <Checkbox
          defaultChecked={todo.isDone}
          onChange={(e) => onToggle(e.target.checked, todo.uid as string)}
        />
        <Text className="todo-item-title" delete={todo.isDone}>
          {todo.title}
        </Text>
      </div>
      <div>
        <Text type="secondary">
          Due: {new Date(todo.dueDate).toLocaleDateString()}
        </Text>
        <Button
          className="todo-delete-btn"
          type="ghost"
          danger
          size="small"
          onClick={() => onDelete(todo)}
          loading={deleteLoading}
        >
          <DeleteOutlined />
        </Button>
      </div>
    </div>
  );
};

export default TodoItem;
