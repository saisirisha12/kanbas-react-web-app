import { MdEdit, MdDelete } from "react-icons/md";

export default function AssignmentControlButtons({
  assignmentId,
  deleteAssignment,
  editAssignment,
}: {
  assignmentId: string;
  deleteAssignment: (id: string) => void;
  editAssignment: (id: string) => void;
}) {
  return (
    <div className="action-buttons d-flex align-items-center">
      <MdEdit
        className="icon-edit"
        onClick={(e) => {
          e.stopPropagation();
          editAssignment(assignmentId);
        }}
        style={{ cursor: "pointer", color: "blue", fontSize: "2rem" }}
        title="Edit Assignment"
      />

      <MdDelete
        className="icon-delete"
        onClick={(e) => {
          e.stopPropagation();
          if (window.confirm("Are you sure you want to delete this assignment?")) {
            deleteAssignment(assignmentId);
          }
        }}
        style={{ cursor: "pointer", color: "red", fontSize: "2rem" }}
        title="Delete Assignment"
      />
    </div>
  );
}
