import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import EventCard from "../components/EventCard";
import { BrowserRouter } from "react-router-dom";
import "intersection-observer";

const mockEvent = {
  name: "Sample Event",
  bannerName: "sample-banner.png",
  startDate: "2023-09-01T14:00:00Z",
  venue: "Sample Venue",
  _id: "sample-event-id",
};

it("renders without crashing", () => {
  const isPast = false;

  render(
    <BrowserRouter>
      <EventCard event={mockEvent} isPast={isPast} />
    </BrowserRouter>
  );
});

it("renders the component with provided props", () => {
  const isPast = false;

  render(
    <BrowserRouter>
      <EventCard event={mockEvent} isPast={isPast} />
    </BrowserRouter>
  );

  const eventName = screen.getByText(mockEvent.name);
  const eventStartDate = screen.getByText(/1st Sep 2023, 7:30 PM/);
  const eventVenue = screen.getByText(mockEvent.venue);
  const registerButton = screen.getByText("Register Now");

  expect(eventName).toBeInTheDocument();
  expect(eventStartDate).toBeInTheDocument();
  expect(eventVenue).toBeInTheDocument();
  expect(registerButton).toBeInTheDocument();
});

it("renders 'View Details' button for past events", () => {
  const isPast = true;

  render(
    <BrowserRouter>
      <EventCard event={mockEvent} isPast={isPast} />
    </BrowserRouter>
  );

  const viewDetailsButton = screen.getByText("View Details");
  expect(viewDetailsButton).toBeInTheDocument();
});

it("renders 'Register Now' button for upcoming events", () => {
  const isPast = false;

  render(
    <BrowserRouter>
      <EventCard event={mockEvent} isPast={isPast} />
    </BrowserRouter>
  );

  const registerButton = screen.getByRole("button", { name: /Register Now/i });
  expect(registerButton).toBeInTheDocument();
});

it("navigates to the event details page when button is clicked", () => {
  const isPast = false;
  const mockNavigate = jest.fn();

  render(
    <BrowserRouter>
      <EventCard event={mockEvent} isPast={isPast} navigate={mockNavigate} />
    </BrowserRouter>
  );

  const registerButton = screen.getByRole("button", { name: /Register Now/i });
  fireEvent.click(registerButton);

  expect(mockNavigate).toHaveBeenCalledWith(`/events/${mockEvent._id}`);
});
