import SearchIcon from '@mui/icons-material/Search'
import { RowBox, Search, SearchButton, StyledInputBase } from './StyledComponents'

export function SearchLayout() {
  return (
    <RowBox sx={{
    width: '100%',
    marginBottom: '65px'
    }}>
        <Search sx={{
        border: `3px solid #f0f2f4`,
        width: '100%',
        backgroundColor: 'white'
        }}>
            <StyledInputBase placeholder="Search…" />
        </Search>
        <SearchButton>
            <SearchIcon />
        </SearchButton>
    </RowBox>
  )
}
  