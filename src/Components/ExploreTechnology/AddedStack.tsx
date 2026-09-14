


import type { technology } from "../../types/technologyType";
import StackItem from "./StackItem";

interface AddedStackProps {
  stack: technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const AddedStack = ({
  stack,
  onRemove,
  onRemoveAll,
}: AddedStackProps) => {
  return (
    <div className="rounded-lg border bg-white p-4 shadow">

      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">
            Your Stack
          </h2>

          <p className="text-sm text-gray-500">
            {stack.length} Technology
            {stack.length !== 1 && "s"} Selected
          </p>
        </div>
      </div>

      {/* Empty State */}
      {stack.length === 0 ? (
        <p className="py-8 text-center text-gray-500">
          No technologies added yet.
        </p>
      ) : (
        <>
          {/* Stack Items */}
          <div>
            {stack.map((technology) => (
              <StackItem
                key={technology.id}
                technology={technology}
                onRemove={onRemove}
              />
            ))}
          </div>

          {/* Remove All */}
          <button
            onClick={onRemoveAll}
            className="mt-4 w-full rounded bg-red-500 px-4 py-2 text-white"
          >
            Remove All
          </button>
        </>
      )}

    </div>
  );
};

export default AddedStack;