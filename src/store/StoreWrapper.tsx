import { CanceledError } from "axios";
import React, { useEffect, useState } from "react";
import { Config, Genre } from "../types/movies";
import { axiosClient } from "../utils/axios";
import { StoreCtx } from "./store";

export function StoreWrapper({ children }: { children: React.ReactNode }) {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [config, setConfig] = useState<Config | null>(null);

  const [isLoadingGenres, setIsLoadingGenres] = useState(true);
  const [isLoadingConfig, setIsLoadingConfig] = useState(true);
  const [errorGenres, setErrorGenres] = useState<Error | null>(null);
  const [errorConfig, setErrorConfig] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchGenres = async () => {
      setErrorGenres(null);
      setIsLoadingGenres(true);

      try {
        const resp = await axiosClient.get<{ genres: Genre[] }>(
          "/genre/movie/list",
          { signal }
        );
        setGenres(resp.data.genres);
      } catch (err) {
        if (!(err instanceof CanceledError)) {
          setErrorGenres(err as Error);
        }
      } finally {
        if (!signal.aborted) {
          setIsLoadingGenres(false);
        }
      }
    };

    const fetchConfig = async () => {
      setErrorConfig(null);
      setIsLoadingConfig(true);

      try {
        const resp = await axiosClient.get<{
          images: { secure_base_url: string };
        }>("/configuration", { signal });
        setConfig({ baseUrl: resp.data.images.secure_base_url });
      } catch (err) {
        if (!(err instanceof CanceledError)) {
          setErrorConfig(err as Error);
        }
      } finally {
        if (!signal.aborted) {
          setIsLoadingConfig(false);
        }
      }
    };

    fetchGenres().catch(console.error);
    fetchConfig().catch(console.error);

    return () => {
      controller.abort();
    };
  }, []);

  if (isLoadingConfig || isLoadingGenres) {
    return null;
  }

  if (errorConfig != null || errorGenres != null || config == null) {
    return <div>Oops! Something went wrong!</div>;
  }

  return (
    <StoreCtx.Provider value={{ genres, config }}>{children}</StoreCtx.Provider>
  );
}
