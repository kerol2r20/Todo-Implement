export interface todo {
  content: string;
  completed: boolean;
  timestamp: Date;
}

export interface state {
  todos: todo[];
}
