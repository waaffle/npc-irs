import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import cn from 'classnames';
import { AnimatePresence } from 'framer-motion';
import { useContext, useState } from 'react';
import { DataContext } from '../../context/DataContext';
import { MenuContext } from '../../context/MenuContext';
import { SearchToolbar } from '../searchToolbar/SearchToolbar';
import { UserModal } from '../userModal/UserModal';
import './dataTable.scss';

const columns = [

    {
        field: 'fullName',
        headerName: 'Имя',
        minWidth: 200,
        flex: 2,
        align: 'center',
        renderHeader: (params) => (
            <div style={{ paddingLeft: '20px' }}>{params.colDef.headerName}</div>
        ),
        renderCell: (params) => {
            return (
                <div className='avatar'>
                    <img src={params.row.picture || "/noavatar.png"} alt="avatar" />
                    <span className='text'>{params.row.fullName || ""}</span>
                </div>
            )
        }
    },
    {
        field: 'email',
        renderHeader: (params) => (
            <div style={{ paddingLeft: '20px' }}>{params.colDef.headerName}</div>
        ),
        renderCell: (params) => {
            return (
                <div style={{ paddingLeft: '20px' }}>{params.row.email}</div>
            )
        },
        headerName: 'Почта',
        minWidth: 250,
        flex: 2
    },
    {
        field: 'phone',
        headerName: 'Телефон',
        headerAlign: "center",
        align: 'center',
        minWidth: 200,
        flex: 2
    },
    {
        field: 'age',
        headerName: 'Возраст',
        headerAlign: "center",
        align: 'center',
        type: 'number',
        minWidth: 50,
        flex: 1
    },
    {
        field: 'salary',
        headerName: 'Зарплата',
        headerAlign: "center",
        align: 'center',
        type: 'number',
        minWidth: 100,
        flex: 1
    },
    {
        field: 'registered',
        headerName: 'Дата регистрации',
        headerAlign: "center",
        align: 'center',
        type: 'date',
        minWidth: 150,
        flex: 1.5,
        valueGetter: (value, row) => (
            new Date(row.registered) || ""
        )
    },

];


export const DataTable = () => {
    const rows = useContext(DataContext);
    const { isOpen } = useContext(MenuContext);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleRowClick = (params) => {
        setSelectedUser(params.row);
    };

    const closeModal = () => {
        setSelectedUser(null);
    };


    return (
        <div className="dataTable">
            <Box sx={{ height: '100%', minWidth: '100%' }}>
                <DataGrid className={cn("dataGrid", isOpen && "open")}
                    getRowId={(row) => (row._id)}
                    rows={rows}
                    columns={columns}
                    style={{ minHeight: '660px' }}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 9,
                            },
                        },
                    }}
                    slots={{
                        toolbar: SearchToolbar
                    }}
                    sx={{
                        "& .MuiDataGrid-cell:focus": {
                            outline: "none"
                        },
                        "& .MuiDataGrid-columnHeader:focus": {
                            "outlineColor": "#bebebe42",
                        },
                        "& .MuiDataGrid-row:hover": {

                            cursor: "pointer"
                        },
                    }}
                    disableColumnResize
                    disableRowSelectionOnClick
                    disableColumnFilter
                    disableColumnSelector
                    disableDensitySelector
                    disableColumnMenu
                    onRowClick={handleRowClick}
                    pageSizeOptions={[9]}
                />
            </Box>
            <AnimatePresence>{selectedUser && (
                <UserModal user={selectedUser} closeModal={closeModal} />
            )}
            </AnimatePresence>
        </div>
    );
}