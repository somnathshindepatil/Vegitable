import { Url } from "url";

export interface signUp {
    name: string;
    email: string;
    password: string;
  }
  export interface login {
    email: String;
    password: String;
  }

  export interface product{
    
     name: string;
     color: string;
     category: string;
     price: string;
     description:string;
     image:Url;

  }