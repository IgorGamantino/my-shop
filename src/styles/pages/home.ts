import { styled } from "..";

export const HomeContainer = styled("main", {
  display: "flex",
  // gap: "3rem"
  width: "100%",
  minWidth: 400,

  "a:first-child":{
    marginLeft: 10
  }
 
});

export const Product = styled("a", {
  alignItems: "center",
  background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",

  maxWidth: 400,
  borderRadius: 8,
});

export const Footer = styled("footer", {
  backgroundColor: "rgba(32, 32, 36, 0.90)",
  padding: "32px 40px",
  borderRadius: 6,
  display: "flex",
  justifyContent: "space-between",
});

export const Name = styled("strong", {
  fontSize: 20,
  fontWeight: 700,
  fontFamily: "$roboto",
});

export const Price = styled("span", {
  fontSize: 24,
  color: '$green300',
  fontWeight: 700,
});
