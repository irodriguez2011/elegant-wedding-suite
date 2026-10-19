import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cory & Shornakay — June 19, 2027" },
      { name: "description", content: "You are cordially invited to Cory and Shornakay's wedding at 501 Union in Brooklyn on June 19, 2027." },
      { property: "og:title", content: "Cory & Shornakay — Wedding Invitation" },
      { property: "og:description", content: "Celebrate Cory and Shornakay at 501 Union in Brooklyn on June 19, 2027." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
