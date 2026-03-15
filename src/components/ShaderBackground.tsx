"use client";

import { useEffect, useRef } from "react";

// =============================================
// Geometrik Altın Çizgi Arka Plan Bileşeni
// Kartvizit tarzı: Saf siyah zemin üzerine ince altın
// geometrik çokgen wireframe deseni
// WebGL shader ile render edilen düşük frekanslı animasyon
// =============================================

const vertexShaderSource = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

// Fragment shader - Geometrik altın wireframe deseni
// Saf siyah arka plan üzerine ince altın çizgiler
const fragmentShaderSource = `
  precision mediump float;
  uniform float u_time;
  uniform vec2 u_resolution;

  // Rastgele sayı üretici
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  // Voronoi kenar hesaplama - Geometrik çokgen çizgileri oluşturur
  float voronoiEdge(vec2 uv, float scale) {
    vec2 id = floor(uv * scale);
    vec2 fd = fract(uv * scale);

    float minDist = 1.0;
    float secondMin = 1.0;

    for(int y = -1; y <= 1; y++) {
      for(int x = -1; x <= 1; x++) {
        vec2 neighbor = vec2(float(x), float(y));
        vec2 point = vec2(
          hash(id + neighbor),
          hash(id + neighbor + 100.0)
        );
        // Çok yavaş hareket - zarif his
        point = 0.5 + 0.4 * sin(u_time * 0.08 + 6.2831 * point);
        float dist = length(neighbor + point - fd);
        if(dist < minDist) {
          secondMin = minDist;
          minDist = dist;
        } else if(dist < secondMin) {
          secondMin = dist;
        }
      }
    }
    // Kenar çizgisi kalınlığı
    return secondMin - minDist;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    float aspect = u_resolution.x / u_resolution.y;
    vec2 uvAspect = vec2(uv.x * aspect, uv.y);

    // Saf siyah arka plan
    vec3 color = vec3(0.0);

    // Geometrik çizgi katmanları - farklı ölçeklerde
    float edge1 = voronoiEdge(uvAspect, 3.0);
    float edge2 = voronoiEdge(uvAspect + 10.0, 5.0);

    // İnce çizgiler oluştur - smoothstep ile keskin kenarlar
    float line1 = 1.0 - smoothstep(0.0, 0.06, edge1);
    float line2 = 1.0 - smoothstep(0.0, 0.04, edge2);

    // Altın rengi - sıcak ton (kartvizitteki altın)
    vec3 gold = vec3(0.788, 0.659, 0.298);

    // Birinci katman - ana geometrik çizgiler (parlak)
    color += gold * line1 * 0.15;
    // İkinci katman - ince detay çizgileri (soluk)
    color += gold * line2 * 0.06;

    // Merkez hafif altın parıltı - spot ışık efekti
    float spotlight = exp(-length(uv - vec2(0.5, 0.35)) * 2.0);
    color += gold * spotlight * 0.02;

    // Vignette - köşeleri tamamen karart
    float vignette = 1.0 - length(uv - 0.5) * 1.0;
    vignette = smoothstep(0.0, 0.8, vignette);
    color *= vignette;

    gl_FragColor = vec4(color, 1.0);
  }
`;

export default function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", {
      alpha: false,
      antialias: false,
      preserveDrawingBuffer: false,
      powerPreference: "low-power",
    });

    // WebGL yoksa saf siyah arka plan göster
    if (!gl) {
      canvas.style.background = "#000000";
      return;
    }

    const compileShader = (source: string, type: number): WebGLShader | null => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = compileShader(vertexShaderSource, gl.VERTEX_SHADER);
    const fragmentShader = compileShader(fragmentShaderSource, gl.FRAGMENT_SHADER);
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,1,1]), gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const timeLocation = gl.getUniformLocation(program, "u_time");
    const resolutionLocation = gl.getUniformLocation(program, "u_resolution");

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 1.5);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
    };

    resize();
    window.addEventListener("resize", resize);

    const startTime = performance.now();
    const render = () => {
      const elapsed = (performance.now() - startTime) / 1000;
      gl.uniform1f(timeLocation, elapsed);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationRef.current = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationRef.current);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteBuffer(positionBuffer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      aria-hidden="true"
    />
  );
}
