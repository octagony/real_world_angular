import { createAction, props } from "@ngrx/store"
import { ActionTypes } from "../actionTypes"
import { IRegisterRequest } from "../../types/registerRequest.interface"

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<IRegisterRequest>(),
)
