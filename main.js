import * as THREE from 'three'
import { WebGL } from 'three/examples/jsm/Addons.js'

// Scene 생성
const scene = new THREE.Scene()
// Camera 생성
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
// Renderer 생성
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
// renderer.domElement는 <canvas> 요소
document.body.appendChild(renderer.domElement)

// Geometry 생성
const geometry = new THREE.BoxGeometry(
  1, // 가로
  1, // 세로
  1 // 높이
)

// Material 생성
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })

// 큐브 만들고 Scene에 추가
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

// Camera 위치 수정
camera.position.z = 5

const animate = () => {
  requestAnimationFrame(animate)

  // 큐브 회전시키기
  cube.rotation.x += 0.03
  cube.rotation.y += 0.03

  renderer.render(scene, camera)
}

// const animate = () => {
//   renderer.render(scene, camera)

//   cube.rotation.x += 0.03
//   cube.rotation.y += 0.03
// }
// renderer.setAnimationLoop(animate)

if (WebGL.isWebGLAvailable()) {
  animate()
} else {
  const warning = WebGL.getWebGLErrorMessage()
  document.getElementById('container').appendChild(warning)
}
