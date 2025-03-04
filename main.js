import * as THREE from 'three'
import { WebGL } from 'three/examples/jsm/Addons.js'

// Scene 생성
const scene = new THREE.Scene()
// Camera 생성
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000)
// Renderer 생성
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
// renderer.domElement는 <canvas> 요소
document.body.appendChild(renderer.domElement)

const points = []
points.push(new THREE.Vector3(-2, 0, 0))
points.push(new THREE.Vector3(0, 2, 0))
points.push(new THREE.Vector3(2, 0, 0))
points.push(new THREE.Vector3(0, -2, 0))
points.push(new THREE.Vector3(-2, 0, 0))

const geometry2 = new THREE.BufferGeometry().setFromPoints(points)
const material2 = new THREE.LineBasicMaterial({ color: 0xff0000 })

const line = new THREE.Line(geometry2, material2)

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
scene.add(cube, line)

// Camera 위치 수정
camera.position.z = 5

const animate = () => {
  requestAnimationFrame(animate)

  // 큐브 회전시키기
  cube.rotation.x += 0.03
  cube.rotation.y += 0.03

  line.rotation.x += 0.07
  line.rotation.y += 0.07

  renderer.render(scene, camera)
}

if (WebGL.isWebGLAvailable()) {
  animate()
} else {
  const warning = WebGL.getWebGLErrorMessage()
  document.getElementById('container').appendChild(warning)
}
