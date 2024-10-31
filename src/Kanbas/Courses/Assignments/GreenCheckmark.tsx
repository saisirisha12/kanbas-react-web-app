import { FaCheckCircle, FaCircle } from "react-icons/fa";
export default function GreenCheckmark() {
  return (
    <span className="me-2 mb-1">
      <FaCheckCircle style={{ top: "2px" }}
        className="text-success me-1 mt-5 position-absolute fs-5 mb-2" />
      <FaCircle className="text-white  fs-6  " />
    </span>
);}