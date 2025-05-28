import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("App", () => {
  it("renders children", () => {
    const container = render(<App />).container;
    expect(container.children.length).toBe(3);
  });
});
