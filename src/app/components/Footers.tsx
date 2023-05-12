import { Container } from "./core/Container";

export function Footer() {
  return (
    <Container className="py-2">
      <div className="flex flex-col border-t border-slate-400/10 py-4 lg:flex-row-reverse justify-between items-center">
        <p className="text-sm text-slate-400">
          {`${new Date().getFullYear()} Viszual. All rights reserved.`}
        </p>
      </div>
    </Container>
  );
}
