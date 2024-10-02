import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
export default function AssignmentControlButtons() {
  return (
    <div className="float-end">
        <span style={{
            borderRadius: '1em', border: '1px solid rgba(0, 0, 0, 0.25)',
            padding: '0.5rem 1rem'
          }}>40% of Total</span>
      <BsPlus className="fs-4 me-2" />
      <IoEllipsisVertical className="fs-4" />
    </div>
);}
