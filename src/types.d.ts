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
  dueDate: number;
}
interface IProject {
  id?: string;
  ownerId: string;
  createdDate: number;
  name: string;
  todos: ITodo[];
}

interface IAddTodoThunkParams {
  todo: ITodo;
  projectId: string;
}

interface IDeleteTodoThunkParams {
  todo: ITodo;
  projectId: string;
}

interface IUpdateProjectThunkParams {
  projectId: string;
  project: IProject;
}
