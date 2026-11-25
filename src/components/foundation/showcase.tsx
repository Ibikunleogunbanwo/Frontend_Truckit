"use client";
import * as React from "react";
import { AppShell, type ShellRole } from "@/components/layout/app-shell";
import { PublicShell } from "@/components/layout/public-shell";
import { Button } from "@/components/ui/button";
import { TextField, Select, Textarea } from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { EmptyState, ErrorState, LoadingState } from "@/components/ui/feedback";

const swatches = [
  ["Primary", "bg-primary", "#14B8A6"],
  ["Surface", "bg-background border border-border", "#FFFFFF"],
  ["Text", "bg-foreground", "#171717"],
  ["Muted", "bg-muted", "#F2F2F2"],
  ["Link / focus", "bg-accent-foreground", "#087C70"],
];
const sections = [
  { label: "Foundation", href: "#foundation", icon: "dashboard" as const },
  { label: "Form controls", href: "#form-controls", icon: "move" as const },
  { label: "Data & feedback", href: "#data-feedback", icon: "quotes" as const },
  { label: "Layout shells", href: "#layout-shells", icon: "account" as const },
];
export function FoundationShowcase() {
  const [role, setRole] = React.useState<ShellRole>("customer");
  const [activeHref, setActiveHref] = React.useState("#foundation");
  const [result, setResult] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");
  React.useEffect(() => {
    const update = () => setActiveHref(window.location.hash || "#foundation");
    update();
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);
  return (
    <AppShell role={role} items={sections} activeHref={activeHref}>
      <div className="mx-auto max-w-[1130px] space-y-10">
        <section id="foundation" className="space-y-6">
          <div className="flex flex-wrap items-start justify-between gap-5">
            <div>
              <p className="mb-1 text-xs font-semibold text-accent-foreground">
                Truckit / Shared foundation
              </p>
              <h1 className="text-2xl font-bold leading-9">
                Ready for the next move.
              </h1>
              <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                The building blocks for customer and service center screens.
                This is a component showcase with sample data.
              </p>
            </div>
            <div className="w-full sm:w-48">
              <label
                htmlFor="preview-role"
                className="mb-1 block text-xs text-muted-foreground"
              >
                Preview shell
              </label>
              <Select
                id="preview-role"
                value={role}
                onChange={(e) => setRole(e.target.value as ShellRole)}
              >
                <option value="customer">Customer</option>
                <option value="service_center">Service center</option>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              ["Body type", "14 / 24", "Montserrat Medium"],
              ["Control radius", "5 px", "Buttons and fields"],
              ["Card radius", "10 px", "Panels and tables"],
              ["Desktop shell", "80 / 250", "Header / sidebar, px"],
            ].map(([label, value, detail]) => (
              <Card key={label}>
                <CardContent className="p-5">
                  <p className="text-xs">{label}</p>
                  <p className="my-2 text-2xl font-bold">{value}</p>
                  <p className="text-xs text-muted-foreground">{detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Color and typography</CardTitle>
              <Badge>From Figma</Badge>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-5 sm:grid-cols-5">
                {swatches.map(([name, color, hex]) => (
                  <div key={name}>
                    <div className={`mb-3 h-16 rounded-control ${color}`} />
                    <p className="text-xs font-bold">{name}</p>
                    <p className="text-xs text-muted-foreground">{hex}</p>
                  </div>
                ))}
              </div>
              <div className="mt-7 grid gap-5 border-t border-border pt-6 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-medium">Move anywhere, anytime.</p>
                  <p className="text-sm font-bold">Move anywhere, anytime.</p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Montserrat · Medium 500 / Bold 700
                  </p>
                </div>
                <div>
                  <p className="font-display text-lg font-bold leading-9">
                    Our services.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Inknut Antiqua · Brand and public headings
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        <section id="form-controls" className="space-y-5">
          <h2 className="text-lg font-bold">Form controls</h2>
          <Card>
            <CardHeader>
              <CardTitle>Actions</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap items-center gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Preview move details</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogTitle>Move details</DialogTitle>
                  <DialogDescription>
                    Sample move details for the shared dialog preview.
                  </DialogDescription>
                  <dl className="grid gap-4 text-sm">
                    <div>
                      <dt className="text-xs text-muted-foreground">Pickup</dt>
                      <dd>123 Maple Street, Toronto, ON</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-muted-foreground">
                        Drop-off
                      </dt>
                      <dd>456 Wood Street, Toronto, ON</dd>
                    </div>
                  </dl>
                  <DialogClose asChild>
                    <Button size="sm">Done</Button>
                  </DialogClose>
                </DialogContent>
              </Dialog>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setResult("Secondary action selected.")}
              >
                Secondary action
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setResult("Outline action selected.")}
              >
                Outline action
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setResult("Ghost action selected.")}
              >
                Ghost action
              </Button>
              <Button size="sm" disabled>
                Disabled
              </Button>
              <p
                role="status"
                className="basis-full text-xs text-accent-foreground"
              >
                {result}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Move request fields</CardTitle>
              <Badge>Interactive preview</Badge>
            </CardHeader>
            <CardContent>
              <form
                className="space-y-6"
                noValidate
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                    setError("Enter a valid email address.");
                    return;
                  }
                  setError("");
                  setResult("Preview checked. No move request was sent.");
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <TextField
                    label="Pickup location"
                    placeholder="123 Maple Street, Toronto"
                    autoComplete="street-address"
                  />
                  <TextField label="Move date" type="date" />
                  <div className="space-y-1.5">
                    <label htmlFor="truck-type">Truck type</label>
                    <Select id="truck-type" defaultValue="cargo_van">
                      <option value="cargo_van">Cargo van</option>
                      <option value="box_truck">Box truck</option>
                    </Select>
                  </div>
                  <TextField
                    label="Email address"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={error}
                    hint="Used to contact you about your move."
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="handling">
                    Special handling instructions
                  </label>
                  <Textarea
                    id="handling"
                    placeholder="Tell your movers what needs extra care…"
                  />
                </div>
                <Checkbox
                  label="I need movers to help with loading."
                  defaultChecked
                />
                <div className="flex flex-wrap items-center gap-4">
                  <Button type="submit" size="sm">
                    Check preview
                  </Button>
                  <span className="text-xs text-muted-foreground">
                    Preview only. No information is saved.
                  </span>
                </div>
              </form>
            </CardContent>
          </Card>
        </section>
        <section id="data-feedback" className="space-y-5">
          <h2 className="text-lg font-bold">Data and feedback</h2>
          <Tabs defaultValue="upcoming">
            <TabsList aria-label="Move examples">
              <TabsTrigger value="upcoming">Upcoming moves</TabsTrigger>
              <TabsTrigger value="empty">Empty state</TabsTrigger>
              <TabsTrigger value="loading">Loading</TabsTrigger>
              <TabsTrigger value="error">Error</TabsTrigger>
            </TabsList>
            <TabsContent value="upcoming">
              <Table>
                <caption className="sr-only">Sample upcoming moves</caption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Pickup location</TableHead>
                    <TableHead>Drop-off location</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Toronto, Ontario</TableCell>
                    <TableCell>Ottawa, Ontario</TableCell>
                    <TableCell className="whitespace-nowrap">
                      CA$350.00
                    </TableCell>
                    <TableCell>
                      <Badge tone="success">Confirmed</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Calgary, Alberta</TableCell>
                    <TableCell>Edmonton, Alberta</TableCell>
                    <TableCell className="whitespace-nowrap">
                      CA$240.00
                    </TableCell>
                    <TableCell>
                      <Badge tone="warning">Pending</Badge>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="empty">
              <EmptyState
                title="No upcoming moves"
                description="Your confirmed moves will appear here once you accept a quote."
                action={
                  <Button asChild size="sm">
                    <a href="#form-controls">Preview request fields</a>
                  </Button>
                }
              />
            </TabsContent>
            <TabsContent value="loading">
              <Card>
                <CardContent>
                  <LoadingState label="Loading sample moves" />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="error">
              <ErrorState
                description="This is an example of a connection error. Try again to return to the sample state."
                onRetry={() =>
                  setResult("Retry preview selected. No API request was sent.")
                }
              />
            </TabsContent>
          </Tabs>
        </section>
        <section id="layout-shells" className="space-y-5">
          <h2 className="text-lg font-bold">Layout shells</h2>
          <PublicShell
            navigation={
              <>
                <a href="#form-controls">Request a move</a>
                <a href="#data-feedback">View examples</a>
              </>
            }
          >
            <h3 className="font-display text-xl font-bold leading-9 text-accent-foreground">
              Move anywhere, anytime with TruckIt.
            </h3>
            <p className="mt-3 max-w-xl text-sm text-muted-foreground">
              A shared public header, content area, and footer for the next set
              of screens.
            </p>
            <Button asChild size="sm" className="mt-6">
              <a href="#form-controls">Explore the controls</a>
            </Button>
          </PublicShell>
        </section>
        <footer className="border-t border-border pt-5 text-xs text-muted-foreground">
          Foundation preview · Canadian addresses and CAD · Product screens are
          the next milestone.
        </footer>
      </div>
    </AppShell>
  );
}
