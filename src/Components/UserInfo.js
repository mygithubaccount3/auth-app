import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

export default function UserInfo() {
    return (
        <React.Fragment>
            <Title>User info</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Email</TableCell>
                        <TableCell>Nickname</TableCell>
                        <TableCell>Password</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        <TableRow key={1}>
                            <TableCell>{JSON.parse(localStorage.getItem("account")).email}</TableCell>
                            <TableCell>{JSON.parse(localStorage.getItem("account")).nickname}</TableCell>
                            <TableCell>{JSON.parse(localStorage.getItem("account")).password}</TableCell>
                        </TableRow>
                    }
                </TableBody>
            </Table>
        </React.Fragment>
    );
}
