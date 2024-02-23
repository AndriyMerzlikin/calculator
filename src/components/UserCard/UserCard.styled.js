import styled from "styled-components";

export const NameTitle = styled.p`
  background-color: ${(props) => {
    switch (props.$variant) {
      case "name":
        return "green";
      case "email":
        return "yellow";
      default:
        break;
    }
  }};
`;
