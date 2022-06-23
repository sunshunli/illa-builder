import { createSlice } from "@reduxjs/toolkit"
import { ConfigInitialState } from "@/redux/currentApp/config/configState"
import {
  updateBottomPanel,
  updateLeftPanel,
  updateRightPanel,
  plusScale,
  minusScale,
  updateSelectedComponent,
  updateSelectedAction,
  updateShowDot,
} from "@/redux/currentApp/config/configReducer"

const configSlice = createSlice({
  name: "builderInfo",
  initialState: ConfigInitialState,
  reducers: {
    updateLeftPanel,
    updateRightPanel,
    updateBottomPanel,
    updateShowDot,
    updateSelectedComponent,
    updateSelectedAction,
    plusScale,
    minusScale,
  },
})

export const configActions = configSlice.actions
export default configSlice.reducer
