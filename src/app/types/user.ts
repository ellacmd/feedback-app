export interface User {
  user: {
    image: string;
    firstname: string;
    lastname: string;
    username: string;
    password: string;
    role: string;
    createdAt: string;
    updatedAt: string;
    id: string;
    token: string;
    message: string;
  };
  message: string;
  token: string;
}
