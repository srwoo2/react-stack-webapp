import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidV4 } from 'uuid';

interface Section {
  id: string;
  title: string;
  est: any;
  act: number;
  isDiscuss: boolean;
}

interface SectionState {
  sectionList: Section[];
}

const initialState: SectionState = {
  sectionList: [],
};

const sectionSlice = createSlice({
  name: 'section',
  initialState,
  reducers: {
    addSection: (state, action: PayloadAction<{ title: string; est: any }>) => {
      state.sectionList.push({
        id: uuidV4(),
        title: action.payload.title,
        est: action.payload.est,
        act: 0,
        isDiscuss: false,
      });
    },
    startDiscuss: (state, action: PayloadAction<string>) => {
      const section = state.sectionList.find((s) => s.id === action.payload);
      if (section) {
        section.isDiscuss = true;
      }
    },
    stopDiscuss: (state, action: PayloadAction<string>) => {
      const section = state.sectionList.find((s) => s.id === action.payload);
      if (section) {
        section.isDiscuss = false;
      }
    },
    removeSection: (state, action: PayloadAction<string>) => {
      state.sectionList = state.sectionList.filter((s) => s.id !== action.payload);
    },
  },
});

export const { addSection, startDiscuss, stopDiscuss, removeSection } = sectionSlice.actions;
export default sectionSlice.reducer;
