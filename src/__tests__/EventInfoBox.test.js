import React from "react";
import { render, screen } from "@testing-library/react";
import EventInfoBox from "../components/EventInfoBox";
import "intersection-observer";

describe("EventInfoBox Component", () => {
  it("renders the component without crashing", () => {
    const icon = <svg data-testid="mock-icon" style={{ fill: "blue" }} />;
    const title = "Sample Event Title";
    const value = "Sample Event Value";
    const index = 0;

    render(
      <EventInfoBox
        icon={icon}
        title={title}
        value={value}
        last={false}
        index={index}
      />
    );
  });

  it("renders the component with provided props", () => {
    const icon = <svg data-testid="mock-icon" style={{ fill: "green" }} />;
    const title = "Sample Event Title";
    const value = "Sample Event Value";
    const index = 0;

    render(
      <EventInfoBox
        icon={icon}
        title={title}
        value={value}
        last={false}
        index={index}
      />
    );

    const titleElement = screen.getByText(title);
    const valueElement = screen.getByText(value);
    const iconElement = screen.getByTestId("mock-icon");

    expect(titleElement).toBeInTheDocument();
    expect(valueElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
  });

  it("does not render a Divider when the last box", () => {
    const icon = <svg style={{ fill: "red" }} />;
    const title = "Sample Event Title";
    const value = "Sample Event Value";
    const index = 2;

    render(
      <EventInfoBox
        icon={icon}
        title={title}
        value={value}
        last={true}
        index={index}
      />
    );

    const dividerElement = screen.queryByRole("separator");

    expect(dividerElement).not.toBeInTheDocument();
  });
});
