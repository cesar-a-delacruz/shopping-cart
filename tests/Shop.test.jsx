import { describe, it, expect } from "vitest";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { render, waitFor, act } from "@testing-library/react";
import * as Routing from "../src/Routing";
import App from "../src/App";

Routing.setRouting(<App />);

describe("render content", () => {
  it("products", async () => {
    const memRouter = createMemoryRouter(Routing.routes, {
      initialEntries: ["/shop"],
    });

    await act(async () => render(<RouterProvider router={memRouter} />));

    await waitFor(() => {
      expect(document.querySelectorAll("div.product").length).toBe(20);
    });
  });
});
