import { render, screen } from "@testing-library/react";
import Greet from "../src/components/Greet";

describe("Greet", () => {
  it("should render 'Hello <name>' when the name is provided", () => {
    render(<Greet name="Kasili" />);
    screen.debug();

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/kasili/i);
  });

  it("should render login button when name is not provided", () => {
    render(<Greet />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i);
  });
});
