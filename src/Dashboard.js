import React, {useState} from 'react';
import { Paper, makeStyles, Typography, List, ListItem, ListItemText, Chip, Button, TextField } from '@material-ui/core';

import {CTX} from './Store';

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

    

    const classes = useStyles();

    //CONTEXT STORE
    const {allChats, sendChatAction, user} = React.useContext(CTX); 
    //get the topics
    const topics = Object.keys(allChats);

    //LOCAL STATE
    const [textValue, changeTextValue] = useState('')
    const [activeTopic, changeActiveTopic] = useState(topics[0])


    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant="h5" component="h3">
                    Chat App
                </Typography>
                <Typography component="p">
                    {activeTopic }
                </Typography>
                <div className={classes.flex}>
                    <div className={classes.topicsWindow}>
                        <List>
                            {
                                topics.map(topic => (
                                    <ListItem onClick={e => changeActiveTopic(e.target.innerText)}  key={topic} button>
                                        <ListItemText primary={topic}></ListItemText>
                                    </ListItem>
                                ))
                            }
                        </List>
                    </div>
                    <div className={classes.chatWindow}>
                            {
                                allChats[activeTopic].map((chat, i) => (
                                    <div className={classes.flex} key={i}>
                                        <Chip label={chat.from} className={classes.chip} />
                                        <Typography variant='body1' gutterBottom>{chat.msg}</Typography>
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
                    <Button 
                    variant="contained" 
                    color="primary"
                    className={classes.button}
                    onClick={() => {
                        sendChatAction({from: user, msg: textValue, topic: activeTopic});
                        changeTextValue('')
                    }}
                    >
                        Send
                    </Button>

                </div>
            </Paper>
        </div>
    )
}