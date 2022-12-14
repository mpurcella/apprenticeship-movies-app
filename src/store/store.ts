import { createContext, useContext } from "react";
import { Config, Genre } from "../types/movies";

type Store = {
  genres: Genre[];
  config: Config;
};

export const StoreCtx = createContext<Store>({
  genres: [],
  config: { baseImageUrl: "" },
});

export function useStore() {
  return useContext(StoreCtx);
}
