import { ImageResponse } from "next/og";

export const runtime = "edge";
export const contentType = "image/png";
export const size = { width: 1200, height: 630 };

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Background grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.08) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Blue accent blob */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(37,99,235,0.15)",
            filter: "blur(60px)",
          }}
        />
        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            zIndex: 1,
            padding: "0 80px",
            textAlign: "center",
          }}
        >
          {/* Logo mark */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "8px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "#2563eb",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                color: "white",
              }}
            >
              ⚡
            </div>
            <span
              style={{
                fontSize: "36px",
                fontWeight: "bold",
                color: "white",
                letterSpacing: "-0.5px",
              }}
            >
              Techini<span style={{ color: "#3b82f6" }}>fity</span>
            </span>
          </div>

          <h1
            style={{
              fontSize: "56px",
              fontWeight: "800",
              color: "white",
              lineHeight: 1.1,
              margin: 0,
              letterSpacing: "-1px",
            }}
          >
            IT Consultancy &
            <br />
            Technology Solutions
          </h1>

          <p
            style={{
              fontSize: "24px",
              color: "#94a3b8",
              margin: 0,
              maxWidth: "800px",
              lineHeight: 1.4,
            }}
          >
            Cloud · Cybersecurity · DevOps · AI · Managed IT
          </p>

          {/* Divider */}
          <div
            style={{
              width: "60px",
              height: "4px",
              borderRadius: "2px",
              background: "#2563eb",
              marginTop: "8px",
            }}
          />

          <p
            style={{
              fontSize: "20px",
              color: "#64748b",
              margin: 0,
            }}
          >
            techinifity.com
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
