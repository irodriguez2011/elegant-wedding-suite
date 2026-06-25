import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Krissie & Cory — June 19, 2027" },
      { name: "description", content: "You are cordially invited to the wedding of Krissie & Cory." },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/wedding.html");
  }, []);
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "serif", color: "#5a1a23" }}>
      Opening invitation…
    </div>
  );
}
