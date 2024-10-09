import { GridToolbarContainer, GridToolbarQuickFilter } from "@mui/x-data-grid";

export const SearchToolbar = () => (
    <GridToolbarContainer>
        <GridToolbarQuickFilter placeholder="Поиск..." debounceMs={500} />
    </GridToolbarContainer>
);
