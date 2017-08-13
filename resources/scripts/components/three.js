import * as THREE from 'three';
import ee from './ee';

let scene;
let light;
let camera;
let geometry;
let material;
let mesh;

let mouseObj;
let mouse2D;

let renderer;

const width = window.innerWidth;
const height = window.innerHeight;
const halfWidth = window.innerWidth / 2;
const halfHeight = window.innerHeight / 2;

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);
}

function onDocumentMouseMove(event) {
  mouse2D.x = ((event.pageX / width) * 2) - 1;
  mouse2D.y = (-(event.pageY / height) * 2) + 1;

  mouseObj.x = event.pageX - halfWidth;
  mouseObj.y = event.pageY - halfHeight;
  mouseObj.percentX = Math.ceil((mouseObj.x / halfWidth) * 100);
  mouseObj.percentY = Math.ceil((mouseObj.y / halfHeight) * 100);
  mouseObj.lastX = event.pageX;
  mouseObj.lastY = event.pageY;
}

function initThree() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x1a1a1a);

  light = new THREE.DirectionalLight(0xffffff);
  light.position.set(1, 1, 1);
  scene.add(light);
  light = new THREE.DirectionalLight(0xffffff);
  light.position.set(-1, -1, -1);
  scene.add(light);
  light = new THREE.AmbientLight(0x222222);
  scene.add(light);

  camera = new THREE.PerspectiveCamera(1.4, window.innerWidth / window.innerHeight, 5, 100000);
  camera.position.z = 1400;

  geometry = new THREE.TorusGeometry(10, 3, 16, 50);
  material = new THREE.MeshPhongMaterial({ color: 0x828282, wireframe: true });
  mesh = new THREE.Mesh(geometry, material);
  mesh.rotation.x = -(Math.PI * 0.2);
  mesh.rotation.y = -(Math.PI * 0.2);
  mesh.autoUpdateMatrix = false;
  scene.add(mesh);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  mouse2D = new THREE.Vector2();
  mouseObj = { x: 0, y: 0, percentX: 0, percentY: 0, lastX: 0, lastY: 0 };

  const container = document.getElementById('visuals');

  if (container != null) {
    document.body.appendChild(container);
    container.appendChild(renderer.domElement);
  }

  document.addEventListener('mousemove', onDocumentMouseMove, false);
  window.addEventListener('resize', onWindowResize, false);
}

function render() {
  const v = new THREE.Euler(-mouse2D.y, mouse2D.x, 0);
  const q = new THREE.Quaternion().setFromEuler(v);

  const newQuaternion = new THREE.Quaternion();
  THREE.Quaternion.slerp(mesh.quaternion, q, newQuaternion, 0.1);
  mesh.quaternion.slerp(newQuaternion, 0.1);

  renderer.render(scene, camera);
}

function animate() {
  requestAnimationFrame(animate);
  render();
}

function init() {
  initThree();
  animate();
}

ee.addListener('init', init);
