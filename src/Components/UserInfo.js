import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

export default function UserInfo(props) {
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
                            <TableCell>{props.data.email}</TableCell>
                            <TableCell>{props.data.nickname}</TableCell>
                            <TableCell>{props.data.password}</TableCell>
                        </TableRow>
                    }
                </TableBody>
            </Table>
        </React.Fragment>
    );
}
