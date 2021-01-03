import Card from '@material-ui/core/Card'
import React, {useState} from "react";
import {wordList} from './words1'
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";

function App() {
    let [location, setLocation] = useState(0)

    const handleNext = () => {
        let next = location + 1
        if (next !== location.length) {
            setLocation(next)
        }
    }

    const handlePrev = () => {
        let prev = location - 1
        if (prev > -1) {
            setLocation(prev)
        }
    }
    const reset = () => {
        setLocation(0)
    }

    return (
        <Grid container alignItems='center' justify='center' direction='row'>
            <Grid container alignItems='center' justify='center' direction='row'>
                <Grid item xs={3}>
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <Grid container alignItems='center' justify='center'>
                                    <Grid item>
                                        <Typography variant='h1'>{wordList.firstGrade[location]}</Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </CardActionArea>
                        <Grid container alignItems='center' justify='space-between' spacing='2'>
                            <Grid item>
                                <Button size='small' color='primary' onClick={handlePrev}>
                                    Previous
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button size='small' color='primary' onClick={reset}>
                                    Reset
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button size='small' color='primary' onClick={handleNext}>
                                    Next
                                </Button>
                            </Grid>
                        </Grid>
                        <CardActions>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    )
        ;
}

export default App;
