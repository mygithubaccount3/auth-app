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
import { Link, useHistory } from 'react-router-dom'

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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Loginform() {
    const classes = useStyles();
    let history = useHistory();

    function logIn(e) {
        e.preventDefault();

        if(Array.isArray(JSON.parse(localStorage.getItem("users"))) && JSON.parse(localStorage.getItem("users")).length) {
            JSON.parse(localStorage.getItem("users")).forEach((el) => {
                if(el.email === document.getElementById("email").value) {
                    history.push({pathname: '/dashboard'});
                    localStorage.setItem("account", JSON.stringify({
                        email: el.email,
                        password: el.password,
                        nickname: el.nickname}))
                }
                else document.getElementsByClassName("error")[0].innerHTML = "User not found";
            });
        }
        else document.getElementsByClassName("error")[0].innerHTML = "User not found";
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={logIn}
                    >
                        Sign In
                    </Button>
                    <p className="error"></p>
                    <Grid container>
                        <Grid item>
                            <Link to="/sign_up" className="nav-item nav-link navbar__item">Don't have an account? Sign Up</Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}
