import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function ThreeHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isHoveringRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // === Three.js Scene Setup ===
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.01,
      200
    );
    camera.position.set(0, -10, 28);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // === Lights ===
    scene.add(new THREE.AmbientLight(0xffffff, 1));
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // === Card Data ===
    const cardData = [
      {
        title: "Research & Market Intelligence",
        label: "Market Research"
      },
      {
        title: "Brand Strategy & Positioning",
        label: "Brand Strategy"
      },
      {
        title: "eCommerce & Marketplace Management",
        label: "Marketplace"
      },
      {
        title: "Paid Advertising & Demand Generation",
        label: "Advertising"
      },
      {
        title: "Creative & Content Production",
        label: "Content"
      },
      {
        title: "Influencer, Creator & Social Commerce",
        label: "Social Commerce"
      },
      {
        title: "Pricing & Marketplace Channel Control",
        label: "Pricing"
      },
      {
        title: "Brand Protection",
        label: "Protection"
      },
      {
        title: "Product & Portfolio Growth",
        label: "Growth"
      },
      {
        title: "International Expansion",
        label: "Expansion"
      },
      {
        title: "Retail, Wholesale & Omnichannel Growth",
        label: "Omnichannel"
      },
      {
        title: "Distribution, 3PL & Fulfillment",
        label: "Fulfillment"
      },
      {
        title: "Data & Analytics",
        label: "Analytics"
      },
      {
        title: "Technology & Automation",
        label: "Automation"
      }
    ];

    // === Carousel Setup ===
    const group = new THREE.Group();
    const spinGroup = new THREE.Group();
    group.add(spinGroup);
    scene.add(group);

    const radius = 14;
    const cardWidth = 5;
    const cardHeight = 4.8;
    group.position.y = -10;

    // Store all planes for hover detection
    const planes: THREE.Mesh[] = [];

    // Create canvas textures for each card matching Ecom Gleam brand card design
    function createCardTexture(title: string, label: string, index: number) {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 490;
      const ctx = canvas.getContext('2d')!;

      // Fill background with neon green/teal primary color (no roundedness)
      ctx.fillStyle = '#48bf9e';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Top-Right Alignments
      ctx.textAlign = 'right';
      ctx.textBaseline = 'top';

      // Eyebrow
      ctx.font = 'bold 16px Courier New, monospace';
      ctx.fillStyle = 'rgba(12, 15, 18, 0.65)';
      ctx.fillText("06 / TODAY", canvas.width - 35, 30);

      // Wrapped Title/Description
      ctx.font = 'bold 22px Arial, sans-serif';
      ctx.fillStyle = '#0c0f12';
      
      const maxWidth = canvas.width * 0.75;
      const titleWords = title.split(' ');
      let titleLines: string[] = [];
      let currentLine = '';
      for (const word of titleWords) {
        if (ctx.measureText(currentLine + word).width > maxWidth) {
          titleLines.push(currentLine.trim());
          currentLine = '';
        }
        currentLine += word + ' ';
      }
      if (currentLine.trim().length > 0) {
        titleLines.push(currentLine.trim());
      }

      let lineY = 60;
      for (const line of titleLines) {
        ctx.fillText(line, canvas.width - 35, lineY);
        lineY += 28;
      }

      // Bottom-Left Big Card Index Number (01, 02, etc.)
      ctx.textAlign = 'left';
      ctx.textBaseline = 'bottom';
      ctx.font = 'bold 130px Arial, sans-serif';
      ctx.fillStyle = '#0c0f12';
      ctx.fillText(String(index + 1).padStart(2, '0'), 30, canvas.height - 20);

      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      return texture;
    }

    const textures: THREE.Texture[] = [];
    const materials: THREE.Material[] = [];
    const geometries: THREE.BufferGeometry[] = [];

    // Create cards
    cardData.forEach((card, i) => {
      const texture = createCardTexture(card.title, card.label, i);
      textures.push(texture);

      const material = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.DoubleSide,
        transparent: true,
      });
      materials.push(material);

      const geometry = new THREE.PlaneGeometry(cardWidth, cardHeight);
      geometries.push(geometry);

      const plane = new THREE.Mesh(geometry, material);

      const angle = (i / cardData.length) * Math.PI * 2;
      plane.position.x = Math.cos(angle) * radius;
      plane.position.z = Math.sin(angle) * radius;
      plane.lookAt(0, 0, 0);
      plane.rotation.y += Math.PI;

      plane.userData = {
        angle: angle,
        index: i,
        originalX: plane.position.x,
        originalZ: plane.position.z
      };

      spinGroup.add(plane);
      planes.push(plane);
    });

    // === Raycaster for hover detection ===
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    function onMouseMove(event: MouseEvent) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(planes);

      if (intersects.length > 0) {
        isHoveringRef.current = true;
        canvas.style.cursor = 'pointer';

        planes.forEach(plane => {
          if (plane.material instanceof THREE.MeshBasicMaterial) {
            if (plane === intersects[0].object) {
              plane.material.opacity = 1;
              plane.scale.set(1.08, 1.08, 1.08);
            } else {
              plane.material.opacity = 0.4;
              plane.scale.set(1, 1, 1);
            }
          }
        });
      } else {
        isHoveringRef.current = false;
        canvas.style.cursor = 'default';

        planes.forEach(plane => {
          if (plane.material instanceof THREE.MeshBasicMaterial) {
            plane.material.opacity = 1;
            plane.scale.set(1, 1, 1);
          }
        });
      }
    }

    function onMouseLeave() {
      isHoveringRef.current = false;
      canvas.style.cursor = 'default';
      planes.forEach(plane => {
        if (plane.material instanceof THREE.MeshBasicMaterial) {
          plane.material.opacity = 1;
          plane.scale.set(1, 1, 1);
        }
      });
    }

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    // === Animation Speed Setup ===
    const minSpeed = 0.00010;
    const maxSpeed = 0.3;
    const minDistance = 1.5;
    const maxDistance = 50;

    function getSpeedFromDistance(distance: number) {
      const clampedDist = Math.max(minDistance, Math.min(maxDistance, distance));
      const normalizedDist = (clampedDist - minDistance) / (maxDistance - minDistance);
      return minSpeed + (maxSpeed - minSpeed) * normalizedDist;
    }

    let animationFrameId: number;
    const startTime = Date.now();
    const moveDuration = 1500;
    const endScale = 1.2;

    // === Animation Loop ===
    function animate() {
      animationFrameId = requestAnimationFrame(animate);

      const elapsed = Date.now() - startTime;
      const t = Math.min(elapsed / moveDuration, 1);
      const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      camera.position.z = 28;
      camera.position.y = -10;

      const scale = endScale;
      group.scale.set(scale, scale, scale);

      const startY = -60;
      const endY = -10;
      group.position.y = THREE.MathUtils.lerp(startY, endY, ease);

      group.rotation.z = 0.35;
      group.rotation.x = Math.atan((group.position.y - camera.position.y) / camera.position.z);

      if (!isHoveringRef.current) {
        const currentDistance = camera.position.z;
        const finalSpeed = getSpeedFromDistance(currentDistance);
        spinGroup.rotation.y += finalSpeed * 0.02 * 2.0;
      }

      renderer.render(scene, camera);
    }

    animate();

    // === Window Resize Handler ===
    function handleResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener("resize", handleResize);

    // === Cleanup ===
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);

      // Clean up dynamic WebGL resources
      geometries.forEach((g) => g.dispose());
      materials.forEach((m) => m.dispose());
      textures.forEach((t) => t.dispose());
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-auto overflow-hidden z-30"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-100 transition-opacity duration-1000"
      />
    </div>
  );
}

export default ThreeHero;