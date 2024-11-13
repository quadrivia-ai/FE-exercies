import React from "react";
import { Rocket } from "../components/Rocket";

import { render, screen } from "@testing-library/react";

describe("Test Rocket", () => {
  it("Uses the available fuel", () => {
    const { rerender } = render(<Rocket />);

    const fuelText = screen.queryByTestId("fuel-level");
    const rocket = screen.queryByTestId("rocket-core");

    expect(rocket).toBeInTheDocument();
    expect(rocket).toHaveStyle("bottom: 300px");
    expect(screen.getByText("Fuel Level")).toBeInTheDocument();
    expect(fuelText).toBeInTheDocument();
    expect(fuelText).toHaveTextContent("100%");

    rerender(<Rocket />);
  });
});
