type H1Props = {
  children: React.ReactNode;
  className?: string;
};

export default function H1({ children, className }: H1Props) {
  return (
    <h1 className={"text-3xl lg:text-6xl font-bold tracking-tight"}>
      {children}
    </h1>
  );
}
