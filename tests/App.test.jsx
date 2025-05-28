import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";
import * as Routing from "../src/Routing";
import App from "../src/App";

Routing.setRouting(<App />);

describe("children rendering", () => {
  it("renders all", () => {
    const container = render(
      <RouterProvider router={Routing.router} />,
    ).container;
    expect(container.children.length).toBe(3);
  });
});
