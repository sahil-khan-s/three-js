// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Document</title>
//   </head>
//   <body style="margin: 0%; padding: 0%; background-color: azure">
//     <style>
//       .clone-button {
//         z-index: 100;
//         background-color: white;
//         color: black;
//         border: none;
//         position: absolute;
//         left: 10%;
//         top: 41%;
//         padding: 3px 0px;
//         border-radius: 3px;
//         width: 106px;
        
//       }
//     </style>
//     <div
//       style="
//         position: absolute;
//         left: 10%;
//         top: 30%;
//         display: flex;
//         flex-direction: column;
//         gap: 10px;
//       "
//     >
//       <div
//         style="
//           background-color: #fff;
//           width: 96px;
//           border-radius: 3px;
//           padding: 1px 5px;
//         "
//       >
//         <label for="height">Height:</label>
//         <input
//           style="width: 40px; border: none"
//           type="number"
//           id="height"
//           value="5.5"
//         />
//       </div>
//       <div
//         style="
//           background-color: #fff;
//           width: 96px;
//           border-radius: 3px;
//           padding: 1px 5px;
//         "
//       >
//         <label for="width">Width:</label>
//         <input
//           style="width: 40px; border: none"
//           type="number"
//           id="width"
//           value="3"
//         />
//       </div>
//     </div>

//     <script type="module">
//       import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.js";
//       import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js";

//       // Wait for the DOM to load
//       window.addEventListener("DOMContentLoaded", () => {
//         // Get the height and width inputs
//         const heightInput = document.getElementById("height");
//         const widthInput = document.getElementById("width");

//         // Initialize the scene, camera, and renderer
//         const scene = new THREE.Scene();
//         const camera = new THREE.PerspectiveCamera(
//           85,
//           window.innerWidth / window.innerHeight,
//           0.1,
//           1000
//         );
//         const renderer = new THREE.WebGLRenderer();
//         renderer.setSize(window.innerWidth, window.innerHeight);
//         document.body.appendChild(renderer.domElement);

//         // Initialize the cube
//         let height = parseFloat(heightInput.value);
//         let width = parseFloat(widthInput.value);
//         const geometry = new THREE.BoxGeometry(width, height, 0);
//         const material = new THREE.MeshBasicMaterial({ color: 0x7a694b });
//         const cube = new THREE.Mesh(geometry, material);
//         cube.scale.x = width / 3;
//         cube.scale.y = height / 5.5;
//         scene.add(cube);

//         // Initialize the controls
//         const controls = new OrbitControls(camera, renderer.domElement);
//         camera.position.z = 5;
//         controls.update();

//         // Listen for changes to the height input
//         heightInput.addEventListener("input", () => {
//           height = parseFloat(heightInput.value);
//           geometry.parameters.height = height;
//           cube.scale.y = height / 5.5;
//         });

//         // Listen for changes to the width input
//         widthInput.addEventListener("input", () => {
//           width = parseFloat(widthInput.value);
//           geometry.parameters.width = width;
//           cube.scale.x = width / 3;
//         });

//         // Add a button to clone the cube
//         // Add a button to clone the cube
//         const cloneButton = document.createElement("button");
//         cloneButton.innerText = "Double Door";
//         cloneButton.classList.add("clone-button");
//         document.body.appendChild(cloneButton);
        

//         // Add an event listener to the button to clone the cube
//         cloneButton.addEventListener("click", () => {
//           const clone = cube.clone();
//           clone.position.x += width + 0.3;

//           scene.add(clone);
//         });

//         // Render the scene
//         const render = () => {
//           requestAnimationFrame(render);
//           controls.update();
//           renderer.render(scene, camera);
//         };
//         render();
//       });
//     </script>
//   </body>
// </html>
// const canvas = document.querySelector('canvas');

// const canvas = document.querySelector('canvas');
// let isDragging = false;
// let previousMouseY;
// canvas.addEventListener('mousedown', (event) => {
//   isDragging = true;
//   previousMouseY = event.clientY;
// });
// canvas.addEventListener('mousemove', (event) => {
//   if (isDragging) {
//     const delta = event.clientY - previousMouseY;
//     handleMesh.position.y += delta * 0.01; // adjust the speed of the movement as needed
//     previousMouseY = event.clientY;
//   }
// });
// canvas.addEventListener('mouseup', () => {
//   isDragging = false;
// });

// <script type="module">
// import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.js";
// import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js";
// import { DragControls } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/DragControls.js";

// // Wait for the DOM to load
// window.addEventListener("DOMContentLoaded", () => {
//   // Get the height and width inputs
//   const heightInput = document.getElementById("height");
//   const widthInput = document.getElementById("width");

//   // Initialize the scene, camera, and renderer
//   const scene = new THREE.Scene();
//   const camera = new THREE.PerspectiveCamera(
//     85,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000
//   );
//   const renderer = new THREE.WebGLRenderer();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   document.body.appendChild(renderer.domElement);

//   // Initialize the cube
//   let height = parseFloat(heightInput.value);
//   let width = parseFloat(widthInput.value);
//   const geometry = new THREE.BoxGeometry(width, height, 0.1);
//   const material = new THREE.MeshBasicMaterial({ color: 0x7a694b });
//   const cube = new THREE.Mesh(geometry, material);
//   cube.scale.x = width / 3;
//   cube.scale.y = height / 5.5;
//   scene.add(cube);
//   const handleGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.5, 5);
//   const handleMaterial = new THREE.MeshBasicMaterial({ color: 0x333333 });
//   const handleMesh = new THREE.Mesh(handleGeometry, handleMaterial);
//   handleMesh.position.set(1.2, height / 10 + -0.4, 0);
//   cube.add(handleMesh);

//   //dragging the handle
//   // Initialize the controls
//   const controls = new OrbitControls(camera, renderer.domElement);
//   const dragControls = new DragControls(
//     [handleMesh],
//     camera,
//     renderer.domElement
//   );
//   dragControls.addEventListener("dragstart", function (event) {
//     event.object.material.emissive.set(0xaaaaaa);
//   });

//   dragControls.addEventListener("dragend", function (event) {
//     event.object.material.emissive.set(0x000000);
//   });
//   camera.position.z = 5;
//   controls.update();
//   // Listen for changes to the height input
//   heightInput.addEventListener("input", () => {
//     height = parseFloat(heightInput.value);
//     geometry.parameters.height = height;
//     cube.scale.y = height / 5.5;
//   });

//   // Listen for changes to the width input
//   widthInput.addEventListener("input", () => {
//     width = parseFloat(widthInput.value);
//     geometry.parameters.width = width;
//     cube.scale.x = width / 3;
//   });

//   // Add a button to clone the cube
//   let clonedDoors = 0;
//   clonedDoors++;
//   const cloneButton = document.getElementById("button");
//   // cloneButton.innerText = "Double Door";
//   cloneButton.classList.add("clone-button");
//   document.body.appendChild(cloneButton);
//   // Add an event listener to the button to clone the cube
//   cloneButton.querySelector("select").addEventListener("change", () => {
//     const option = cloneButton.querySelector("select").value;
//     if (option === "Double") {
//       clonedDoors++;
//       const clone = cube.clone();
//       clone.position.x += width + 0.3;
//       if (clonedDoors % 2 === 0) {
//         clone.children[0].position.set(-1.2, height / 10 - 0.4, 0);
//       } else {
//         clone.children[0].position.set(1.2, height / 10 - 0.4, 0);
//         clone.rotation.y += Math.PI;
//       }
//       scene.add(clone);
//     } else if (option === "Single") {
//       // Remove any existing cubes from the scene
//       scene.remove(
//         ...scene.children.filter((child) => child instanceof THREE.Mesh)
//       );
//       // Add a new cube to the scene
//       const newCube = cube.clone();
//       scene.add(newCube);
//     }
//   });

//   // Render the scene
//   const render = () => {
//     requestAnimationFrame(render);
//     controls.update();
//     // dragControls.update(); // Move this line here
//     renderer.render(scene, camera);
//   };

//   render();
// });
// </script>

{/* <script type="module">
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.js";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js";
import { TransformControls } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/TransformControls.js";
// Wait for the DOM to load
window.addEventListener("DOMContentLoaded", () => {
  // Get the height and width inputs
  const heightInput = document.getElementById("height");
  const widthInput = document.getElementById("width");
  // Initialize the scene, camera, and renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    85,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Initialize the cube
  let height = parseFloat(heightInput.value);
  let width = parseFloat(widthInput.value);
  const geometry = new THREE.BoxGeometry(width, height, 0.1);
  const material = new THREE.MeshBasicMaterial({ color: 0x7a694b });
  const cube = new THREE.Mesh(geometry, material);
  cube.scale.x = width / 3;
  cube.scale.y = height / 5.5;
  scene.add(cube);
  const handleGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.5, 5);
  const handleMaterial = new THREE.MeshBasicMaterial({ color: 0x333333 });
  const handleMesh = new THREE.Mesh(handleGeometry, handleMaterial);
  handleMesh.position.set(1.2, height / 10 + -0.4, 0);
  const transformControls = new TransformControls(
    camera,
    renderer.domElement
  );
  transformControls.attach(handleMesh);
  scene.add(transformControls);
  
  transformControls.addEventListener("dragging-changed", (event) => {
    controls.enabled = !event.value;
  });
  
  cube.add(handleMesh);
  //dragging the handle
  // Initialize the controls
  const controls = new OrbitControls(camera, renderer.domElement);
  camera.position.z = 5;
  controls.update();
  // Listen for changes to the height input
  heightInput.addEventListener("input", () => {
    height = parseFloat(heightInput.value);
    geometry.parameters.height = height;
    cube.scale.y = height / 5.5;
  });

  // Listen for changes to the width input
  widthInput.addEventListener("input", () => {
    width = parseFloat(widthInput.value);
    geometry.parameters.width = width;
    cube.scale.x = width / 3;
  });

  // Add a button to clone the cube
  let clonedDoors = 0;
  clonedDoors++;
  const cloneButton = document.getElementById("button");
  // cloneButton.innerText = "Double Door";
  cloneButton.classList.add("clone-button");
  document.body.appendChild(cloneButton);
  // Add an event listener to the button to clone the cube
// Add an event listener to the button to clone the cube
cloneButton.querySelector("select").addEventListener("change", () => {
const option = cloneButton.querySelector("select").value;
if (option === "Double") {
clonedDoors++;
const clone = cube.clone();

// Clone the handle mesh and attach it to the cloned geometry
const clonedHandleMesh = handleMesh.clone();
clone.add(clonedHandleMesh);

clone.position.x += width + 0.3;
if (clonedDoors % 2 === 0) {
clonedHandleMesh.position.set(-1.2, height / 10 - 0.4, 0);
} else {
clonedHandleMesh.position.set(1.2, height / 10 - 0.4, 0);
// clone.rotation.y += Math.PI;
}
scene.add(clone);
} else if (option === "Single") {
// Remove any existing cubes from the scene
scene.remove(
...scene.children.filter((child) => child instanceof THREE.Mesh)
);
// Add a new cube to the scene
const newCube = cube.clone();
scene.add(newCube);
}
});

  // Render the scene
  const render = () => {
    requestAnimationFrame(render);
    controls.update();
    // dragControls.update(); // Move this line here
    renderer.render(scene, camera);
  };
  render();
});
</script> */}