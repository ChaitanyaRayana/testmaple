// app/not-found.js
"use client";
import { useRouter } from "next/navigation";
import { Suspense, useState } from "react";
import CircularLoading from "./components/common/loader/Loader";

export default function NotFound() {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Suspense fallback={<CircularLoading/>}>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          marginTop: "auto",
          marginBottom: "auto",
        }}
        className="not-found"
      >
        <h1 style={{ fontSize: "18px", fontWeight: "normal" }}>
          <strong>404</strong> | This page could not be found.
        </h1>

        <button
          onClick={() => router.push("/")}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            marginTop: "24px",
            padding: "12px 18px",
            fontSize: "16px",
            cursor: "pointer",
            borderRadius: "5px",
            backgroundColor: isHovered ? "#0059c1" : "#0070f3",
            color: "white",
            border: "none",
            transition: "background-color 0.3s ease",
            boxShadow: isHovered ? "0 4px 12px rgba(0, 0, 0, 0.2)" : "none",
          }}
        >
          Go to Home
        </button>
      </div>
    </Suspense>
  );
}
