export default function Modal({
  open,
  title,
  onConfirm,
  onClose
}: {
  open: boolean;
  title: string;
  onConfirm: () => void;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>{title}</h3>
        <div className="modal-actions">
          <button onClick={onConfirm}>Yes</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
