import {
    render,
    screen,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./index";

test("renders the landing page", async () => {
    render(<Counter />);

    expect(screen.getByRole("heading")).toHaveTextContent(/The Counter/);
    // expect(screen.getByRole("combobox")).toHaveDisplayValue("Select a breed");
    // expect(
    //     await screen.findByRole("option", { name: "husky" })
    // ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Increment" })).not.toBeDisabled();
    // expect(screen.getByRole("img")).toBeInTheDocument();
});

test("increment counter", async () => {
    render(<Counter />);

    //Initiate the search request
    const btn = screen.getByRole("button", { name: "Increment" });
    expect(btn).not.toBeDisabled();
    userEvent.click(btn);
    expect(screen.getByText('Current Count: 1')).toBeInTheDocument()
});

test("disable counter", async () => {
    render(<Counter />);

    //Click button 4 times, it should then be disabled
    const btn = screen.getByRole("button", { name: "Increment" });
    expect(btn).not.toBeDisabled();
    for (let index = 0; index < 5; index++) {
        expect(btn).not.toBeDisabled(); 
        userEvent.click(btn);
        expect(screen.getByText(`Current Count: ${index+1}`)).toBeInTheDocument() 
        
    }
    expect(btn).toBeDisabled();
    
});