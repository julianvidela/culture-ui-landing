import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { componentService } from "@/services/componentService"; // Importamos el servicio

// Definir el tipo de los componentes
export interface Component {
  _id: string;
  name: string;
  description: string;
  installationCli: string;
  usage: string;
  properties: string[];
  advancedUsage: string;
  isPremium: boolean;
}

// Estado inicial
interface ComponentState {
  components: Component[];
  loading: boolean;
  error: string | null;
}

const initialState: ComponentState = {
  components: [],
  loading: false,
  error: null,
};

// Usamos componentService en el thunk
export const fetchComponents = createAsyncThunk(
  "components/fetchComponents",
  async () => {
    try {
      return await componentService(); // Llamamos directamente al servicio
    } catch (error) {
      throw new Error("Error obteniendo los componentes");
    }
  }
);

const componentSlice = createSlice({
  name: "components",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComponents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchComponents.fulfilled, (state, action) => {
        state.loading = false;
        state.components = action.payload;
      })
      .addCase(fetchComponents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Error desconocido";
      });
  },
});

export default componentSlice.reducer;
