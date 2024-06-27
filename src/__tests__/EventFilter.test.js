import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import EventFilter from "../components/EventFilter";
import { BrowserRouter } from "react-router-dom";
import "intersection-observer";

// Mock the useCommitteesQuery hook
jest.mock("../state/committeeApiSlice.js", () => ({
  useCommitteesQuery: jest.fn(),
}));

const mockCommittees = [
  { _id: "1", name: "Committee X" },
  { _id: "2", name: "Committee Y" },
];

const mockEvents = [
  {
    id: 1,
    name: "Event A",
    committee: [{ _id: "1", name: "Committee X" }],
  },
  {
    id: 2,
    name: "Event B",
    committee: [{ _id: "2", name: "Committee Y" }],
  },
  {
    id: 3,
    name: "Event C",
    committee: [{ _id: "1", name: "Committee X" }],
  },
];

it("renders without crashing", () => {
  const setAnimateCardMock = jest.fn();
  const setFilteredEventsMock = jest.fn();

  require("../state/committeeApiSlice.js").useCommitteesQuery.mockReturnValue({
    data: mockCommittees,
  });

  render(
    <EventFilter
      setAnimateCard={setAnimateCardMock}
      setFilteredEvents={setFilteredEventsMock}
      events={mockEvents}
    />
  );
});

it("renders the component with provided props", () => {
  const setAnimateCardMock = jest.fn();
  const setFilteredEventsMock = jest.fn();

  require("state/committeeApiSlice").useCommitteesQuery.mockReturnValue({
    data: mockCommittees,
  });

  render(
    <EventFilter
      setAnimateCard={setAnimateCardMock}
      setFilteredEvents={setFilteredEventsMock}
      events={mockEvents}
    />
  );

  const filterLabel = screen.getByText(/Filter:/);
  const committeeSelect = screen.getByLabelText("Committee");

  expect(filterLabel).toBeInTheDocument();
  expect(committeeSelect).toBeInTheDocument();
});

it("renders 'All' as the initial value in the select", () => {
  const setAnimateCardMock = jest.fn();
  const setFilteredEventsMock = jest.fn();

  require("state/committeeApiSlice").useCommitteesQuery.mockReturnValue({
    data: mockCommittees,
  });

  render(
    <EventFilter
      setAnimateCard={setAnimateCardMock}
      setFilteredEvents={setFilteredEventsMock}
      events={mockEvents}
    />
  );

  const selectValue = screen.getByText(/All/);
  expect(selectValue).toBeInTheDocument();
});
