"use client";

import { useEffect, useRef } from "react";

// Sutera-inspired organic particle/mesh background
// Dark atmospheric with subtle organic movement

const vertexShaderSource = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const fragmentShaderSource = `
  precision mediump float;
  uniform float u_time;
  uniform vec2 u_resolution;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  float fbm(vec2 p) {
    float val = 0.0;
    float amp = 0.5;
    for(int i = 0; i < 5; i++) {
      val += amp * noise(p);
      p *= 2.0;
      amp *= 0.5;
    }
    return val;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    float aspect = u_resolution.x / u_resolution.y;
    vec2 p = vec2(uv.x * aspect, uv.y);

    // Deep organic dark base
    vec3 color = vec3(0.035, 0.035, 0.035);

    // Organic flowing noise layers
    float t = u_time * 0.03;
    float n1 = fbm(p * 2.0 + vec2(t, t * 0.7));
    float n2 = fbm(p * 3.5 + vec2(-t * 0.5, t * 0.3) + n1 * 0.5);
    float n3 = fbm(p * 1.5 + vec2(t * 0.2, -t * 0.4));

    // Warm earth tone highlights
    vec3 warmTone = vec3(0.06, 0.20, 0.25);
    vec3 coolTone = vec3(0.04, 0.08, 0.10);

    // Organic blend
    color += warmTone * n1 * 0.08;
    color += coolTone * n2 * 0.12;

    // Subtle mesh/grid lines like Sutera floating UI
    float grid1 = abs(sin(p.x * 20.0 + n1 * 2.0)) * abs(sin(p.y * 20.0 + n2 * 2.0));
    grid1 = smoothstep(0.95, 1.0, grid1);
    color += vec3(0.06, 0.20, 0.25) * grid1 * 0.04;

    // Central atmospheric glow
    float centerGlow = exp(-length(uv - vec2(0.5, 0.4)) * 1.8);
    color += vec3(0.04, 0.12, 0.15) * centerGlow * 0.15;

    // Top-right subtle warm accent
    float topGlow = exp(-length(uv - vec2(0.8, 0.2)) * 3.0);
    color += vec3(0.04, 0.15, 0.20) * topGlow * 0.08;

    // Film grain
    float grain = hash(uv * u_time * 100.0) * 0.02;
    color += grain;

    // Vignette
    float vignette = 1.0 - length(uv - 0.5) * 0.9;
    vignette = smoothstep(0.0, 0.7, vignette);
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

    if (!gl) {
      canvas.style.background = "#0F2027";
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
