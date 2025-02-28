import styled from "styled-components";
// import CallIcon from "../../assets/icons/call_icon.svg"

const ContactButton = styled.button`
  border: 2px solid #3498db;
  color: #fff;
  background: transparent;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.8em 2.2em;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 0.6em;
  transition: all 150ms ease-in-out;
  box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;

  &:hover {
    box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
  }
`;

const CallButton = styled.button`
  border: 2px solid #3498db;
  color: #fff;
  background: transparent;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.8em 2.2em;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 0.6em;
  transition: all 150ms ease-in-out;
  box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;

  &:hover {
    box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
  }
`;

export { ContactButton, CallButton };
