import { Button } from 'mada-design-system';

export function Hero(props: {
  title: string;
  subtitle: string;
  cta: string;
  onCtaClick?: () => void;
}) {
  return (
    <div
      style={{
        backgroundColor: '#1a1a2e',
        color: 'white',
        padding: '100px 20px',
        textAlign: 'center',
      }}
    >
      <h1
        style={{
          fontSize: '48px',
          marginBottom: '16px',
        }}
      >
        {props.title}
      </h1>
      <p className="text-body-02">{props.subtitle}</p>
      <Button
        variant="default"
        colors={'neutral'}
        size={'sm'}
        onClick={props.onCtaClick}
      >
        {props.cta}
      </Button>
    </div>
  );
}
