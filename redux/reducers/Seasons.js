import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  seasons: [
    {
      categoryId: 1,
      name: 'All',
      seasonFilter: 'S',
    },
    {
      categoryId: 2,
      name: 'Season 1',
      seasonFilter: 'S01',
    },
    {
      categoryId: 3,
      name: 'Season 2',
      seasonFilter: 'S02',
    },
    {
      categoryId: 4,
      name: 'Season 3',
      seasonFilter: 'S03',
    },
  ],
  selectedCategoryId: 1,
};

const Seasons = createSlice({
  name: 'seasons',
  initialState: initialState,
  reducers: {
    updateSelectedCategoryId: (state, action) => {
      state.selectedCategoryId = action.payload;
    },
  },
});

export const {updateSelectedCategoryId} = Seasons.actions;

export default Seasons.reducer;
