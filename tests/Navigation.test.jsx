import { describe, it, expect } from "vitest";
import { render, screen, act } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import * as Routing from "../src/Routing";
import App from "../src/App";

Routing.setRouting(<App />);

describe("change pages", () => {
  it("click home", async () => {
    await act(async () => render(<RouterProvider router={Routing.router} />));
    const user = userEvent.setup();
    const link = screen.getByText("Home");
    await user.click(link);
    const mainChild = document.querySelector("main > *");
    expect(mainChild.id).toBe("home");
  });
  it("click shop", async () => {
    await act(async () => render(<RouterProvider router={Routing.router} />));
    const user = userEvent.setup();
    const link = screen.getByText("Shop");
    await user.click(link);
    const mainChild = document.querySelector("main > *");
    expect(mainChild.id).toBe("shop");
  });
});
