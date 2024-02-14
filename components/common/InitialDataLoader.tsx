import { useEffect, useState } from "react";

const InitialDataLoader = ({
  initialValue,
  children,
}: {
  initialValue: any;
  children: React.ReactNode;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return <>{initialValue}</>;
  return children;
};

export default InitialDataLoader;
