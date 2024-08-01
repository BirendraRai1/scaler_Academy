//intersection of two sorted arrays  arr1=[1,2,2,3,4,4] and arr2=[2,2,4,5,5,6,2000]

//two pointer approach//
function intersection(nums1, nums2) {
  let m = nums1.length;
  let n = nums2.length;
  let result = [];
  for (let i = 0, j = 0; i < m && j < n; ) {
    if (nums1[i] == nums2[j]) {
      result.push(nums1[i]);
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) i++;
    else j++;
  }
  return result;
}
//console.log(intersection([1, 2, 2, 3, 4, 4], [2, 2, 4, 4, 5, 5, 6, 2000]));

//another approach
function intersection1(arr1, arr2) {
  let result = [];
  let obj = {};
  for (let i = 0; i < arr1.length; i++) {
    if (obj[arr1[i]]) obj[arr1[i]] = obj[arr1[i]] + 1;
    else obj[arr1[i]] = 1;
  }
  for (let i = 0; i < arr2.length; i++) {
    if (obj[arr2[i]]) {
      result.push(arr2[i]);
      obj[arr2[i]]--;
    }
  }
  return result;
}
console.log(intersection1([1, 2, 2, 3, 4], [2, 2, 4, 4, 5, 5, 6, 2000]));

//function to create and show the modal.Find bug in code and fix it
// function showModal() {
//   const modal = document.createElement("div");
//   modal.className = "modal";
//   const modalContent = document.createElement("div");
//   modalContent.className = "modalContent";
//   const closeButton = document.createElement("span");
//   closeButton.className = "close";
//   closeButton.textContent = "x";
//   const content = document.createElement("p");
//   content.textContent = "This is a dynamically created modal";
//   modalContent.appendChild(closeButton);
//   modalContent.appendChild(content);
//   modalContent.appendChild(modalContent);
//   document.body.appendChild(modal);

//   closeButton.addEventListener("click", function () {
//     modal.style.display = "none";
//   });
// }

// const style = `{
//   .modal{
//     display:none
//     position:fixed
//     z-index:-1
//     left:0
//     top:0
//     width:100%
//     height:100%
//     overflow:auto
//     background-color:rgba(0,0,0,0.4)
//   }
// }`;
// const styleElement = document.createElement("div");
// styleElement.textContent = style;
// document.head.appendChild(styleElement);

//showModal();

//solution is at line 72 instead of document.createElement("div") it should be document.createElement("style") and in the line
//61 it should be display :block

//how can I create a custom polyfill method for document.getElementById to work with a custom
//tree structure ensuring compatability and functionality similar to the native method

//Define the custom tree structure
const customTree = {
  id: "root",
  children: [
    {
      id: "child1",
      children: [{ id: "grandChild1", children: [] }],
    },
    {
      id: "child2",
      children: [],
    },
  ],
};
let document = {};
document.getElementById = function (id) {
  return getId(id, customTree);
};

let result;

function getId(id, childTree) {
  if (childTree.id === id) {
    return childTree;
  } else {
    childTree.children.forEach((child) => {
      result = getId(id, child);
    });
  }
  return result;
}

const element = document.getElementById("grandChild1");

console.log("element is", element);
