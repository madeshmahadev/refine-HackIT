import React from "react";
import { Link } from "@pankod/refine";

import { TitleProps } from "@pankod/refine";

export const Title: React.FC<TitleProps> = ({ collapsed }) => (
  <Link to="/">
    {collapsed ? (
      <div 
        style={{
          display: "flex",
          marginTop: "1rem",
          marginBottom: "1rem"
        }}
      >
        <img
          src={"/refine.svg"}
          alt="Refine"
          style={{
            width: "48px",
            padding: "9px ​18px",
            marginLeft: "0.75rem",
            marginTop: "10px"
          }}
        />
        <div
          style={{
            paddingTop: "12px",
            marginLeft: "0.5rem",
            display: "block"
          }}
        >
        </div>
      </div>
    ) : (
      <div 
        style={{
          display: "flex",
          marginTop: "1rem",
          marginBottom: "1rem"
        }}
      >
        <img
          src={"/refine.svg"}
          alt="Refine"
          style={{
            width: "48px",
            padding: "9px ​18px",
            marginLeft: "0.75rem",
            marginTop: "10px"
          }}
        />
        <div
          style={{
            paddingTop: "12px",
            marginLeft: "0.3rem",
            display: "block"
          }}
        >
          <h1
            style={{
              fontWeight: 500,
              textTransform: "capitalize",
              marginBottom: 0,
              fontSize: "14px",
              color: "#182127",
            }}
          >
            Ecstasy Creatives
          </h1>
          <span style={{ color: "#575757", fontWeight: 400, fontSize: "14px" }}>for Admins</span>
        </div>
      </div>
    )}
  </Link>
);
