import React from "react";
import DataTable , { TableProps, createTheme} from 'react-data-table-component';
import Checkbox from '@material-ui/core/Checkbox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import LinearProgress from '@material-ui/core/LinearProgress';
import { LinearIndeterminate } from "./progressBar";



const sortIcon = < ArrowDownward />;
const selectProps = { indeterminate: (isIndeterminate : boolean ) => isIndeterminate };

createTheme('solarized', {
    text: {
      primary: '#268bd2',
      secondary: '#2aa198',
    },
    background: {
      default: '#002b36',
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
    divider: {
      default: '#073642',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  }, 'dark');

  const paginationOptions = {
    rowsPerPageText: 'Per Page',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
  };

  const customStyles = {
    rows: {
        style: {
            minHeight: '72px', // override the row height
        },
    },
    headCells: {
        style: {
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
            color:'white',
            fontSize:'14px',
            fontWeight:'bold'
        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
        },
    },
};


function DataTableBase<T>(props: TableProps<T>): JSX.Element {
    return (
        <DataTable
            // pagination
            // paginationComponentOptions={paginationOptions}
            selectableRowsComponent={Checkbox}
            selectableRowsComponentProps={selectProps}
            sortIcon={sortIcon}
            progressComponent={<LinearIndeterminate />}
            dense={true}
            highlightOnHover={true}
            theme="solarized"
            customStyles={customStyles}

            {...props}
        />
    );
}

export default DataTableBase;