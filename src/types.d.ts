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
  id?: string;
  ownerId: string;
  createdDate: number;
  name: string;
  todos: ITodo[];
}
