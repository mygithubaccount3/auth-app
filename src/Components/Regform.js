import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom'
import { register } from "../index";
import "../login.css"

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Regform() {
    const classes = useStyles();
    let dispatch = useDispatch();
    let users = [];

    function registration(e) {
        e.preventDefault();

        users.push({email: document.getElementById("email").value, nickname: document.getElementById("nickname").value,
                    password: document.getElementById("password").value});
        localStorage.setItem("users", JSON.stringify(users)
        );

        dispatch(register({
            nickname: document.getElementById("nickname").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
        }));

        document.getElementsByClassName("info")[0].innerHTML = "You are registered!";
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="nickname"
                                name="nickname"
                                variant="outlined"
                                required
                                fullWidth
                                id="nickname"
                                label="Nickname"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={registration}
                    >
                        Sign Up
                    </Button>
                    <p className="info"></p>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link to="/" className="nav-item nav-link navbar__item">Already have an account? Sign in</Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}
