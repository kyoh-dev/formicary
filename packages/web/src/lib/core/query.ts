import type {
  SimulationOptions,
  StatsDto,
  WorldDto,
} from "@formicarium/domain";
import { invoke } from "@tauri-apps/api/core";

export const getWorldStatistics = async () => {
  try {
    return await invoke<StatsDto>("get_world_statistics");
  } catch (error) {
    console.error("Failed to get world statistics:", error);
  }
};

export const initialiseSimulation = async (options: SimulationOptions) => {
  try {
    await invoke("initialise_simulation", { initParams: options });
  } catch (error) {
    console.error("Failed to initialise simulation:", error);
  }
};

export const getWorldState = async () => {
  try {
    return await invoke<WorldDto>("get_world_state");
  } catch (error) {
    console.error("Failed to get world state:", error);
  }
};
