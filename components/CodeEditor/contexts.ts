import {createContext, Dispatch} from "react";
import type {Action, State} from "@/components/CodeEditor/CodeEditor.types";

export const StateContext = createContext<State | null>(null)

export const DispatchContext = createContext<Dispatch<Action> | null>(null)