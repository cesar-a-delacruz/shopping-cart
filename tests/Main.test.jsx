import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import * as Routing from "../src/Routing";
import App from "../src/App";

Routing.setRouting(<App />);

describe("children rendering", () => {
  it("Home", () => {
    const memRouter = createMemoryRouter(Routing.routes, {
      initialEntries: ["/"],
    });
    render(<RouterProvider router={memRouter} />);
    const mainChild = document.querySelector("main > *");

    expect(mainChild.id).toBe("home");
  });
  it("Shop", () => {
    const memRouter = createMemoryRouter(Routing.routes, {
      initialEntries: ["/shop"],
    });
    render(<RouterProvider router={memRouter} />);
    const mainChild = document.querySelector("main > *");
    
    expect(mainChild.id).toBe("shop");
  });
});
