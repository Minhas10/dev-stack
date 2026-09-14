import type { technology } from "../../types/technologyType";

interface StackItemProps {
  technology: technology;
  onRemove: (id: string) => void;
}

const StackItem = ({ technology, onRemove }: StackItemProps) => {
  return (
    <div className="flex items-center justify-between gap-3 border-b p-3">
      
      <div className="flex items-center gap-3">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-10 w-10 object-contain"
        />

        <div>
          <h3 className="font-semibold">
            {technology.name}
          </h3>

          <p className="text-sm text-gray-500">
            {technology.category}
          </p>
        </div>
      </div>

      <button
        onClick={() => onRemove(technology.id)}
        className="text-red-500"
      >
        ✕
      </button>

    </div>
  );
};

export default StackItem;