import { useState } from "react";
// No need for './styles.css' if it's not provided or used in the problem context

const CheckboxesData = [
  {
    id: 1,
    label: "Fruits",
    children: [
      { id: 2, label: "Apple" },
      { id: 3, label: "Banana" },
      {
        id: 4,
        label: "Citrus",
        children: [
          { id: 5, label: "Orange" },
          { id: 6, label: "Lemon" },
        ],
      },
    ],
  },
  {
    id: 7,
    label: "Vegetables",
    children: [
      { id: 8, label: "Carrot" },
      { id: 9, label: "Broccoli" },
    ],
  },
];

// Helper function to find a node by its ID (useful for traversal)
const findNodeById = (id, tree) => {
  for (const item of tree) {
    if (item.id === id) {
      return item;
    }
    if (item.children) {
      const found = findNodeById(id, item.children);
      if (found) {
        return found;
      }
    }
  }
  return null;
};

// Helper function to find the direct parent of a node given its ID
const findDirectParent = (nodeId, tree) => {
  for (const item of tree) {
    if (item.children && item.children.some(child => child.id === nodeId)) {
      return item; // 'item' is the direct parent
    }
    if (item.children) {
      const foundParent = findDirectParent(nodeId, item.children);
      if (foundParent) {
        return foundParent;
      }
    }
  }
  return null;
};


const Checkboxes = ({ data, checked, setChecked }) => {

  const handleChange = (isChecked, clickedNode) => {
    setChecked(prev => {
      const newState = { ...prev };

      // 1. Update the clicked node's state
      newState[clickedNode.id] = isChecked;

      // 2. Update children based on the clicked node's state
      const updateChildren = (node) => {
        if (node.children) {
          node.children.forEach((child) => {
            newState[child.id] = isChecked;
            updateChildren(child);
          });
        }
      };
      updateChildren(clickedNode);

      // 3. Update parents based on their children's states
      const updateParents = (nodeId) => {
        // Find the path from root to the current node
        const path = [];
        let currentNode = findNodeById(nodeId, CheckboxesData); // Start with the clicked node
        while(currentNode) {
            path.unshift(currentNode); // Add to the beginning to get root-to-node path
            currentNode = findDirectParent(currentNode.id, CheckboxesData); // Find its direct parent
        }

        // Iterate from the bottom up (closest parent to root)
        // Skip the clickedNode itself, start from its direct parent
        for (let i = path.length - 2; i >= 0; i--) { // -2 because path[path.length - 1] is the clickedNode
            const parentNode = path[i];
            // Get the actual node definition from the original data structure
            const actualParent = findNodeById(parentNode.id, CheckboxesData);

            if (actualParent && actualParent.children) {
                const allChildrenChecked = actualParent.children.every(
                    (child) => newState[child.id] === true
                );
                // Update parent's state only if it changes
                if (newState[parentNode.id] !== allChildrenChecked) {
                    newState[parentNode.id] = allChildrenChecked;
                }
            }
        }
      };
      updateParents(clickedNode.id); // Start updating parents from the clicked node's parent upwards

      console.log("newState is", newState);
      return newState;
    });
  };

  return (
    <div>
      {data.map((node) => {
        return (
          <div key={node.id} style={{ paddingLeft: "20px" }}>
            <input
              type="checkbox"
              checked={checked[node.id] || false}
              onChange={(e) => handleChange(e.target.checked, node)}
            />
            <span>{node.label}</span>
            {node.children && (
              <Checkboxes
                data={node.children}
                checked={checked}
                setChecked={setChecked}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default function NestedCheckbox() {
  const [checked, setChecked] = useState({ });
  return (
    <div>
      <h2>Nested Checkbox</h2>
      <Checkboxes
        data={CheckboxesData}
        checked={checked}
        setChecked={setChecked}
      />
    </div>
  );
}