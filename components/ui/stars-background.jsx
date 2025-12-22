"use client"
import { cn } from "@/lib/utils"
import React, { useState, useEffect, useRef, useCallback } from "react"

export function StarsBackground({
  starDensity = 0.00035,
  allStarsTwinkle = true,
  twinkleProbability = 0.9,
  minTwinkleSpeed = 0.8,
  maxTwinkleSpeed = 1,
  className,
}) {
  const [stars, setStars] = useState([])
  const canvasRef = useRef(null)

  const generateStars = useCallback(
    (width, height) => {
      const area = width * height
      const numStars = Math.floor(area * starDensity)

      return Array.from({ length: numStars }, () => {
        const shouldTwinkle =
          allStarsTwinkle || Math.random() < twinkleProbability

        return {
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 0.05 + 0.5,
          opacity: Math.random() * 0.5 + 0.5,
          twinkleSpeed: shouldTwinkle
            ? minTwinkleSpeed +
              Math.random() * (maxTwinkleSpeed - minTwinkleSpeed)
            : null,
        }
      })
    },
    [
      starDensity,
      allStarsTwinkle,
      twinkleProbability,
      minTwinkleSpeed,
      maxTwinkleSpeed,
    ]
  )

  useEffect(() => {
    const updateStars = () => {
      if (!canvasRef.current) return

      const canvas = canvasRef.current
      const ctx = canvas.getContext("2d")
      if (!ctx) return

      const { width, height } = canvas.getBoundingClientRect()
      canvas.width = width
      canvas.height = height

      setStars(generateStars(width, height))
    }

    updateStars()

    const resizeObserver = new ResizeObserver(updateStars)
    resizeObserver.observe(canvasRef.current)

    return () => resizeObserver.disconnect()
  }, [generateStars])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      stars.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.fill()

        if (star.twinkleSpeed !== null) {
          star.opacity =
            0.5 +
            Math.abs(
              Math.sin((Date.now() * 0.001) / star.twinkleSpeed)
            )
        }
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => cancelAnimationFrame(animationFrameId)
  }, [stars])

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 h-full w-full", className)}
    />
  )
}
