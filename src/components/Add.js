import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 40px;
`;

function Add() {
  return (
    <Wrapper>
      <img
        style={{ cursor: "pointer" }}
        width={"100%"}
        src="https://images.olx.com.pk/thumbnails/289009991-800x600.webp"
        alt=""
      />
      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <img
          src="https://s0.2mdn.net/simgad/14471550135650449799"
          style={{ cursor: "pointer" }}
          alt=""
        />
      </div>
    </Wrapper>
  );
}

export default Add;
