import { useNavigate } from 'react-router-dom';

const GetStarted = () => {
  const navigate = useNavigate();

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '40px 20px',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e8f0ff 35%, #f0e8ff 65%, #f1f5f9 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Premium Animated Network Sphere with Multiple Layers */}
      <svg
        style={{
          position: 'absolute',
          right: '-300px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '900px',
          height: '900px',
          opacity: 0.5,
          pointerEvents: 'none',
          filter: 'drop-shadow(0 0 100px rgba(37, 99, 235, 0.35))'
        }}
        viewBox="0 0 200 200"
      >
        <defs>
          <style>{`
            @keyframes rotateSphere { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            @keyframes rotateReverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
            @keyframes rotateSlower { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            @keyframes pulseGlow { 0%, 100% { opacity: 0.6; r: 1.8; filter: drop-shadow(0 0 3px #2563eb); } 50% { opacity: 1; r: 2.8; filter: drop-shadow(0 0 12px #2563eb); } }
            @keyframes pulseGlowCyan { 0%, 100% { opacity: 0.5; r: 1.5; filter: drop-shadow(0 0 2px #06b6d4); } 50% { opacity: 1; r: 2.5; filter: drop-shadow(0 0 10px #06b6d4); } }
            @keyframes pulseFade { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; } }
            @keyframes nodePulse { 0%, 100% { opacity: 0.8; r: 1.2; } 50% { opacity: 1; r: 1.9; } }
            @keyframes nodePulseCyan { 0%, 100% { opacity: 0.75; r: 1; } 50% { opacity: 1; r: 1.7; } }
            @keyframes dashLine { 0% { stroke-dashoffset: 100; } 100% { stroke-dashoffset: 0; } }
            @keyframes orbitFast { from { transform: rotate(0deg) translateX(70px) rotate(0deg); } to { transform: rotate(360deg) translateX(70px) rotate(-360deg); } }
            @keyframes orbitSlow { from { transform: rotate(0deg) translateX(85px) rotate(0deg); } to { transform: rotate(360deg) translateX(85px) rotate(-360deg); } }
            @keyframes scaleFloat { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.15); } }
            @keyframes shimmer { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.6; } }
            
            .outer-ring { animation: rotateSphere 45s linear infinite; }
            .middle-ring { animation: rotateReverse 55s linear infinite; }
            .inner-ring { animation: rotateSphere 65s linear infinite; }
            .outer-fast { animation: rotateSphere 35s linear infinite; }
            .node-pulse { animation: nodePulse 3s ease-in-out infinite; }
            .node-pulse-cyan { animation: nodePulseCyan 3.5s ease-in-out infinite; }
            .glow-strong { animation: pulseGlow 2.5s ease-in-out infinite; }
            .glow-cyan { animation: pulseGlowCyan 2.8s ease-in-out infinite; }
          `}</style>
          
          {/* Premium Gradients */}
          <linearGradient id="nodeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#2563eb', stopOpacity: 0.9 }} />
            <stop offset="100%" style={{ stopColor: '#1e40af', stopOpacity: 0.7 }} />
          </linearGradient>
          
          <linearGradient id="nodeGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: '#0891b2', stopOpacity: 0.6 }} />
          </linearGradient>
          
          <linearGradient id="nodeGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#7c3aed', stopOpacity: 0.7 }} />
            <stop offset="100%" style={{ stopColor: '#2563eb', stopOpacity: 0.5 }} />
          </linearGradient>
          
          <radialGradient id="glowGrad1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{ stopColor: '#2563eb', stopOpacity: 0.6 }} />
            <stop offset="100%" style={{ stopColor: '#2563eb', stopOpacity: 0 }} />
          </radialGradient>
          
          <radialGradient id="glowGrad2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 0.5 }} />
            <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 0 }} />
          </radialGradient>
          
          <radialGradient id="corePulse" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{ stopColor: '#2563eb', stopOpacity: 0.8 }} />
            <stop offset="70%" style={{ stopColor: '#06b6d4', stopOpacity: 0.4 }} />
            <stop offset="100%" style={{ stopColor: '#7c3aed', stopOpacity: 0 }} />
          </radialGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          <filter id="glow-strong">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Outermost glow aura */}
        <circle cx="100" cy="100" r="98" fill="url(#glowGrad1)" opacity="0.35" />
        <circle cx="100" cy="100" r="95" fill="url(#glowGrad2)" opacity="0.3" />
        
        {/* Outer rotating rings with dashes */}
        <g className="outer-ring">
          <circle cx="100" cy="100" r="90" fill="none" stroke="url(#nodeGrad1)" strokeWidth="0.9" opacity="0.6" strokeDasharray="6,4" />
        </g>
        
        <g className="outer-fast">
          <circle cx="100" cy="100" r="85" fill="none" stroke="url(#nodeGrad2)" strokeWidth="0.7" opacity="0.5" strokeDasharray="5,3" />
        </g>
        
        {/* Middle counter-rotating rings */}
        <g className="middle-ring">
          <circle cx="100" cy="100" r="70" fill="none" stroke="url(#nodeGrad2)" strokeWidth="0.8" opacity="0.45" strokeDasharray="4,2" />
        </g>
        
        <g className="inner-ring">
          <circle cx="100" cy="100" r="50" fill="none" stroke="url(#nodeGrad1)" strokeWidth="0.6" opacity="0.4" />
        </g>
        
        {/* Inner subtle ring */}
        <circle cx="100" cy="100" r="35" fill="none" stroke="url(#nodeGrad3)" strokeWidth="0.4" opacity="0.35" />
        
        {/* Glow auras at cardinal points */}
        <circle cx="100" cy="20" r="4" fill="url(#glowGrad1)" opacity="0.25" />
        <circle cx="180" cy="100" r="4" fill="url(#glowGrad2)" opacity="0.25" />
        <circle cx="100" cy="180" r="4" fill="url(#glowGrad1)" opacity="0.5" />
        <circle cx="20" cy="100" r="4" fill="url(#glowGrad2)" opacity="0.5" />
        
        {/* Core central hub with advanced glow */}
        <circle cx="100" cy="100" r="3.5" fill="url(#corePulse)" filter="url(#glow-strong)" style={{ animation: 'pulseGlow 2s ease-in-out infinite' }} />
        
        {/* Outer hemisphere - cardinal nodes */}
        <circle cx="100" cy="15" r="1.8" fill="url(#nodeGrad1)" className="glow-strong" style={{ animationDelay: '0s' }} />
        <circle cx="155" cy="40" r="1.6" fill="url(#nodeGrad2)" className="glow-cyan" style={{ animationDelay: '0.4s' }} />
        <circle cx="175" cy="100" r="1.8" fill="url(#nodeGrad1)" className="glow-strong" style={{ animationDelay: '0.8s' }} filter="url(#glow)" />
        <circle cx="155" cy="160" r="1.6" fill="url(#nodeGrad2)" className="glow-cyan" style={{ animationDelay: '1.2s' }} />
        
        {/* Outer hemisphere - secondary nodes */}
        <circle cx="70" cy="25" r="1.4" fill="url(#nodeGrad3)" className="node-pulse" style={{ animationDelay: '0.5s' }} />
        <circle cx="45" cy="45" r="1.5" fill="url(#nodeGrad2)" className="node-pulse-cyan" style={{ animationDelay: '1s' }} />
        <circle cx="30" cy="75" r="1.3" fill="url(#nodeGrad1)" className="node-pulse" style={{ animationDelay: '1.5s' }} />
        <circle cx="25" cy="100" r="1.7" fill="url(#nodeGrad1)" className="glow-strong" style={{ animationDelay: '0.3s' }} filter="url(#glow)" />
        <circle cx="30" cy="125" r="1.3" fill="url(#nodeGrad2)" className="node-pulse" style={{ animationDelay: '1.7s' }} />
        <circle cx="45" cy="155" r="1.5" fill="url(#nodeGrad3)" className="node-pulse-cyan" style={{ animationDelay: '1.2s' }} />
        <circle cx="70" cy="175" r="1.4" fill="url(#nodeGrad2)" className="node-pulse" style={{ animationDelay: '0.6s' }} />
        
        {/* Middle layer nodes */}
        <circle cx="100" cy="50" r="1.4" fill="url(#nodeGrad2)" className="node-pulse-cyan" style={{ animationDelay: '0.8s' }} />
        <circle cx="140" cy="65" r="1.5" fill="url(#nodeGrad1)" className="node-pulse" style={{ animationDelay: '1.4s' }} />
        <circle cx="155" cy="85" r="1.3" fill="url(#nodeGrad3)" className="node-pulse-cyan" style={{ animationDelay: '2s' }} />
        <circle cx="150" cy="115" r="1.3" fill="url(#nodeGrad2)" className="node-pulse" style={{ animationDelay: '1.9s' }} />
        <circle cx="140" cy="135" r="1.5" fill="url(#nodeGrad1)" className="node-pulse" style={{ animationDelay: '2.2s' }} />
        <circle cx="100" cy="150" r="1.4" fill="url(#nodeGrad2)" className="node-pulse-cyan" style={{ animationDelay: '1.1s' }} />
        <circle cx="60" cy="135" r="1.5" fill="url(#nodeGrad3)" className="node-pulse" style={{ animationDelay: '2.4s' }} />
        <circle cx="50" cy="115" r="1.3" fill="url(#nodeGrad1)" className="node-pulse-cyan" style={{ animationDelay: '2.1s' }} />
        <circle cx="60" cy="65" r="1.5" fill="url(#nodeGrad2)" className="node-pulse" style={{ animationDelay: '1.8s' }} />
        <circle cx="50" cy="85" r="1.3" fill="url(#nodeGrad3)" className="node-pulse-cyan" style={{ animationDelay: '1.6s' }} />
        
        {/* Inner core nodes with strong glow */}
        <circle cx="100" cy="75" r="1.5" fill="url(#nodeGrad1)" className="glow-strong" style={{ animationDelay: '0.5s' }} filter="url(#glow)" />
        <circle cx="100" cy="125" r="1.5" fill="url(#nodeGrad2)" className="glow-cyan" style={{ animationDelay: '1s' }} filter="url(#glow)" />
        <circle cx="78" cy="100" r="1.5" fill="url(#nodeGrad3)" className="glow-strong" style={{ animationDelay: '1.5s' }} filter="url(#glow)" />
        <circle cx="122" cy="100" r="1.5" fill="url(#nodeGrad2)" className="glow-cyan" style={{ animationDelay: '0.7s' }} filter="url(#glow)" />
        
        {/* Outer cardinal connection lines */}
        <line x1="100" y1="15" x2="155" y2="40" stroke="url(#nodeGrad1)" strokeWidth="0.5" opacity="0.6" style={{ animation: 'dashLine 3.5s linear infinite' }} strokeDasharray="2,1" />
        <line x1="155" y1="40" x2="175" y2="100" stroke="url(#nodeGrad2)" strokeWidth="0.5" opacity="0.6" style={{ animation: 'dashLine 4s linear infinite' }} strokeDasharray="2,1" />
        <line x1="175" y1="100" x2="155" y2="160" stroke="url(#nodeGrad1)" strokeWidth="0.5" opacity="0.6" style={{ animation: 'dashLine 3.8s linear infinite' }} strokeDasharray="2,1" />
        <line x1="155" y1="160" x2="100" y2="180" stroke="url(#nodeGrad2)" strokeWidth="0.5" opacity="0.6" style={{ animation: 'dashLine 4.2s linear infinite' }} strokeDasharray="2,1" />
        <line x1="100" y1="180" x2="45" y2="155" stroke="url(#nodeGrad1)" strokeWidth="0.5" opacity="0.6" style={{ animation: 'dashLine 3.6s linear infinite' }} strokeDasharray="2,1" />
        <line x1="45" y1="155" x2="25" y2="100" stroke="url(#nodeGrad2)" strokeWidth="0.5" opacity="0.6" style={{ animation: 'dashLine 3.9s linear infinite' }} strokeDasharray="2,1" />
        <line x1="25" y1="100" x2="45" y2="45" stroke="url(#nodeGrad1)" strokeWidth="0.5" opacity="0.6" style={{ animation: 'dashLine 4.1s linear infinite' }} strokeDasharray="2,1" />
        <line x1="45" y1="45" x2="100" y2="15" stroke="url(#nodeGrad2)" strokeWidth="0.5" opacity="0.6" style={{ animation: 'dashLine 3.7s linear infinite' }} strokeDasharray="2,1" />
        
        {/* Core hub pulsing connections */}
        <line x1="100" y1="100" x2="100" y2="75" stroke="url(#nodeGrad1)" strokeWidth="0.6" opacity="0.7" style={{ animation: 'pulseFade 2s ease-in-out infinite' }} filter="url(#glow)" />
        <line x1="100" y1="100" x2="100" y2="125" stroke="url(#nodeGrad2)" strokeWidth="0.6" opacity="0.7" style={{ animation: 'pulseFade 2.3s ease-in-out infinite', animationDelay: '0.5s' }} filter="url(#glow)" />
        <line x1="100" y1="100" x2="78" y2="100" stroke="url(#nodeGrad3)" strokeWidth="0.6" opacity="0.7" style={{ animation: 'pulseFade 2.1s ease-in-out infinite', animationDelay: '0.3s' }} filter="url(#glow)" />
        <line x1="100" y1="100" x2="122" y2="100" stroke="url(#nodeGrad2)" strokeWidth="0.6" opacity="0.7" style={{ animation: 'pulseFade 2.4s ease-in-out infinite', animationDelay: '0.7s' }} filter="url(#glow)" />
        
        {/* Secondary radial connections */}
        <line x1="100" y1="100" x2="140" y2="65" stroke="url(#nodeGrad1)" strokeWidth="0.4" opacity="0.4" style={{ animation: 'pulseFade 3s ease-in-out infinite', animationDelay: '0.2s' }} />
        <line x1="100" y1="100" x2="60" y2="65" stroke="url(#nodeGrad2)" strokeWidth="0.4" opacity="0.4" style={{ animation: 'pulseFade 2.8s ease-in-out infinite', animationDelay: '0.4s' }} />
        <line x1="100" y1="100" x2="140" y2="135" stroke="url(#nodeGrad3)" strokeWidth="0.4" opacity="0.4" style={{ animation: 'pulseFade 2.9s ease-in-out infinite', animationDelay: '0.6s' }} />
        <line x1="100" y1="100" x2="60" y2="135" stroke="url(#nodeGrad1)" strokeWidth="0.4" opacity="0.4" style={{ animation: 'pulseFade 3.1s ease-in-out infinite', animationDelay: '0.1s' }} />
      </svg>

      {/* Content Container - positioned above background */}
      <div style={{ 
        textAlign: 'center', 
        maxWidth: '500px',
        animation: 'fadeIn 0.6s ease-in',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Logo */}
        <div style={{ marginBottom: '32px' }}>
          <i className='bx bxs-capsule' style={{ 
            fontSize: '4rem', 
            background: 'var(--gradient-primary)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}></i>
        </div>

        {/* Title */}
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: '800', 
          marginBottom: '16px',
          color: 'var(--text-main)',
          letterSpacing: '-0.025em'
        }}>
          Welcome to MediAI
        </h1>

        {/* Subtitle */}
        <p style={{ 
          fontSize: '1.25rem', 
          color: 'var(--text-muted)', 
          marginBottom: '48px',
          lineHeight: '1.6'
        }}>
          AI-powered healthcare concierge platform
        </p>

        {/* Action Buttons */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '16px',
          marginBottom: '32px'
        }}>
          {/* Continue as Patient */}
          <button
            className="action-btn primary"
            onClick={() => navigate('/patient/login')}
          >
            <span>
              <i className='bx bx-user'></i>
              Continue as Patient
            </span>
          </button>

          {/* Find Providers */}
          <button
            className="action-btn secondary"
            onClick={() => navigate('/doctors')}
          >
            <span>
              <i className='bx bx-search-alt'></i>
              Find Providers
            </span>
          </button>

          {/* Admin Login */}
          <button
            className="action-btn tertiary"
            onClick={() => navigate('/admin/login')}
          >
            <span>
              <i className='bx bx-lock-alt'></i>
              Admin Login
            </span>
          </button>
        </div>

        {/* Footer Text */}
        <p style={{ 
          fontSize: '0.875rem', 
          color: 'var(--text-light)',
          marginTop: '32px'
        }}>
          Or go to <button 
            onClick={() => navigate('/home')}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--primary)',
              fontWeight: '600',
              cursor: 'pointer',
              textDecoration: 'none',
              padding: 0,
              font: 'inherit'
            }}
          >
            homepage
          </button>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
