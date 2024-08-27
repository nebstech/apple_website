export const animateWithGsapTimeline = (timeline, rotationRef, rotationState, firstTarget, secondTarget, animationProps) => {
  // Animate the rotation
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1, 
    ease: 'power2.inOut'
  });

  // Animate the first target with the provided properties
  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: 'power2.inOut'
    },
    '<' // This means it will start at the same time as the previous animation ends
  );

  // Animate the second target with the provided properties
  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: 'power2.inOut'
    },
    '<' // This means it will start at the same time as the previous animation ends
  );
}
