import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import * as Routing from "../src/Routing";
import App from "../src/App";

Routing.setRouting(<App />);

describe("error page", () => {
  it("display", () => {
    const memRouter = createMemoryRouter(Routing.routes, {
      initialEntries: ["/wrong-route"],
    });
    render(<RouterProvider router={memRouter} />);
    const errorDiv = document.querySelector("div.error");

    expect(errorDiv).not.toBe(null);
  });
});
