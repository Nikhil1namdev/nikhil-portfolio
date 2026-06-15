const particles = Array.from({ length: 34 }, (_, index) => ({
  id: index,
  left: `${(index * 29) % 100}%`,
  top: `${(index * 47) % 100}%`,
  delay: `${(index % 9) * 0.42}s`,
  size: `${2 + (index % 4)}px`
}));

export function Particles() {
  return (
    <div aria-hidden="true" className="particles-field">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="particle-dot"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            animationDelay: particle.delay
          }}
        />
      ))}
    </div>
  );
}
