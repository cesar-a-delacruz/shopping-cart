import { describe, it, expect } from "vitest";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { render, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as Routing from "../src/Routing";
import App from "../src/App";

Routing.setRouting(<App />);

describe("render content", () => {
  it("products in cart", async () => {
    const memRouter = createMemoryRouter(Routing.routes, {
      initialEntries: ["/shop"],
    });

    render(<RouterProvider router={memRouter} />);

    await waitFor(() => {
      const productAmount = document.querySelector("div.product form input");
      const productAddToCart = document.querySelector(
        "div.product form button",
      );
      const cartItems = document.querySelector("dialog#cart ul").children;
      const user = userEvent.setup();

      productAmount.value = 2;
      user.click(productAddToCart);
      expect(cartItems.length).toBe(1);
    });
  });
});
