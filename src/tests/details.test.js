import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Detail from "./../components/Detail/index";
import { BrowserRouter as Router } from "react-router-dom";
import thunk from "redux-thunk";

const middlewares = [thunk];

const initialState = {
  detailState: {
    detail: {
      data: {
        id: 1,
        name: "Sentra test",
        model: "SV 2020 test",
        brand: "Nissan test",
        price: "20270.0",
        image_url:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-nissan-sentra-120-1574102513.jpg",
        removed: false,
        created_at: "2021-11-17T14:53:47.806Z",
        updated_at: "2021-11-17T14:53:47.806Z",
      },
    },
  },
};
const mockStore = configureStore(middlewares);
let store;

beforeEach(() => {
  store = mockStore(initialState);
  render(
    <Provider store={store}>
      <Router>
        <Detail />
      </Router>
    </Provider>
  );
});

describe("Details component", () => {
  test("Render car name", () => {
    expect(screen.getByText("Sentra test")).toBeInTheDocument();
  });
  test("Render car model", () => {
    expect(screen.getByText("SV 2020 test")).toBeInTheDocument();
  });
  test("Render car brand", () => {
    expect(screen.getByText("Nissan test")).toBeInTheDocument();
  });
  test("Render car price", () => {
    expect(screen.getByText("$20,270.0")).toBeInTheDocument();
  });
  test("Render Back button", () => {
    expect(screen.getByTestId("back-btn").tagName).toBe("BUTTON");
  });
  test("Render Reserve button", () => {
    expect(screen.getByTestId("reserve-btn").tagName).toBe("BUTTON");
  });
});
