import * as React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from '@mui/material';

export default function CustomTable({
  columns,
  rows,
  uniqueKey,
  onEdit,
  onDelete,
}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // Colonne actions uniquement si on a au moins une fonction
  const hasActions = onEdit || onDelete;

  const allColumns = hasActions
    ? [
        ...columns,
        {
          id: 'actions',
          label: 'Actions',
          minWidth: 150,
          align: 'center',
          isAction: true,
        },
      ]
    : columns;

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {allColumns.map((col) => (
                <TableCell
                  key={col.id}
                  align={col.align || 'left'}
                  style={{ minWidth: col.minWidth || 100 }}
                >
                  {col.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, i) => (
                <TableRow hover key={row[uniqueKey] || i}>
                  {allColumns.map((col) => {
                    if (col.isAction) {
                      return (
                        <TableCell
                          key="actions"
                          align={col.align || 'center'}
                        >
                          {onEdit && (
                            <Button
                              size="small"
                              variant="outlined"
                              onClick={() => onEdit(row)}
                              sx={{ mr: 1 }}
                            >
                              Edit
                            </Button>
                          )}
                          {onDelete && (
                            <Button
                              size="small"
                              variant="outlined"
                              color="error"
                              onClick={() => onDelete(row[uniqueKey])}
                            >
                              Delete
                            </Button>
                          )}
                        </TableCell>
                      );
                    }

                    const value = row[col.id];
                    return (
                      <TableCell key={col.id} align={col.align || 'left'}>
                        {col.format && typeof value === 'number'
                          ? col.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
