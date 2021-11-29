interface IUser {
  uid?: string;
  name: string;
  email: string;
}

interface IMenuItemData {
  index: number;
  label: string;
  icon: JsxElement;
  to: string;
}

interface ITodo {
  uid?: string;
  title: string;
  isDone: boolean;
  dueDate: Date;
}
interface IProject {
  uid?: string;
  ownerId: string;
  createdDate: Date;
  name: string;
  todos: ITodo[];
}
