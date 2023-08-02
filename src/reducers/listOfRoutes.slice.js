import {createSlice} from "@reduxjs/toolkit";

const initialState = [
  [
    {
      geotag: [59.84660399, 30.29496392],
      info: 'start'
    },
    {
      geotag: [59.82934196, 30.42423701],
      info: 'waypoint'
    },
    {
      geotag: [59.83567701, 30.38064206],
      info: 'end point'
    }
  ],
  [
    {
      geotag: [59.82934196, 30.42423701],
      info: 'start'
    },
    {
      geotag: [59.82761295, 30.41705607],
      info: 'waypoint'
    },
    {
      geotag: [59.84660399, 30.29496392],
      info: 'end point'
    }
  ],
  [
    {
      geotag: [59.83567701, 30.38064206],
      info: 'start'
    },
    {
      geotag: [59.84660399, 30.29496392],
      info: 'waypoint'
    },
    {
      geotag: [59.82761295, 30.41705607],
      info: 'end point'
    }
  ]
];

export const routesSlice = createSlice({
  name: 'routesList',
  initialState,
  reducers: {
    addRoute: (state, action) => {
      state.routesList.push(action.payload)
    },
  },
});

export const {addRoute} = routesSlice.actions;

export default routesSlice.reducer;