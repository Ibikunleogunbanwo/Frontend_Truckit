import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Button } from "@/components/ui/button";
import { TextField } from "@/components/ui/field";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";

describe("shared controls", () => {
  it("does not submit a form when an action button has no explicit type", async () => {
    let submitted = false;
    render(
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitted = true;
        }}
      >
        <Button>Preview</Button>
      </form>,
    );
    await userEvent.click(screen.getByRole("button", { name: "Preview" }));
    expect(submitted).toBe(false);
  });
  it("associates validation feedback with its labelled input", () => {
    render(
      <TextField
        label="Email address"
        error="Enter a valid email address."
        type="email"
      />,
    );
    const input = screen.getByRole("textbox", { name: "Email address" });
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toHaveAccessibleDescription("Enter a valid email address.");
  });
  it("opens a labelled dialog, closes with Escape, and restores trigger focus", async () => {
    const user = userEvent.setup();
    render(
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open details</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Move details</DialogTitle>
          <DialogDescription>Review your move.</DialogDescription>
          <DialogClose asChild>
            <Button>Done</Button>
          </DialogClose>
        </DialogContent>
      </Dialog>,
    );
    const trigger = screen.getByRole("button", { name: "Open details" });
    await user.click(trigger);
    expect(screen.getByRole("dialog", { name: "Move details" })).toBeVisible();
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });
  it("supports toggling a labelled checkbox with the keyboard", async () => {
    const user = userEvent.setup();
    render(<Checkbox label="Accept terms" />);
    await user.tab();
    await user.keyboard(" ");
    expect(
      screen.getByRole("checkbox", { name: "Accept terms" }),
    ).toBeChecked();
  });
});
