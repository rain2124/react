import React, { useEffect, useState  } from "react";
import ReactDOM from "react-dom/client";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

type Todo = {
  id: number,
  title: string,
  status: string,
};

const initialTodos = Todo[] = [];