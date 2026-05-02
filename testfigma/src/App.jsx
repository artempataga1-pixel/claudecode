const imgBackground = "https://www.figma.com/api/mcp/asset/ade46398-fabd-44b6-ab42-5cdd9a5a45dd";
const imgInfinityLogo = "https://www.figma.com/api/mcp/asset/d2c381f5-07a6-42a3-8b77-9b73ace4f678";
const imgSphere = "https://www.figma.com/api/mcp/asset/1877dcff-3418-4855-b7a8-ccd32aac2d7c";

export default function App() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      }}
    >
      {/* Background */}
      <img
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          pointerEvents: 'none',
        }}
        src={imgBackground}
      />

      {/* Title: PROстранство */}
      <div
        style={{
          position: 'absolute',
          top: '3.125%',
          left: '2%',
          display: 'flex',
          alignItems: 'center',
          fontWeight: 400,
          fontSize: 'clamp(60px, 14.6vw, 280px)',
          lineHeight: 0.8,
          color: 'white',
          letterSpacing: '-0.035em',
          whiteSpace: 'nowrap',
        }}
      >
        <span>PRO</span>
        <span>странство</span>
      </div>

      {/* Subtitle */}
      <p
        style={{
          position: 'absolute',
          top: '47%',
          left: '50%',
          transform: 'translateX(-50%)',
          fontWeight: 400,
          fontSize: 'clamp(18px, 3.4vw, 65px)',
          lineHeight: 1.2,
          color: 'white',
          letterSpacing: '-0.035em',
          textAlign: 'center',
          width: '59%',
          margin: 0,
        }}
      >
        Превращаем хаос на маркетплейсах
        <br />в управляемую модель роста
      </p>

      {/* Sphere image */}
      <div
        style={{
          position: 'absolute',
          left: '0.73%',
          top: '56.25%',
          width: '99.1%',
          height: '197.5%',
        }}
      >
        <img
          alt=""
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          src={imgSphere}
        />
      </div>

      {/* Frosted glass band */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: '70.4%',
          width: '100%',
          height: '42%',
          backdropFilter: 'blur(50px)',
          background: 'rgba(125, 211, 208, 0.1)',
        }}
      />

      {/* Infinity logo */}
      <div
        style={{
          position: 'absolute',
          left: '43.6%',
          top: '93.1%',
          width: '13.1%',
          height: '13.3%',
          mixBlendMode: 'screen',
          overflow: 'hidden',
        }}
      >
        <img
          alt="logo"
          style={{
            position: 'absolute',
            width: '206.91%',
            height: '405.54%',
            left: '-52.74%',
            top: '-148.71%',
            maxWidth: 'none',
          }}
          src={imgInfinityLogo}
        />
      </div>
    </div>
  );
}
