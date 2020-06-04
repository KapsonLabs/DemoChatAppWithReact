import React, {useState} from 'react';
import { Paper, makeStyles, Typography, List, ListItem, ListItemText, Chip, Button, TextField } from '@material-ui/core';



const useStyles = makeStyles(theme => ({
    root: {
        margin: '50px',
        padding: theme.spacing(3,2)
    },
    flex: {
        display: 'flex',
        alignItems: 'center'
    },
    topicsWindow: {
        width: '30%',
        height: '300px',
        borderRight: '1px solid grey'
    },
    chatWindow: {
        width: '70%',
        height: '300px',
        padding: '20px'
    },
    chatBox: {
        width: '85%'
    },
    button: {
        width: '15%'
    }
}))

export default function Dashboard(){

    const [textValue, changeTextValue] = useState('')

    const classes = useStyles();


    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant="h5" component="h3">
                    Chat App
                </Typography>
                <Typography component="p">
                    Topic placeholder
                </Typography>
                <div className={classes.flex}>
                    <div className={classes.topicsWindow}>
                        <List>
                            {
                                ['topic'].map(topic => (
                                    <ListItem key={topic} button>
                                        <ListItemText primary={topic}></ListItemText>
                                    </ListItem>
                                ))
                            }
                        </List>
                    </div>
                    <div className={classes.chatWindow}>
                            {
                                [{from: 'user', msg: 'hello'}].map((chat, i) => (
                                    <div className={classes.flex} key={i}>
                                        <Chip label={chat.from} classname={classes.chip} />
                                        <Typography variant='p'>{chat.msg}</Typography>
                                    </div>
                                ))
                            }
                    </div>
                </div>
                <div className={classes.flex}>
                    <TextField 
                        label="Send a Chat"
                        className={classes.chatBox}
                        value={textValue}
                        onChange={e => changeTextValue(e.target.value)}
                    />
                    <Button variant="contained" color="primary">
                        Send
                    </Button>

                </div>
            </Paper>
        </div>
    )
}