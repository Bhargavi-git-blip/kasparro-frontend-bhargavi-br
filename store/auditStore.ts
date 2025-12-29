import { create } from "zustand";
import { AuditModule } from "../types/audit";
import modules from "../data/audit-modules.json";

interface AuditState {
  selectedModule: AuditModule | null;
  modules: AuditModule[];
  setSelectedModule: (mod: AuditModule) => void;
}

export const useAuditStore = create<AuditState>((set) => ({
  selectedModule: null,
  modules: modules as AuditModule[],
  setSelectedModule: (mod: AuditModule) => set({ selectedModule: mod }),
}));
